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
        extend: {
            keyframes: {
                'slide-left': {
                    '0%': {
                        transform: 'translateX(100%)',
                    },
                    '100%': {
                        transform: 'translateX(0%)',
                    }
                },
                'slide-right': {
                    '0%': {
                        transform: 'translateX(-100%)',
                    },
                    '100%': {
                        transform: 'translateX(0%)',
                    }
                }
            },
            animation: {
                'slide-left': 'slide-left 1s ease-out',
                'slide-right': 'slide-right 1s ease-out',
            }
        }
    },
    plugins: [forms],
};
