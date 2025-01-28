"use client";
import React, { useState } from "react";
import Link from "next/link";
import { postlogin } from "@/common/auth-client";
import { setCookie } from "cookies-next/client";
import { useRouter } from "next/navigation";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const res = await postlogin({ username, password });
			setCookie("access_token", res.accessToken);
			router.push("/");
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
