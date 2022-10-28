"use client"
import Link from 'next/link'
import { useSelectedLayoutSegments } from "next/navigation";

export default function NavLink({ href, children }) {
    let segment = useSelectedLayoutSegments();
    let active = href === `/${segment[0] || ''}`;

    return (
        <Link className={active ? "underline" : ""} href={href}>{children}</Link>
    )
}
