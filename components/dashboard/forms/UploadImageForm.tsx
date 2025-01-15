"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { UploadDropzone } from "@/app/utils/UploadthingComponents";
import Image from "next/image";
import { useState } from "react";
import { SubmitButton } from "../SubmitButtons";
import { useToast } from "@/hooks/use-toast";

export function UploadImageForm() {
  const [imageUrl, setImageUrl] = useState<undefined | string>(undefined);
  const { toast } = useToast();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Image</CardTitle>
        <CardDescription>This is your site image.</CardDescription>
      </CardHeader>
      <CardContent>
        {imageUrl ? (
          <Image
            src={imageUrl}
            width={200}
            height={200}
            className="object-cover w-[200px] h-[200px] rounded-lg"
            alt="Uploaded Image"
          />
        ) : (
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setImageUrl(res[0].url);
              toast({
                title: "Image uploaded",
                description: "Your image has been uploaded",
              });
            }}
            onUploadError={() => {
              toast({
                title: "Error uploading image",
                description: "Please try again later",
                variant: "destructive",
              });
            }}
          />
        )}
      </CardContent>
      <CardFooter>
        <SubmitButton variant="secondary" text="Change Image" />
      </CardFooter>
    </Card>
  );
}
