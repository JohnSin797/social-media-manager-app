import React from "react";
import Link from "next/link";
import { auth } from "@/auth";
import Logout from "./Logout";
import { FaUser } from "react-icons/fa6";
import Image from "next/image";

const Navbar = async () => {
    const session = await auth()
    return (
        <nav className="border-b bg-background w-full flex items-center">
            <div className="flex w-full items-center justify-between my-4">
                <Link href={'/'} className="font-bold">Home</Link>
                
                <div className="flex items-center gap-x-5">
                    <Link href={'/middleware'}>Middleware</Link>
                    <Link href={'/server'}>Server</Link>
                </div>
                <div className="flex items-center gap-x-5">
                    {!session?.user ? 
                        <Link href={'/sign-in'}>
                            <div className="bg-blue-600 text-white text-sm px-4 py-2 rounded-sm">login</div>
                        </Link>
                        :
                        <>
                            <div className="flex gap-x-2 items-center text-sm">
                                <span className="text-white">{session?.user?.name}</span>
                                {session?.user?.image && (
                                    <Image 
                                        className="rounded-full"
                                        width={30}
                                        height={30}
                                        alt="User Avatar"
                                        src={session?.user?.image || ''}
                                    />
                                )}
                            </div>
                            <Logout />
                        </>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;