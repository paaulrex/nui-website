"use client"

import { title } from "@/components/primitives"
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import Image from "next/image";

export default function TodoListPage() {
    const list =[
        {
            title: "Anime",
            href: "todo-list/anime",
            img: "../../components/images/pg.png",
        },
        {
            title: "TV Shows",
            href: "todo-list/tvshows",
        },
        {
            title: "Movies",
            href: "todo-list/movies",
        },
        {
            title: "Video Games",
            href: "todo-list/videogames",
        },
    ]
    return (
        <div className="roboto">
            <div className="jbmono">
                <p className="italic text-sm">Not your average</p>
                <h1 className={title()}>To-do List</h1>
            </div>

            <div className="gap-2 grid grid-cols-12 sm:grid-cols-4 p-5">
                {list.map((item, index) => (
                    <Link href={item.href}>
                        <Card key={index} className="col-span-12 sm:col-span-4 h-[128px] w-[256px]">
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    
                                    alt={item.title}
                                    src="" />
                            </CardBody>
                            <CardFooter className="text-sm justify-center">
                                <p>{item.title}</p>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>

        </div>
    );
}