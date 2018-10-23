<?php

use Illuminate\Database\Seeder;
use App\Product;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = [
            [
                "title"=> "Coffee",
                "description"=> "Beautiful coffee",
                "image"=> "https://via.placeholder.com/350x180C/O https://placeholder.com/",
                "price"=> 5.99
            ],
            [
                "title"=> "Tea",
                "description"=> "Lovely tea",
                "image"=> "https://via.placeholder.com/350x180C/O https://placeholder.com/",
                "price"=> 10.99
            ],
            [
                "title"=> "Aubergine",
                "description"=> "A single aubergine",
                "image"=> "https://via.placeholder.com/350x180C/O https://placeholder.com/",
                "price"=> 0.5
            ],
            [
                "title"=> "Banana",
                "description"=> "A lovely yellow banana",
                "image"=> "https://via.placeholder.com/350x180C/O https://placeholder.com/",
                "price"=> 0.9
            ],
            [
                "title"=> "Toothpaste",
                "description"=> "To brush your teeth",
                "image"=> "https://via.placeholder.com/350x180C/O https://placeholder.com/",
                "price"=> 2.5
            ]
        ];

        foreach ($products as $product) {
            Product::forceCreate($product);
        }
    }
}
