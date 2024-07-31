<?php

namespace App\Utility;

class StringUtility
{
    public static function stringToArray(string $string): array
    {
        return collect(explode(",", $string))
            ->map(fn ($word) => trim($word))
            ->filter(fn ($word) => !empty($word))
            ->toArray();
    }
}
