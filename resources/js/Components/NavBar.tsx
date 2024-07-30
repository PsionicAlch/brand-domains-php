export default function NavBar() {
    return (
        <header>
            <nav className="container mx-auto flex flex-row justify-between items-center px-10 py-5">
                <div>
                    <h2 className="text-3xl font-bold"><a href="#">Brand Domains</a></h2>
                    <h3 className="text-xl font-light text-neutral-500">by{" "}
                        <a href="#" className="hover:text-neutral-800">
                            PsionicAlch
                        </a>
                    </h3>
                </div>

                <ul className="flex flex-row gap-4 text-neutral-500">
                    <li className="hover:text-neutral-800"><a href={route('generate.index')}>Generate</a></li>
                    <li className="hover:text-neutral-800"><a href="#">History</a></li>
                    <li className="hover:text-neutral-800"><a href="#">Settings</a></li>
                    <li className="hover:text-neutral-800"><a href="#">Sign Out</a></li>
                </ul>
            </nav>
        </header>
    );
}
