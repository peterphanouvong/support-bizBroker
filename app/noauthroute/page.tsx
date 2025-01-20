import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NoAuthRoute() {
  return (
    <div>
      <h1>no auth route</h1>
      <Button asChild>
        <Link href="/dashboard">Dashboard</Link>
      </Button>
    </div>
  );
}
