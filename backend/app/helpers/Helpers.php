<?php
class Helpers {
    public static function errorLogger(string $message): void{
        error_log(
            "[" . date('Y-m-d H:i:s') . "] "
            . $message
            . PHP_EOL,
            3,
            __DIR__ . '/../../logs/error.log'
        );
    }

    public static function checkInputs(array $inputs): bool {
        foreach ($inputs as $value) {
            if (!isset($value) || $value === '') {
                return false;
            }
        }
        return true;
    }

    public static function getRequestData() {
        try {
            $data = json_decode(file_get_contents('php://input'), true);
            return $data;
        } catch (Throwable $e) {
            Helpers::errorLogger($e->getMessage());
            http_response_code(500);
            echo json_encode([
                'successs' => false,
                'message' => 'request data not found'
            ]);
            exit;
        }
    }

}