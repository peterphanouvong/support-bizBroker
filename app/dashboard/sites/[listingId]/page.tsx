import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  Book,
  FileIcon,
  MoreHorizontal,
  PlusCircle,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// RESTART HERE!
// getData doesn't seem to be returning what i need.
// test to see what gets sent back .

async function getData(userId: string, listingId: string) {
  console.log(userId, listingId, "userId and listingId in getData");

  const data = await prisma.post.findMany({
    where: {
      userId: userId,
      listingId: listingId,
    },
    select: {
      image: true,
      title: true,
      createdAt: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log(data, "data in [listingId] page inside getData");

  return data;
}

export default async function ListingIdRoute(props: {
  params: Promise<{ listingId: string }>;
}) {
  const params = await props.params;
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  const data = await getData(user.id, params.listingId);

  console.log(data);

  return (
    <>
      <div className="flex w-full justify-end gap-x-4">
        <Button asChild variant={"secondary"}>
          <Link href="#">
            <Book className="mr-2 size-4" />
            View Blog
          </Link>
        </Button>
        <Button asChild variant={"secondary"}>
          <Link href={`/dashboard/sites/${params.listingId}/test`}>
            <Settings className="mr-2 size-4" />
            TestRoute
          </Link>
        </Button>
        <Button asChild>
          <Link href={`/dashboard/sites/${params.listingId}/create`}>
            <PlusCircle className="mr-2 size-4" />
            Create Article
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
        <div>
          <Card>
            <CardHeader>
              <CardTitle>{data[0].title}</CardTitle>
              <CardDescription>
                Manage your articles intuitively
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Cover Image</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={64}
                          height={64}
                          className="size-16 rounded-md object-cover"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        {item.title}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="bg-green-500/10 text-green-500"
                        >
                          Published
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {new Intl.DateTimeFormat("en-US", {
                          dateStyle: "medium",
                        }).format(item.createdAt)}
                      </TableCell>
                      <TableCell className="text-end">
                        <Link
                          href={`/dashboard/sites/${params.listingId}/${item.id}`}
                        >
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button size={"icon"} variant={"ghost"}>
                                <MoreHorizontal className="size-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/dashboard/sites/${params.listingId}/${item.id}`}
                                >
                                  Edit
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
