@php
    $title = 'Brand Domains by PsionicAlch';
    $description = 'Brand Domains helps you to find the perfect domain name for your brand using cutting edge A.I. technology.';
    $website = 'https://branddomains.psionicalch.com';
    $keywords = implode(', ' ,[
        'A.I.',
        'Cutting Edge',
        'Brand',
        'Name',
        'Brand Name',
        'Branding',
        'Domain',
        'Domain Name',
    ]);
@endphp

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="icon" type="image/svg" href="{{ asset('/images/icon.svg') }}">

        <title>{{ config('app.name') }}</title>

        {{-- Meta Description --}}
        <meta name="description" content="{{ $description }}">

        {{-- Keywords --}}
        <meta name="keywords" content="{{ $keywords }}">

        {{-- Author --}}
        <meta name="author" content="Jean-Jacques Strydom">

        {{-- Open Graph Tags for better social media integration --}}
        <meta property="og:title" content="{{ $title }}">
        <meta property="og:description" content="{{ $description }}">
        <meta property="og:image" content="{{ asset('/assets/images/BrandDomains_og_image.png') }}">
        <meta property="og:url" content="{{ $website }}">
        <meta property="og:type" content="website">

        {{-- Twitter Card Tags for better Twitter integration --}}
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="{{ $title }}">
        <meta name="twitter:description" content="{{ $description }}">
        <meta name="twitter:image" content="{{ asset('/images/BrandDomains_og_image.png') }}">
        <meta name="twitter:site" content="@psionicalch">

        {{-- Canonical Link --}}
        <link rel="canonical" href="{{ $website }}">

        <title inertia>{{ config('app.name', 'Brand Domains') }}</title>

        {{-- Umami analytics --}}
        @if(config('app.env') === 'production')
            <script defer src="https://umami.psionicalch.com/script.js" data-website-id="beee9f07-bb55-4527-ab36-4df9e15ad3a8"></script>
        @endif

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="antialiased bg-white text-black font-light selection:text-white selection:bg-black">
        @inertia
    </body>
</html>
