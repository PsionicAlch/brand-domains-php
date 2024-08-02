import {PropsWithChildren} from "react";

type BenefitsCardProps = {
    title: string;
} & PropsWithChildren;

export default function BenefitsCard({ title, children }: BenefitsCardProps) {
    return (
        <div className="col-span-1 px-10 shadow-xl rounded-xl py-20 border border-neutral-300">
            <h2 className="capitalize text-2xl font-bold mb-5">{ title }</h2>
            <p className="leading-relaxed text-gray-500">{ children }</p>
        </div>
    );
}
