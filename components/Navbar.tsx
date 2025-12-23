'use client'
import Link from "next/link";
import { ThemeToggle } from "@/app/theme-toggle";
import { useSession, signOut } from "next-auth/react";

export function Navbar() {

    const { data: session } = useSession();
    const isLoggedIn = !!session;

    return (
        <header className=" flex h-16 items-center lg:px-16 justify-between px-4 sticky top-0 z-50 backdrop-blur-3xl trasi ">
            <Link href="/" className="text-[32px] font-semibold tracking-tight">
                Pre<span className="text-cyan-400">fyne</span>
            </Link>
            <div className="flex items-center justify-center gap-10">
                <div className="md:flex hidden items-center justify-center gap-4">
                    {(!isLoggedIn) ? (
                        <Link
                            href="/login"
                            className="px-2 py-1 transition hover:bg-foreground hover:text-background"
                        >
                            Login / SignUp
                        </Link>
                    ) : (
                        <div className="
                            flex items-center justify-center gap-4
                        ">
                            <Link
                                href="/profile"
                                className="px-2 py-1 transition hover:bg-foreground hover:text-background"
                            >
                                Profile
                            </Link>
                            <button
                                onClick={() => signOut()}
                                className="px-2 py-1 cursor-pointer transition hover:bg-foreground hover:text-background"
                            >
                                Sign Out
                            </button>
                        </div>

                    )
                    }
                </div>
                <ThemeToggle />
            </div>
        </header>
    );
}
