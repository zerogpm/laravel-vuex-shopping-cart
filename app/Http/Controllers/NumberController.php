<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NumberController extends Controller
{
    public function index(Request $request)
    {
        $request = $request->query();
        return  response()->json(['number' => rand($request['min'], $request['max'])]);
    }
}
