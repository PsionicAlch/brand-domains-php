import {HTMLAttributes, PropsWithChildren} from "react";

type Props = PropsWithChildren & HTMLAttributes<HTMLElement>;

export default function SectionWrapper({children, className, ...attr}: Props) {
    return (
        <section className={`container mx-auto py-10 space-y-4 tablet:space-y-6 4k:space-y-8', 'border-b border-dashed border-school-bus-yellow, ${className}`} {...attr}>
            {children}
        </section>
    )
}
