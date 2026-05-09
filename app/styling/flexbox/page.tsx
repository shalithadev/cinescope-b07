// Example 01 (Flexbox) - app/styling-with-tailwind/flexbox/page.tsx
export default function FlexboxPage() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-purple-300 min-h-screen p-6 gap-6">
      <div className="h-30 w-50 p-6 bg-green-300 rounded-lg text-center">
        Child 01
      </div>
      <div className="h-30 w-50 p-6 bg-yellow-300 rounded-lg text-center">
        Child 02
      </div>
      <div className="h-30 w-50 p-6 bg-pink-300 rounded-lg text-center">
        Child 03
      </div>
      <div className="h-30 w-50 p-6 bg-red-300 rounded-lg text-center">
        Child 04
      </div>
    </div>
  );
}
