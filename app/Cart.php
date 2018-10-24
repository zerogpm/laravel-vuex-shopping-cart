<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    function product()
    {
        return $this->belongsTo(Product::class);
    }
}
