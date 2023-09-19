"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {axios} from "axios";


export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

    const onLogin = async () => {
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 >Login</h1>
            <hr />
            <label htmlFor="email">email</label>
            <input 
            className="p-2 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
            <label htmlFor="password">password</label>
            <input 
            className="p-2 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button onClick={onLogin}>Login</button>
            <Link href="/signup">Visit Signup page</Link>
        </div>
    )
}