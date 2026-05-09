// Example 01 (Grid) - app/styling-with-tailwind/grid/page.tsx
export default function GridPage() {
  return (
    <div className="flex min-h-screen justify-center items-center p-6 bg-amber-200">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="h-40 w-full p-6 bg-green-300 text-center">Child 01</div>
        <div className="h-40 w-full p-6 bg-yellow-300 text-center">
          Child 02
        </div>
        <div className="h-40 w-full p-6 bg-pink-300 text-center">Child 03</div>
        <div className="h-40 w-full p-6 bg-teal-300 text-center">Child 04</div>
        <div className="h-40 w-full p-6 bg-neutral-300 text-center">
          Child 05
        </div>
        <div className="h-40 w-full p-6 bg-violet-300 text-center">
          Child 06
        </div>
        <div className="h-40 w-full p-6 bg-sky-300 text-center">Child 07</div>
        <div className="h-40 w-full p-6 bg-orange-300 text-center">
          Child 08
        </div>
      </div>
    </div>
  );
}
