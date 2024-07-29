import {PropsWithChildren} from "react";

export default function HeroWrapper({ children }: PropsWithChildren) {
    return (
        <section id="hero" className="bg-night text-white px-10 py-6 tablet:py-10">
            {children}
        </section>
    );
}
