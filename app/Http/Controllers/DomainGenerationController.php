<?php

namespace App\Http\Controllers;

use App\Validation\ValidateDescription;
use App\Validation\ValidateExtensions;
use App\Validation\ValidateKeywords;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;

class DomainGenerationController extends Controller
{
    public function index() : Response
    {
        return Inertia::render('DomainGeneration/Index', []);
    }

    public function generate(Request $request) : JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'keywords' => 'required|regex:/^[a-zA-Z0-9_!?#,."\' ]+$/',
            'extensions' => 'required',
            'description' => 'required|max:250|regex:/^[a-zA-Z0-9_!?#,."\' ]+$/'
        ]);

        $validator->after([
            new ValidateKeywords,
            new ValidateExtensions,
            new ValidateDescription
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors()->messages();

            return response()->json(['errors' => $errors], 400);
        }

        return response()->json(['domains' => 'Yasss queen!']);
    }
}
