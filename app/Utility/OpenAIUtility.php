<?php

namespace App\Utility;

use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Client\RequestException;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class OpenAIUtility
{
    public function __construct(private ?string $apiKey = null)
    {
        if ($this->apiKey == null) {
            $this->apiKey = config('app.openai_apikey');
        }
    }

    public function generateDomains(array $keywords, string $description, int $charLength): array
    {
        try {
            $response = Http::retry(3, 500)
                ->withToken($this->apiKey)
                ->asJson()
                ->post('https://api.openai.com/v1/chat/completions', [
                    'model' => 'gpt-4o-mini',
                    'response_format' => [
                        'type' => 'json_object'
                    ],
                    'messages' => [
                        [
                            'role' => 'system',
                            'content' => 'You are a branding lead, skilled at creating smart and witty, brandable domain names without extensions. Your response must be in valid JSON. Input will be JSON with "keywords" (a list for domain name ideas), "description" (a description of what the user\'s company or idea entails), "charLength" (a preferred character length for each domain name) and "number_of_domains" (number of names to generate). Output JSON with a "domain_names" array of names.'
                        ],
                        [
                            'role' => 'user',
                            'content' => json_encode(['keywords' => $keywords, 'description' => $description, 'charLength' => $charLength, 'number_of_domains' => 25])
                        ]
                    ]
                ])->throw()->json();

            if (array_key_exists('choices', $response)) {
                $choices = $response['choices'];

                if (array_key_exists(0, $choices)) {
                    $choice = $choices[0];

                    if (array_key_exists('message', $choice)) {
                        $message = $choice['message'];

                        if (array_key_exists('content', $message)) {
                            $content = $message['content'];

                            return json_decode($content, true)['domain_names'];
                        }
                    }
                }
            }

            throw new \Exception('Malformed response from OpenAI: ' . json_encode($response));
        } catch (ConnectionException|RequestException|\Exception $exception) {
            Log::error("Failed to generate domains!\n" . $exception->getMessage());
            return [];
        }
    }
}
