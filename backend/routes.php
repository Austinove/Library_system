<?php

$routes = [
    'GET' => [
        '/books' => 'BookController@index',
        '/borrow' => 'BorrowController@index',
        '/borrow/borrowed_books' => 'BorrowController@borrowed_books',
        '/shelf' => 'ShelfController@index',
    ],
    'POST' => [
        '/books/create' => 'BookController@store',
        '/borrow/create' => 'BorrowController@store',
        '/borrow/returned' => 'BorrowController@returned',
        '/shelf/create' => 'ShelfController@store',
    ],
    'PUT' => [
        '/books/update' => 'BookController@update',
        '/borrow/update' => 'BorrowController@update',
        '/shelf/update' => 'ShelfController@update',
    ],
    'DELETE' => [
        '/books/delete' => 'BookController@delete',
        '/borrow/delete' => 'BorrowController@delete',
        '/shelf/delete' => 'ShelfController@delete',
    ],
];