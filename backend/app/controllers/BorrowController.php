<?php
require_once __DIR__ . '/../models/Borrow.php';
require_once __DIR__ . '/../models/Book.php';

class BorrowController {

    private $request_data;
    private Borrow $borrow;
    private Book $book;

    public function __construct() {
        $this->request_data = Helpers::getRequestData() ?? [];

        $db = Database::getConnection();
        $this->borrow = new Borrow($db);
        $this->book = new Book($db);
    }

    public function index() {
        try {
            return json_encode($this->borrow->all());
        } catch (Throwable $e) {
            Helpers::errorLogger($e->getMessage());
            http_response_code(500);
            echo json_encode([
                'successs' => false,
                'message' => 'error occuired'
            ]);
        }
    }

    public function borrowed_books() {
        try {
            return json_encode($this->borrow->borrower());
        } catch (Throwable $e) {
            Helpers::errorLogger($e->getMessage());
            http_response_code(500);
            echo json_encode([
                'successs' => false,
                'message' => 'error occuired'
            ]);
        }
    }

    public function store() {
        //validation
        Helpers::checkInputs($this->request_data);
        try {
            $save = $this->borrow->create(
                $this->request_data['details'],
                $this->request_data['borrower_name'],
                $this->request_data['book_id']
            );

            $update = $this->book->availability($this->request_data['book_id'], 0);

            return $save ? json_encode([
                'success' => true,
                'message' => 'Request was successfuly'
            ]): json_encode([
                'success' => false,
                'message' => 'error occuired'
            ]);
        } catch (Throwable $e) {
            Helpers::errorLogger($e->getMessage());
            http_response_code(500);
            echo json_encode([
                'successs' => false,
                'message' => 'error occuired'
            ]);
        }
    }
    public function update() {
        //validation
        Helpers::checkInputs($this->request_data);

        try {
            $update = $this->borrow->update(
                $this->request_data['id'],
                $this->request_data['details'],
                $this->request_data['borrower_name'],
                $this->request_data['book_id'],
                $this->request_data['active'],
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
            echo json_encode([
                'successs' => false,
                'message' => 'error occuired'
            ]);
        }
    }
    public function returned() {
        //validation
        Helpers::checkInputs($this->request_data);

        try {
            $update = $this->borrow->returned($this->request_data['id'], 0);

            $update = $this->book->availability($this->request_data['book_id'], 1);

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
            echo json_encode([
                'successs' => false,
                'message' => 'error occuired'
            ]);
        }
    }
    public function delete() {
        //validation
        Helpers::checkInputs($this->request_data);

        try {
            $delete = $this->borrow->delete(
                $this->request_data['id']
            );

            return $delete ? json_encode([
                'success' => true,
                'message' => 'Deleted Successfuly'
            ]): json_encode([
                'success' => true,
                'message' => 'error occuired'
            ]);
        } catch (Throwable $e) {
            Helpers::errorLogger($e->getMessage());
            http_response_code(500);
            echo json_encode([
                'successs' => false,
                'message' => 'error occuired'
            ]);
        }
    }
}