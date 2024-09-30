'use client'
import { title } from "@/components/primitives";
import { Divider } from "@nextui-org/divider";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";
import pw from "../../components/images/pg.png"
import { Button } from "@nextui-org/button";

export default function ProjectsPage(){
  return (
    <div>
      <div>
        <h1 className={`${title()} jbmono`}>Projects</h1>
      </div>
      <Divider className="my-5" />
      <div>
        <Button className="h-auto pr-btn" variant="ghost">
          <Link href="projects/password-generator">
            <Card
              isBlurred
              radius="lg"
              className="pr-card"
            >
            <Image
              alt="Password Generator Picture"
              className="object-cover pr-img"
              height={400}
              src={pw}
              width={400}
            />
              <CardBody
                className="justify-center items-center bg-white/80 before:bg-black/10 border-black/20 border-1 overflow-hidden absolute before:rounded-xl rounded-large bottom-1/2 w-3/4 mx-12 z-10 p-auto">
                <p className="text-md font-bold text-black/80 jbmono text-center pr-msg">Password Generator</p>
              </CardBody>
            </Card>
          </Link>
        </Button>
        <Divider className="my-5" />
        <Button className="h-auto pr-btn" variant="ghost">
          <Link href="projects/todo-list">
            <Card
              isBlurred
              radius="lg"
              className="pr-card"
            >
            <Image
              alt="To-do List Pciture"
              className="object-cover pr-img"
              height={400}
              src={pw}
              width={400}
            />
              <CardBody
                className="justify-center items-center bg-white/80 before:bg-black/10 border-black/20 border-1 overflow-hidden absolute before:rounded-xl rounded-large bottom-1/2 w-3/4 mx-12 z-10 p-auto">
                <p className="text-md font-bold text-black/80 jbmono text-center pr-msg">Todo List</p>
              </CardBody>
            </Card>
          </Link>
        </Button>
        <Divider className="my-5"/>
        <p className="italic text-sm">More projects are on the way, requires a little rework.</p>
      </div>
    </div>
    )
}