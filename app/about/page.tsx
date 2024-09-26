import { title, subtitle } from "@/components/primitives";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { AboutMeIcon, GithubIcon, LinkedInIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 roboto">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={`${title()} jbmono`}>Hi, I&apos;m&nbsp;</span>
        <span className={`${title({ color: "cyan" })} jbmono`}>Paul!&nbsp;</span>
        <br />
        <Divider className="mb-4 mt-8" />
        <div className={"text-medium text-justify"}>
          Hello! My name is Paul De Silos and I have been programming HTML since 2007,
          during MySpace days and then towards Tumblr era. Since then, I have stopped using
          my web design/development skills because of military service. It was not until 2023
          where I jumped back to rekindle my passion for web design/development. I have learned
          a lot since then about HTML:5, CSS and other CSS libraries, and JavaScript.
          <Tooltip 
            showArrow 
            content="If you don&apos;t see those in my GitHub, it&apos;s most likely a secret project..."
            placement="bottom"
            color="primary"
            offset={-20}>
            <p className="py-4">I am currently working on projects using C++, C#, Python, & Java. I am also working on
            projects using frameworks such as NextUI, and React.</p>
          </Tooltip>
          If you would like to see more of my programming, please visit my links below!
        </div>
        <Divider className="my-4" />
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>

        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.linkedin}>
            <LinkedInIcon size={20} />
            LinkedIn
          </Link>
      </div>

    </section>
  );
}
