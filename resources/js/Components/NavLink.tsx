import {AnchorHTMLAttributes, PropsWithChildren} from "react";

type Props = PropsWithChildren & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function NavLink({ children, ...attrs }: Props) {
    return (
        <li className="text-sm hover:text-school-bus-yellow mobile:text-base 4k:text-2xl">
            <a {...attrs}>
                {children}
            </a>
        </li>
    );
}
