// Footer Component

import Link from "next/link";
import { Logo } from "@/components/shared/logo";

// <footer> semantics are used to define the footer section of a webpage, which typically contains information about the site, such as copyright, contact details, or links to important pages. In this example, we are using Tailwind CSS classes to style the footer with a sky blue background and black text.
export default function Footer() {
  return (
    <footer className="border-primary/20 bg-primary/5 border-t py-6 md:py-0">
      <div className="container mx-auto max-w-350 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <Logo className="size-6" />
          <p className="capitalize text-muted-foreground text-center text-sm leading-loose md:text-left">
            © {new Date().getFullYear()} CineScope LLC. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/terms"
            className="text-muted-foreground hover:text-primary text-sm underline-offset-4 transition-colors hover:underline"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-muted-foreground hover:text-primary text-sm underline-offset-4 transition-colors hover:underline"
          >
            Privacy
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground hover:text-primary text-sm underline-offset-4 transition-colors hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
