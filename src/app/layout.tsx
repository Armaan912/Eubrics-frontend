"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { getCookie } from "cookies-next/client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const [loading, setLoading] = useState(false);
  const cookie = getCookie("access_token");
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    const openRoutes = ["/login", "/register"];
    const isAuth = !!cookie;
    const defaultRoute = isAuth ? "/customer" : "/login";

    setLoading(true); // Show loader before redirect

    if (!isAuth && !openRoutes.includes(path)) {
      router.push(defaultRoute);
    }

    if (isAuth && (openRoutes.includes(path) || path === "/")) {
      router.push("/customer");
    }

    setTimeout(() => setLoading(false), 1000); // Simulate delay
  }, [path, cookie]);

  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
      </body>
    </html>
  );
}
