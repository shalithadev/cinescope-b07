// This is react server component by default (RSC),
// This component use JSX syntax to render a div with Tailwind CSS classes applied to it.

import Link from "next/link";

export default function StylingWithTailwindPage() {
  console.log("Sever component is rendering...");

  return (
    <div className="flex flex-col min-h-screen justify-center items-center p-6 gap-6 relative">
      <h1 className="text-sky-500 font-bold text-3xl capitalize">
        This is my first heading as h1
      </h1>

      <h2 className="text-primary font-bold text-lg">
        1. Primary Design Token
      </h2>

      <div className="flex gap-4 text-xs text-center">
        <div className="w-40 h-40 p-4 bg-primary">Background Primary</div>

        <div className="w-40 h-40 p-4 border-primary border">
          Border Primary
        </div>

        <div className="w-40 h-40 p-4 outline-primary outline-4">
          Outline Primary
        </div>

        <div className="relative w-40 h-40 p-4 border-primary border">
          <h2>Positions (Relative/Absolute)</h2>
          <div className="w-20 h-20 bg-purple-500 absolute bottom-2 right-5 z-10"></div>
        </div>

        <div className="w-40 h-40 p-4 bg-amber-400 text-center">
          Named Colors
          <br /> (Amber 400)
        </div>

        <div className="w-20 h-20 bg-orange-500 absolute top-2 right-3 z-10"></div>
      </div>

      <h2 className="text-primary font-bold text-lg">1. Flex vs Grid</h2>
      <ol className="flex flex-col space-y-2 w-1/2">
        <Link href="/styling/grid">
          <li className="w-full bg-accent p-2 text-center font-semibold rounded-lg hover:underline hover:bg-primary/80">
            Example 01: Grid
          </li>
        </Link>
        <Link href="/styling/flexbox">
          <li className="w-full bg-accent p-2 text-center font-semibold rounded-lg hover:underline hover:bg-primary/80">
            Example 02: Flexbox
          </li>
        </Link>
        <Link href="/styling/flex-one">
          <li className="w-full bg-accent p-2 text-center font-semibold rounded-lg hover:underline hover:bg-primary/80">
            Example 03: Flex 1
          </li>
        </Link>
      </ol>
    </div>
  );
}
