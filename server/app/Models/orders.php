<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class orders extends Model
{
    use HasFactory;

    protected $table = 'orders';
    protected $primaryKey = 'id';
    protected $filltable = ['user_id', 'order_date', 'status', 'total_money'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
