'use client'
import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
import "./Login.css"; // Importing the CSS file
import Link from "next/link";
import { postlogin } from "@/common/auth-client";
// import { useRouter } from "next/navigation";


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await postlogin(
                { username, password },
                
            );
            console.log(res)
            // setUser(res.data.user);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                <input
                    type="text"
                    className="input-field"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="input-field"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="login-button" type="submit">
                    Login
                </button>
                <Link href="/register" className="register-link">
                    Don't have an account? Register
                </Link>
            </form>
        </div>
    );
}

export default Login;
