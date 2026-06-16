<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/../app/helpers/Helpers.php';

try {
    require __DIR__ . '/../routes.php';
    require __DIR__ . '/../app/core/Controller.php';
} catch (Throwable $e) {
    Helpers::errorLogger($e->getMessage());

    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Internal Server Error'
    ]);
}