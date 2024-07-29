import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        screens: {
            'mobile': '321px',
            'mobile-lg': '376px',
            'tablet': '426px',
            'laptop': '769px',
            'laptop-l': '1025px',
            '4k': '1441px'
        },
        extend: {
            colors: {
                'battleship-gray': '#7F806Eff',
                'school-bus-yellow': '#FFD800ff',
                'raisin-black': '#25242Dff',
                'night': '#121212ff',
                'davys-gray': '#494853ff',
            },
            boxShadow: {
                'bottom-right': '7px 7px 25px rgba(0, 0, 0, 0.25)',
            }
        },
    },

    plugins: [forms],
};
