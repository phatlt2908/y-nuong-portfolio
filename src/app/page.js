import Image from "next/image";
import styles from "./page.module.scss"

export default function Home() {
  return (
    <>
      <Image
        className={styles.image}
        src="https://drive.google.com/thumbnail?id=13G6PhsF1RgO0tiJbxEmRLHntQq7RrpsQ&sz=w1500"
        width={1500}
        height={700}
        alt="porforlio thumbnail"
      />
    </>
  );
}
