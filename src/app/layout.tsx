"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { getCookie } from "cookies-next/client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookie = getCookie("access_token");

	const path = usePathname();
	const router = useRouter();

	useEffect(() => {
		const openRoutes = ["/login", "/register"];
		const isAuth = cookie ? true : false;
		const defaultRoute = isAuth ? "/customer" : "/login";

		if (!isAuth && !openRoutes.includes(path)) {
			router.push(defaultRoute);
		}

		if (isAuth && (openRoutes.includes(path) || path === "/")) {
			router.push("/customer");
		}
	}, [path, cookie]);

	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
