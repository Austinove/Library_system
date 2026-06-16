<?php
//include all controllers.
require_once __DIR__ . '/Database.php';
require_once __DIR__ . '/../Controllers/BookController.php';
require_once __DIR__ . '/../Controllers/BorrowController.php';
require_once __DIR__ . '/../Controllers/ShelfController.php';

//default server folder.
$default_folder = '/library_management/backend/public';


$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];
$url = str_replace($default_folder, '', $url);

//If no URL page not found.
if(empty($url)){
    http_response_code(404);
    echo json_encode([
        'success' => false,
        'message' => 'Page Not Found'
    ]);
    exit;
}

//fetch route
if(!isset($routes[$method][$url])) {
    http_response_code(404);
    echo json_encode([
        'success' => false,
        'message' => 'Page Not Found'
    ]);
    exit;
}
$route = $routes[$method][$url];

//create controller instances.
[$controllerName, $method] = explode('@', $route);
$controller = new $controllerName();
echo $controller->$method();
