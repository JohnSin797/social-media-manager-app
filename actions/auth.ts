'use server';

import { signIn, signOut } from "@/auth";
// import { signIn } from "next-auth/react"
import { revalidatePath } from "next/cache";

export const login = async (provider: string) => {
    await signIn(provider, { redirectTo: '/' });
    revalidatePath('/');
}

export const logout = async () => {
    await signOut({ redirectTo: '/' });
    revalidatePath('/');
}