<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuestionCollection;
use App\Question;


class QuestionController extends Controller
{
    public function index()
    {
        return new QuestionCollection(Question::paginate(3));
    }
}
