import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function ProfileImage({ url, alt }) {
  return url ? (
    <Image
      src={url}
      alt={alt}
      className="w-10 h-10 rounded-full"
      width={40}
      height={40}
    />
  ) : (
    <Avatar>
      <AvatarFallback>{alt.slice(0, 1)}</AvatarFallback>
    </Avatar>
  );
}
