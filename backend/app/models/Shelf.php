<?php

class shelf {
    private PDO $db;

    public function __construct(PDO $db) {
        $this->db = $db;
    }

    public function all(): array {
        $statement = $this->db->query(
            "SELECT * FROM shelf ORDER BY id DESC"
        );

        return $statement->fetchAll();
    }

    public function create(
        string $shelf_name,
    ): bool {
        $statement = $this->db->prepare(
            "INSERT INTO shelf (shelf_name)
            VALUES (:shelf_name)"
        );

        return $statement->execute([
            ':shelf_name' => $shelf_name,
        ]);
    }

    public function update(
        int $id,
        string $shelf_name
    ): bool {
        $statement = $this->db->prepare(
            "UPDATE shelf 
            SET shelf_name = :shelf_name
             WHERE id = :id"
        );

        return $statement->execute([
            ':shelf_name' => $shelf_name,
            ':id' => $id
        ]);
    }

    public function delete(
        int $id
    ): bool {
        $statement = $this->db->prepare(
            "DELETE FROM shelf WHERE id = :id"
        );

        $statement->execute([
            ':id' => $id
        ]);

        return $statement->rowCount() > 0;
    }
}