"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      router.push("/dashboard");
    }
  }, [router]);

  if (redirecting) {
    return null; // Render nothing while redirecting
  }

  return (
    <div>
      <Button>Hello Press this</Button>
    </div>
  );
}