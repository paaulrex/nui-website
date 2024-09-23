import exp from "constants";
import { Pixelify_Sans, Roboto } from "next/font/google";

const pixel_init = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-pixelify",
})

const roboto_init = Roboto ({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700"],
  variable: "--font-roboto"
})

export default function ProjectsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className={`${pixel_init.variable} project-sect ${roboto_init.variable}`}>
          {children}
      </section>
    );
  }
  