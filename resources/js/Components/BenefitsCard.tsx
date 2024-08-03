import {PropsWithChildren} from "react";

type BenefitsCardProps = {
    title: string;
} & PropsWithChildren;

export default function BenefitsCard({ title, children }: BenefitsCardProps) {
    return (
        <div className="col-span-1 shadow-xl rounded-xl border border-neutral-300 px-5 py-10 md:px-10 md:py-20">
            <h2 className="capitalize font-bold mb-5 text-base md:text-2xl">{ title }</h2>
            <p className="leading-relaxed text-gray-500 text-xs md:text-base">{ children }</p>
        </div>
    );
}
