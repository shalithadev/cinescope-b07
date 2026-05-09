import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Person {
  name: string;
  imageId: string;
}

// TypeScript Converted Example
export function getImageUrl(person: Person, size = "s") {
  return (
    "https://react.dev/images/docs/scientists/" + person.imageId + size + ".jpg"
  );
}
