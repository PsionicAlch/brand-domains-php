export default function NavBar() {
    return (
        <header>
            <nav className="container mx-auto flex flex-col gap-3 px-5 md:gap-0 md:flex-row md:justify-between md:items-center mx:px-10 py-5">
                <div>
                    <h2 className="text-xl md:text-3xl font-bold">
                        <a href={route("home")}>Brand Domains</a>
                    </h2>
                    <h3 className="text-sm md:text-xl font-light text-neutral-500">
                        by{" "}
                        <a
                            href="https://www.psionicalch.com"
                            target="_blank"
                            className="hover:text-neutral-800"
                        >
                            PsionicAlch
                        </a>
                    </h3>
                </div>

                <ul className="flex flex-row gap-4 text-neutral-500">
                    <li>
                        <a
                            href={route("generate.index")}
                            className="hover:text-neutral-800"
                        >
                            Generate
                        </a>
                    </li>
                    <li>
                        <a
                            href={route("howto")}
                            className="hover:text-neutral-800"
                        >
                            How To
                        </a>
                    </li>
                    <li>
                        <a
                            href={route("privacy")}
                            className="hover:text-neutral-800"
                        >
                            Privacy Policy
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
