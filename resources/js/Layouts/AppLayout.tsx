import {PropsWithChildren} from "react";
import NavBar from "@/Components/NavBar";

export default function AppLayout({children}: PropsWithChildren) {
    return (
        <>
            <NavBar />

            {children}

            <footer className="container mx-auto px-10 text-center text-neutral-500">
                <p>Made with ❤️ by <a href="https://www.psionicalch.com" target="_blank" className="hover:text-neutral-800">PsionicAlch</a></p>
            </footer>
        </>
    )
}
