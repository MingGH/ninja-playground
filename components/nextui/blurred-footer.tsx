"use client";

import { Card, CardFooter, Image, Button, Tab } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Link } from "@nextui-org/link";
import {NextUIProvider} from "@nextui-org/react";


interface ImageProps {
  imageSrc: string,
  title: string,
  link: string
}

export default function BlurredFooterCard(attr: ImageProps) {
  return (
    <Card
      isFooterBlurred
      className="border-none"
      radius="lg"
    >
      <Image
        alt=""
        className="object-cover"
        src={attr.imageSrc}
        width={`100%`}
      />
      <CardFooter
        className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{attr.title}</p>

          <Link href="/toys/allNetDomain">
            <Button className="text-tiny text-white bg-black/20"
                    variant="flat" color="default" radius="lg" size="sm"
            >
              Click
            </Button>
          </Link>

      </CardFooter>
    </Card>
  );
}
