import Image from "next/image";

import bannerImg from "@/assets/images/doodle/doodle-1.png";

export default function Home() {
  return (
    <>
      <Image src={bannerImg} width={1500} height={700} />
    </>
  );
}
