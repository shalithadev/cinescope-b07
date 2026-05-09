"use client";

import { useState } from "react";
import Avatar from "./avatar";

// Card is a wrapper component that accepts children as props and renders them inside a styled div. This allows us to reuse the Card component for different content while maintaining a consistent style.
function Card({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <button
      className="relative flex flex-col justify-center items-center border border-gray-400 rounded-xl p-6 size-44"
      onClick={() => setCount(count + 1)}
    >
      {children}
      <div className="absolute right-2 top-2 bg-green-500 rounded-full size-6 text-white">
        {count}
      </div>
    </button>
  );
}

// Profile component: This is a React function component
export default function Profile() {
  // Pure <img> tags cannot be used by Next.js for image optimization. We need to use the Next/Image component instead.
  //   return (
  //     <img
  //       src="https://react.dev/images/docs/scientists/MK3eW3Am.jpg"
  //       alt="Katherine Johnson"
  //     />
  //   );

  return (
    <div className="flex gap-4 w-full items-end">
      {/* Passing person data and size to Avatar component as props */}
      <Card>
        <Avatar
          // size={100}
          person={{
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2",
          }}
        />
      </Card>
      {/* <Avatar
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
      <Avatar
        size={50}
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
      /> */}
    </div>
  );
}
