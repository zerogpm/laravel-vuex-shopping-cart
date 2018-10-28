<?php

use Illuminate\Database\Seeder;
use App\Question;
use App\User;

class QuestionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 3)->create()->each(function ($user) {
            $user->questions()->saveMany(
                factory(Question::class, rand(1, 50))->make()
            );
        });
    }
}
