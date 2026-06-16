<?php
class Database {
    private static ?PDO $db_connection = null;
    public static function getConnection(): PDO {
        $config = require_once __DIR__ .'/../../config/config.php';
        if (self::$db_connection === null) {
            try {
                self::$db_connection = new PDO(
                    "mysql:host={$config['host']};dbname={$config['db_name']};charset=utf8mb4",
                    $config['usr_name'],
                    $config['password'],
                    [
                        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    ]
                );
                return self::$db_connection;
            } catch (PDOException $e) {
                Helpers::errorLogger($e->getMessage());
                throw new Exception("Database connection failed.");
            }
        }
    }
}