import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { FileIcon, PlusCircle } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";
import DefaultImage from "@/public/default.png";

async function getData(userId: string) {
  const data = await prisma.listing.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function SitesRoute() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  const data = await getData(user.id);

  return (
    <>
      <div className="flex w-full justify-end ">
        <Button asChild>
          <Link href="/dashboard/sites/new">
            <PlusCircle className="m-2 size-4" /> Create Listing
          </Link>
        </Button>
      </div>
      {data === undefined || data.length === 0 ? (
        <div className="flex flex-col p-10 items-center justify-center rounded-md border border-dashed text-center animate-in gap-4 fade-in-50">
          <div className="flex size-20      items-center justify-center rounded-full bg-primary/10">
            <FileIcon className="size-10 text-primary" />
          </div>
          <h2 className="mt-6 text-xl font-semibold text-muted-foreground">
            No listing created
          </h2>
          <p className="mt-2 text-sm text-center leading-6 text-muted-foreground max-w-sm mx-auto">
            You currently dont have any listings. Please create one when you are
            ready.
          </p>
          <Button asChild>
            <Link href="/dashboard/sites/new">
              <PlusCircle className="m-2 size-4" /> Create Listing
            </Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {data.map((listing) => (
            <Card key={listing.id}>
              <Image
                src={listing.imageUrl ?? DefaultImage}
                alt={listing.name}
                className="rounded-t-lg object-cover w-full h-[200px]"
                width={400}
                height={200}
              />
              <CardHeader>
                <CardTitle>{listing.name}</CardTitle>
                <CardDescription>{listing.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/dashboard/sites/${listing.id}`}>
                    View Articles
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
