<?php

namespace App\Validation;

use Illuminate\Validation\Validator;

class ValidateKeywords
{
    public function __invoke(Validator $validator): void
    {
        $keywords = $validator->getData()['keywords'];
        $keywordsArray = collect(explode(',', $keywords))
            ->map(fn ($keyword) => trim($keyword))
            ->filter(fn ($keyword) => !empty($keyword));

        foreach ($keywordsArray as $keyword) {
            if (!$this->validateTwoWordsMax($keyword)) {
                $validator->errors()->add('keywords', "{$keyword} can't contain more than two words!");
            }
        }
    }

    private function validateTwoWordsMax($keyword): bool
    {
        $keywordArray = collect(explode(' ', $keyword));

        if ($keywordArray->count() > 2) {
            return false;
        }

        return true;
    }
}
