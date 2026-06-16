<?php

class borrow {
    private PDO $db;

    public function __construct(PDO $db) {
        $this->db = $db;
    }

    public function all(): array {
        $statement = $this->db->query(
            "SELECT * FROM borrowed_by ORDER BY id DESC"
        );

        return $statement->fetchAll();
    }

    public function borrower(): array {
        $statement = $this->db->query(
            "SELECT * FROM books b INNER JOIN borrowed_by bd ON b.id = bd.book_id "
        );

        return $statement->fetchAll();
    }

    public function create(
        string $details,
        string $borrower_name,
        int $book_id
    ): bool {
        $statement = $this->db->prepare(
            "INSERT INTO borrowed_by (details, borrower_name, book_id)
            VALUES (:details, :borrower_name, :book_id)"
        );

        return $statement->execute([
            ':details' => $details,
            ':borrower_name' => $borrower_name,
            ':book_id' => $book_id
        ]);
    }

    public function update(
        int $id,
        string $details,
        string $borrower_name,
        int $book_id,
        int $active
    ): bool {
        $statement = $this->db->prepare(
            "UPDATE borrowed_by 
            SET details = :details, 
                borrower_name = :borrower_name,
                book_id = :book_id,
                active = :active
             WHERE id = :id"
        );

        return $statement->execute([
            ':id' => $id,
            ':details' => $details,
            ':borrower_name' => $borrower_name,
            ':book_id' => $book_id,
            ':active' => $active
        ]);
    }

    public function returned(
        int $id,
        int $active
    ): bool {
        $statement = $this->db->prepare(
            "UPDATE borrowed_by 
            SET active = :active
             WHERE id = :id"
        );

        return $statement->execute([
            ':id' => $id,
            ':active' => $active
        ]);
    }

    public function delete(int $id): bool {
        $statement = $this->db->prepare(
            "DELETE FROM borrowed_by WHERE id = :id"
        );

        $statement->execute([
            ':id' => $id
        ]);

        return $statement->rowCount() > 0;
    }
}