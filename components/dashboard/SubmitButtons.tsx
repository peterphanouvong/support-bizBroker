"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface iAppProps {
  text: string;
  className?: string;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
}

export function SubmitButton({ text, className, variant }: iAppProps) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button
          className={cn("w-fit", className)}
          disabled
          variant={variant}
          type="submit"
        >
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
        </Button>
      ) : (
        <Button
          className={cn("w-fit", className)}
          type="submit"
          variant={variant}
        >
          {text}
        </Button>
      )}
    </>
  );
}
