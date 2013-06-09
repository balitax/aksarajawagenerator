<?php

namespace App\Controllers;

use Lib\Controller as Controller;

class C_Home extends Controller {

    public static function before() {

    }

    public static function after() {

    }

    public static function index() {
        return Controller::view('home/v_index');
    }

}

?>