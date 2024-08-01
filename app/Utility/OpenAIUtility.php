<?php

namespace App\Utility;

class OpenAIUtility
{
    public function __construct(private ?string $apiKey = null)
    {
        if ($this->apiKey == null) {
            $this->apiKey = config('app.openai_apikey');
        }
    }

    public function generateDomains(array $keywords, string $description): array
    {
        $client = \OpenAI::client($this->apiKey);
        $result = $client->chat()->create([
            'model' => 'gpt-4o-mini',
            'messages' => [
                [
                    'role' => 'system',
                    'content' => 'You are a branding lead, skilled at creating smart and witty, brandable domain names without extensions. Your response must be in valid JSON. Input will be JSON with "keywords" (a list for domain name ideas), "description" (a description of what the user\'s company or idea entails), and "number_of_domains" (number of names to generate). Output JSON with a "domain_names" array of names.'
                ],
                [
                    'role' => 'user',
                    'content' => json_encode(['keywords' => $keywords, 'description' => $description, 'number_of_domains' => 25])
                ]
            ]
        ]);

        dump($result->choices);

        return json_decode($result->choices[0]->message->content, true)['domain_names'];
    }
}
