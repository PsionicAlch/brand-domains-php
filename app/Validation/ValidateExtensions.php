<?php

namespace App\Validation;

use Illuminate\Validation\Validator;

class ValidateExtensions
{
    public function __invoke(Validator $validator): void
    {
        $extensions = $validator->getData()['extensions'];
        $extensionsArray = collect(explode(",", $extensions))
            ->map(fn ($extension) => trim($extension))
            ->filter(fn ($extension) => !empty($extension));

        foreach ($extensionsArray as $extension) {
            if (!$this->validateStartsWithFullstop($extension)) {
                $validator->errors()->add('extensions', "{$extension} needs to start with a \".\"!");
            } else if (!$this->validateInValidList($extension)) {
                $validator->errors()->add('extensions', "{$extension} is not in the list of valid domain extensions!");
            }
        }
    }

    private function validateInValidList(string $extension): bool
    {
        return in_array($extension, config('app.valid_domain_extensions'));
    }

    private function validateStartsWithFullStop(string $extension): bool
    {
        return strcmp(substr($extension, 0), '.');
    }
}
