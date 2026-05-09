// Example 02 (Flex 1) - app/styling-with-tailwind/flex-one/page.tsx
export default function FlexboxOnePage() {
  return (
    <div className="flex flex-col md:flex-row bg-purple-300 min-h-screen">
      <div className="flex-1 p-6 bg-green-300 text-center">
        Child 01 (Flex 1)
      </div>
      <div className="flex-3 p-6 bg-yellow-300 text-center">
        Child 02 (Flex 3)
      </div>
      <div className="flex-2 p-6 bg-pink-300 text-center">
        Child 03 (Flex 2)
      </div>
      <div className="flex-4 p-6 bg-sky-300 text-center">Child 04 (Flex 4)</div>
      <div className="flex-2 p-6 bg-teal-300 text-center">
        Child 05 (Flex 2)
      </div>
    </div>
  );
}
