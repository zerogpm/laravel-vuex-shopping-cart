<?php

use Illuminate\Database\Seeder;
use App\Question;

class QuestionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Question::class, 50)->create();
    }
}
