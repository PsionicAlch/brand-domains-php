<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

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
