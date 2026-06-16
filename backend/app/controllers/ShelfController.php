<?php
require_once __DIR__ . '/../models/Shelf.php';
class ShelfController {

    private array $request_data;
    private Shelf $shelf;
    public function __construct() {
        $data = Helpers::getRequestData();
        $this->request_data = (!is_array($data)) ? [] : $data ;

        $db = Database::getConnection();
        $this->shelf = new Shelf($db);
    }

    public function index() {
        try {
            return json_encode($this->shelf->all());
        } catch (Throwable $e) {
            Helpers::errorLogger($e->getMessage());
            http_response_code(500);
            return json_encode([
                'successs' => false,
                'message' => 'error occuired'
            ]);
        }
    }

    public function store() {
        //validation
        Helpers::checkInputs($this->request_data);
        try {
            $save = $this->shelf->create(
                $this->request_data['shelf_name']
            );

            return $save ? json_encode([
                'success' => true,
                'message' => 'Shelf added successfuly'
            ]): json_encode([
                'success' => false,
                'message' => 'error occuired'
            ]);
        } catch (Throwable $e) {
            Helpers::errorLogger($e->getMessage());
            http_response_code(500);
            return json_encode([
                'successs' => false,
                'message' => 'error occuired'
            ]);
        }
    }
    public function update() {
        //validation
        Helpers::checkInputs($this->request_data);
        try {
            $update = $this->shelf->update(
                $this->request_data['id'],
                $this->request_data['shelf_name']
            );

           return $update ? json_encode([
                'success' => true,
                'message' => 'Edited Successfuly'
            ]): json_encode([
                'success' => true,
                'message' => 'error occuired'
            ]);
        } catch (Throwable $e) {
            Helpers::errorLogger($e->getMessage());
            http_response_code(500);
            return json_encode([
                'successs' => false,
                'message' => 'error occuired'
            ]);
        }
    }
    public function delete() {
        try {
            $delete = $this->shelf->delete(
                $this->request_data['id']
            );

            return $delete ? json_encode([
                'success' => true,
                'message' => 'Book Deleted Successfuly'
            ]): json_encode([
                'success' => true,
                'message' => 'error occuired'
            ]);
        } catch (Throwable $e) {
            Helpers::errorLogger($e->getMessage());
            http_response_code(500);
            return json_encode([
                'successs' => false,
                'message' => 'error occuired'
            ]);
        }
    }
}