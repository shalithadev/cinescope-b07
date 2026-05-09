import Profile from "./profile";

// Gallery component: This is a React function component
// This is a parent component that uses the Profile component as a child component
export default function Gallery() {
  return (
    <section className="p-6">
      <h1 className="font-extrabold text-2xl mb-4">Amazing scientists</h1>
      <div>
        <Profile />
        {/* <Profile />
        <Profile /> */}
      </div>
    </section>
  );
}
