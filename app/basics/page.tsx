import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

export default function BasicsPage() {
  return (
    <main className="flex flex-col gap-12 items-center justify-center bg-white p-8 min-h-screen">
      <h1 className="text-4xl font-bold">shadcn/ui Buttons</h1>

      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex gap-1">
          <Button>Default</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <HomeIcon />
          </Button>
        </div>

        <div className="flex gap-1">
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="secondary">Secondary</Button>
          <Button
            className="bg-purple-700 cursor-pointer h-14 px-6 py-4 rounded-full text-white hover:bg-purple-800"
            asChild
          >
            <Link href="/styling">Custom</Link>
          </Button>
        </div>
      </div>

      <h2 className="text-2xl font-bold">Next/Image</h2>

      <Image
        src="/lifting-state-up.png"
        alt="Placeholder"
        width={400}
        height={300}
        className="border rounded-4xl object-cover w-full h-full max-w-md"
      />
    </main>
  );
}
