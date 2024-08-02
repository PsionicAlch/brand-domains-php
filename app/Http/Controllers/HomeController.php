<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function home() : Response
    {
        return Inertia::render('Home', []);
    }

    public function howto() : Response
    {
        return Inertia::render('HowTo', []);
    }
}
