import { Button } from "@/components/ui/button";
import { FileIcon, PlusCircle } from "lucide-react";
import Link from "next/link";

export default function SitesRoute() {
    return (
        <>
            <div className="flex w-full justify-end ">
                <Button asChild>
                    <Link href="/dashboard/sites/new"><PlusCircle className="m-2 size-4"/> Create Site</Link>
                </Button>
            </div>
            <div className="flex flex-col p-10 items-center justify-center rounded-md border border-dashed text-center animate-in gap-4 fade-in-50">
                <div className="flex size-20      items-center justify-center rounded-full bg-primary/10">
                <FileIcon className="size-10 text-primary" />
                </div>
                <h2 className="mt-6 text-xl font-semibold text-muted-foreground">No sites created</h2>
                <p className="mt-2 text-sm text-center leading-6 text-muted-foreground max-w-sm mx-auto">You currently dont have any sites. Please create one when you are ready.</p>
                <Button asChild>
                    <Link href="/dashboard/sites/new"><PlusCircle className="m-2 size-4"/> Create Site</Link>
                </Button>
            </div>
        </>
    )
