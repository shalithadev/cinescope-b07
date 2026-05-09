import Image from "next/image";
import { getImageUrl } from "@/lib/utils";

// TypeScript interface for Avatar component props
interface AvatarProps {
  person: { name: string; imageId: string };
  size?: number;
}

// Separate Avatar component
// Exact person data and size are passed as props to this component, making it reusable for different people and sizes.
// This is reusable component
export default function Avatar({ person, size = 100 }: AvatarProps) {
  return (
    <Image
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className="rounded-full"
    />
  );
}
