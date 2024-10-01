import * as React from "react";

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";
import BlurredFooterCard from "@/components/nextui/blurred-footer";


export default function Home() {

  const allToys = [
    {
      imageSrc: "https://img.996.ninja/ninjutsu/e90bdc8de507f79595bfd2e02f1db056.jpg",
      title: ".net所有域名",
      link: "app/page.tsx",
    },

  ];
  return (
    <div className="gap-3 grid sm:grid-cols-4">
      {allToys.map((item, index) => (
        // eslint-disable-next-line react/jsx-key
        <BlurredFooterCard
          imageSrc={item.imageSrc}
          link={item.link}
          title={item.title}
        />
      ))}
    </div>
  );
}
