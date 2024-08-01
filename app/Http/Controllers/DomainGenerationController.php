<?php

namespace App\Http\Controllers;

use App\Utility\OpenAIUtility;
use App\Utility\StringUtility;
use App\Validation\ValidateDescription;
use App\Validation\ValidateExtensions;
use App\Validation\ValidateKeywords;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;
use Iodev\Whois\Factory;

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

        $keywords = StringUtility::stringToArray($validator->getData()['keywords']);
        $extensions = StringUtility::stringToArray($validator->getData()['extensions']);
        $description = $validator->getData()['description'];

        $domainNames = (new OpenAIUtility())->generateDomains($keywords, $description);

        if (empty($domainNames)) {
            return response()->json(['errors' => ['domains' => 'Failed to generate domain names.']], 400);
        }

        // Add to database here!

        return response()->json(['domains' => $domainNames]);
    }

    public function checkDomain(Request $request) : JsonResponse
    {
        $validated = $request->validate([
            'domain' => 'required|string|max:50',
        ]);

        $whois = Factory::get()->createWhois();

        return response()->json(['available' => $whois->isDomainAvailable($validated['domain'])]);
    }
}
