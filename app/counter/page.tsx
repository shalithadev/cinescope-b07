"use client";

import CounterClass from "./counter-class";
import CounterFunction from "./counter-function";

export default function CounterPage() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center min-h-screen gap-4">
      <CounterClass />
      <CounterFunction />
    </div>
  );
}
