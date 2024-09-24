import { title } from "@/components/primitives";
import { Divider } from "@nextui-org/divider";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import Link from "next/link";

export default function ProjectsPage(){
    return (
        <div>
            <div>
                <h1 className={`${title()} jbmono`}>Projects</h1>
            </div>
            
            <Divider className="my-5" />
            <div>
                <Link href="/projects/password-generator">
                <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none"
                >
                    <Image
                        alt="Password Generator"
                        className="object-cover"
                        height={400}
                        src="etc"
                        width={400}
                    />
                    <CardFooter
                        className="justify-center absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] mx-1 z-10">
                                <p className="text-tiny text-white/80 jbmono">Password Generator</p>
                    </CardFooter>
                </Card>
                </Link>
            </div>
        </div>
    )
}