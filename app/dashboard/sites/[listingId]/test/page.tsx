"use client";

import { UploadDropzone } from "@/app/utils/UploadthingComponents";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Atom } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function TestRoute({
  params: initialParams,
}: {
  params: { listingId: string };
}) {
  const params = React.use(initialParams);

  return (
    <>
      <h1>Test client Route</h1>
      <Button size="icon" variant="outline" className="mr-3" asChild>
        <Link href={`/dashboard/sites/${params.listingId}`}>
          <ArrowLeft className="size-4" />
        </Link>
      </Button>
      <div className="grid gap-2">
        <Label>Cover Image</Label>
        <UploadDropzone endpoint="imageUploader" />
      </div>
    </>
  );
}
