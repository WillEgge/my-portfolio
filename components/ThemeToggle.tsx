"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <Button onClick={() => setTheme("light")}>🌞</Button>;

  if (resolvedTheme === "dark") {
    return <Button variant="outline" onClick={() => setTheme("light")}>🌞</Button>;
  }

  if (resolvedTheme === "light") {
    return <Button variant="outline" onClick={() => setTheme("dark")}>🌜</Button>;
  }
}
