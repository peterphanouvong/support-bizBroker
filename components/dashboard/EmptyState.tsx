import Link from "next/link";
import { Button } from "../ui/button";
import { FileIcon, PlusCircle } from "lucide-react";

interface iAppProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export function EmptyState({
  buttonText,
  description,
  title,
  href,
}: iAppProps) {
  return (
    <div className="flex flex-col p-10 items-center justify-center rounded-md border border-dashed text-center animate-in gap-4 fade-in-50">
      <div className="flex size-20      items-center justify-center rounded-full bg-primary/10">
        <FileIcon className="size-10 text-primary" />
      </div>
      <h2 className="mt-6 text-xl font-semibold text-muted-foreground">
        {title}
      </h2>
      <p className="mt-2 text-sm text-center leading-6 text-muted-foreground max-w-sm mx-auto">
        {description}
      </p>
      <Button asChild>
        <Link href={href}>
          <PlusCircle className="m-2 size-4" /> {buttonText}
        </Link>
      </Button>
    </div>
  );
}
