'use client';

import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import AgentPulse from "./AgentPulse";



export default function Header() {
    return <header className="sticky top-0 z-50 left-0 right-0 md:px-0 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
            {/* left */}
            <div className="flex items-center justify-between h-16">
                <Link href="/" className="flex items-center gap-4">
                    <AgentPulse size="small" color="blue" />
                    <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">AgentTube</h1>
                 </Link>
            </div>
            {/* right */}
            <div>
                <SignedIn>
                    <Link href="/manage-plan">Manage Plan</Link>
                </SignedIn>
            </div>
        </div>
    </header>;
}

