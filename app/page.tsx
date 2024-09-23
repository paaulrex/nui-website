import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { AboutMeIcon, GithubIcon, LinkedInIcon } from "@/components/icons";
import { Divider } from "@nextui-org/divider";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Hi I'm&nbsp;</span>
        <span className={title({ color: "cyan" })}>Paul&nbsp;</span>
        <br />
        <Divider className="mb-4 mt-8" />
        <div className={subtitle({ class: "mt-4" })}>
          Software Engineer | Front-End Dev | Air Force Veteran
        </div>
        <Divider className="my-4" />
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href="/about/">
            <AboutMeIcon size={20} />
            About Me
          </Link>

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
