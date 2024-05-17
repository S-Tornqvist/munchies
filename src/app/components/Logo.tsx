import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      priority
      src={"/munchies.svg"}
      alt="Munchies logo"
      className={`logo ${className}`}
      width={273.42}
      height={40}
    />
  );
}
