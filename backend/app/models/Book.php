<?php

class Book {
    private PDO $db;

    public function __construct(PDO $db) {
        $this->db = $db;
    }

    public function all(): array {
        $statement = $this->db->query(
            "SELECT * FROM books WHERE status = 1 ORDER BY id DESC"
        );

        return $statement->fetchAll();
    }

    public function create(
        string $title,
        string $author,
        int $shelf_id,
        ?string $isbn = ''
    ): bool {
        $statement = $this->db->prepare(
            "INSERT INTO books (title, author, isbn, shelf_id)
            VALUES (:title, :author, :isbn, :shelf_id)"
        );

        return $statement->execute([
            ':title' => $title,
            ':author' => $author,
            ':isbn' => $isbn,
            ':shelf_id' => $shelf_id
        ]);
    }

    public function update(
        int $id,
        string $title,
        string $author,
        int $shelf_id,
        ?string $isbn = ''
    ): bool {
        $statement = $this->db->prepare(
            "UPDATE books 
            SET title = :title, 
                author = :author, 
                shelf_id = :shelf_id,
                isbn = :isbn
             WHERE id = :id"
        );

        return $statement->execute([
            ':id' => $id,
            ':title' => $title,
            ':author' => $author,
            ':shelf_id' => $shelf_id,
            ':isbn' => $isbn
        ]);
    }

    public function availability(
        int $id,
        int $is_available,
    ) {
        $statement = $this->db->prepare(
            "UPDATE books 
            SET is_available = :is_available
            WHERE id = :id"
        );

        return $statement->execute([
            ':id' => $id,
            ':is_available' => $is_available,
        ]);
    }

    public function delete(
        int $id
    ): bool {
        $statement = $this->db->prepare(
            "UPDATE books 
            SET status = 0
             WHERE id = :id"
        );

        return $statement->execute([
            ':id' => $id
        ]);

        return $statement->rowCount() > 0;
    }
}