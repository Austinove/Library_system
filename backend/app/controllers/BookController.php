<?php
require_once __DIR__ . '/../models/Book.php';

class BookController {

    private $request_data;
    private Book $book;

    public function __construct() {
        $this->request_data = Helpers::getRequestData() ?? [];

        $db = Database::getConnection();
        $this->book = new Book($db);
    }
    public function index() {
        try {
            return json_encode($this->book->all());
        } catch (Throwable $e) {
            Helpers::errorLogger($e->getMessage());
            http_response_code(500);
            return json_encode([
                'successs' => false,
                'message' => 'request data not found'
            ]);
        }
    }

    public function store() {
        //validation
        Helpers::checkInputs($this->request_data);
        try {
            $save = $this->book->create(
                $this->request_data['title'],
                $this->request_data['author'],
                $this->request_data['shelf_id'],
                $this->request_data['isbn'] ?? ''
            );

            return $save ? json_encode([
                'success' => true,
                'message' => 'Books added successfuly'
            ]): json_encode([
                'success' => false,
                'message' => 'error occuired'
            ]);
        } catch (Throwable $e) {
            Helpers::errorLogger($e->getMessage());
            http_response_code(500);
            return json_encode([
                'successs' => false,
                'message' => 'request data not found'
            ]);
        }
    }
    public function update() {
        //validation
        Helpers::checkInputs([
            $this->request_data['id'],
            $this->request_data['title'],
            $this->request_data['author'],
            $this->request_data['shelf_id']
        ]);

        try {
            $update = $this->book->update(
                $this->request_data['id'],
                $this->request_data['title'],
                $this->request_data['author'],
                $this->request_data['shelf_id'],
                $this->request_data['isbn'] ?? ''
            );

            return $update ? json_encode([
                'success' => true,
                'message' => 'Books Edited Successfuly'
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
        //validation
        Helpers::checkInputs([
            $this->request_data['id']
        ]);

        try {
            $delete = $this->book->delete(
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