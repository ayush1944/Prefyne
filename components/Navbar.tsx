import Link from "next/link";
import { ThemeToggle } from "@/app/theme-toggle";

export function Navbar() {
    return (
        <header className=" flex h-16 items-center lg:mx-12 justify-between px-4 sticky top-0 z-50">
            <Link href="/" className="text-[32px] font-semibold tracking-tight">
                Pre<span className="text-cyan-400">fyne</span>
            </Link>
            <div className="flex items-center justify-center gap-10">
                {/* authentication status and buttons can go here in the future */}
                <div className="md:flex hidden items-center justify-center gap-4">
                    {(true) ? (
                        <Link
                            href="/login"
                            className="px-2 py-1 transition hover:bg-foreground hover:text-background"
                        >
                            Login / SignUp
                        </Link>
                    ) : <Link
                        href="/profile"
                        className="px-2 py-1 transition hover:bg-foreground hover:text-background"
                    >
                        Profile
                    </Link>
                    }
                </div>
                <ThemeToggle />
            </div>
        </header>
    );
}
