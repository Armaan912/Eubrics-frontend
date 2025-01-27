'use client'

import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import "./Register.css";
import { useRouter } from "next/navigation";
import { postregister } from "@/common/auth-client";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const navigate = useNavigate();
    const router = useRouter()

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            postregister({ username, password });
            alert("Registration successful! You can now log in.");
            router.push("/");
        } catch (err) {
            console.error(err.response.data.error);
        }
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleRegister}>
                <h2>Register</h2>
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
                <button className="register-button" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;
