import { categories } from "@/constant";
import styles from "./page.module.scss";

import ImageBox from "@/components/image-box";

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.code,
  }));
}

export default function CategoryDetail({ params }) {
  const categoryCode = params.category;
  const category = categories.find((item) => item.code === categoryCode);

  return (
    <>
      <h1 className="title is-1 has-text-centered">{category.name}</h1>
      <div className={styles.category}>
        <div className={styles.imageList}>
          {category.imgs.map((img, index) => {
            return <ImageBox key={index} imageId={img} />;
            category.imgs;
          })}
        </div>
      </div>
    </>
  );
}
