<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class DomainGenerationController extends Controller
{
    public function index() : Response
    {
        return Inertia::render('DomainGeneration/Index', []);
    }
}
