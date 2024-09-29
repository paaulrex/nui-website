"use client"

import { title } from "@/components/primitives"
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import animePic from "@/components/images/list-anime.png"
import tvPic from "@/components/images/list-tv.png"
import moviePic from "@/components/images/list-movies.png"
import vGamesPics from "@/components/images/list-vg.png"

export default function TodoListPage() {
  const list =[
    {
        title: "Anime",
        href: "todo-list/anime",
        img: animePic,
    },
    {
        title: "TV Shows",
        href: "todo-list/tvshows",
        img: tvPic
    },
    {
        title: "Movies",
        href: "todo-list/movies",
        img: moviePic,
    },
    {
        title: "Video Games",
        href: "todo-list/videogames",
        img: vGamesPics,
    },
  ]
  return (
  <div className="roboto  ">
    <div className="jbmono">
      <p className="italic text-sm">Not your average</p>
      <h1 className={title()}>To-do List</h1>
    </div>

    <div className="gap-5 grid grid-cols-2 sm:grid-cols-2 p-5">
      {list.map((item, index) => (
      <Link href={item.href}>
        <Card key={index}>
          <CardBody className="overflow-visible">
            <Image
              width={100}
              height={100}
              alt={item.title}
              className="w-full rounded-full"
              src={item.img}
              />
          </CardBody>
          <CardFooter className="text-small justify-center">
            <p className="text-default-500">{item.title}</p>
          </CardFooter>
        </Card>
      </Link>
      ))}
    </div>
  </div>
  );
}