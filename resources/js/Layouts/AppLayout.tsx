import NavLink from "@/Components/NavLink";
import {PropsWithChildren} from "react";

export default function AppLayout({children}: PropsWithChildren) {
    return (
        <>
            <header className="bg-night text-white">
                <nav className="container mx-auto flex flex-col items-center text-center p-2 tablet:flex-row tablet:justify-between tablet:p-0 tablet:py-4">
                    <div className="">
                        <a href={route('home')} className="mb-3 tablet:mb-0">
                            <h3 className="text-school-bus-yellow font-bold text-xl mobile-m:text-2xl laptop:text-4xl 4k:text-6xl">Brand Domains</h3>
                        </a>
                        <h4>By PsionicAlch</h4>
                    </div>

                    <ul className="flex flex-row gap-4 laptop:gap-5 4k:gap-6">
                        <NavLink href={route('generate.index')}>Generate</NavLink>
                    </ul>
                </nav>
            </header>

            {children}

            <footer className="text-center py-8 bg-night text-white gap-6">
                <p>Made with ❤️ by <a href="https://www.psionicalch.com" target="_blank" className="text-school-bus-yellow hover:underline">PsionicAlch</a></p>
            </footer>
        </>
    )
}
