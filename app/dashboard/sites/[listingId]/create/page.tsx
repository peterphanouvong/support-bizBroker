"use client";

import { UploadDropzone } from "@/app/utils/UploadthingComponents";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/toaster";
import { ArrowLeft, Atom } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import TailwindEditor from "@/components/dashboard/EditorWrapper";
import { JSONContent } from "novel";

export default function ArticleCreationRoute({
  params: initialParams,
}: {
  params: { listingId: string };
}) {
  const [imageUrl, setImageUrl] = useState<undefined | string>(undefined);
  const params = React.use(initialParams);
  const { toast } = useToast();
  const [value, setValue] = useState<JSONContent | undefined>(undefined);

  return (
    <>
      <div className="flex items-center">
        <Button size="icon" variant="outline" className="mr-3" asChild>
          <Link href={`/dashboard/sites/${params.listingId}`}>
            <ArrowLeft className="size-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold">Create Article</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Article Details</CardTitle>
          <CardDescription>
            Create your Article here. Click button below when finished.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label>Article Name</Label>
              <Input placeholder="Article Name" />
            </div>
            <div className="grid gap-2">
              <Label>Slug</Label>
              <Input placeholder="Article Slug" />
              <Button className="w-fit " variant="secondary" type="button">
                <Atom className="mr-2 size-4" />
                Generate Slug
              </Button>
            </div>
            <div className="grid gap-2">
              <Label>Small description</Label>
              <Textarea placeholder="Small description for your article..." />
            </div>

            <div className="grid gap-2">
              <Label>Cover Image</Label>
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt="upload image"
                  className="object-cover w-[200px] h-[200px] rounded-md"
                  width={200}
                  height={200}
                />
              ) : (
                <UploadDropzone
                  onClientUploadComplete={(res) => {
                    setImageUrl(res[0].url);
                    toast({
                      title: "Upload Complete",
                      description: "You should see your picture to the left.",
                    });
                  }}
                  endpoint="imageUploader"
                  onUploadError={() => {
                    toast({
                      title: "Upload Error",
                      description: "It's probably too big.",
                    });
                  }}
                />
              )}
            </div>
            <div className="grid gap-2">
              <Label>Article Content</Label>
              <TailwindEditor onChange={setValue} initialValue={value} />
            </div>
            <Button type="submit" className="w-fit">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
