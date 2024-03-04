import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.scss";

import { categories } from "@/constant";

export default function Category() {
  return (
    <div id="category-list" className="columns is-multiline">
      {categories.map((category, index) => (
        <div
          key={index}
          className="column is-one-third-widescreen is-half-desktop is-half-tablet is-full-mobile"
        >
          <Link href={`/category/${category.code}`} className="card">
            <div className="card-image">
              <figure className="image is-5by3">
                <Image
                  className={styles.bannerImage}
                  width={1000}
                  height={500}
                  src={"https://drive.google.com/thumbnail?id=" + category.bannerImg + "&sz=w600"}
                  alt={category.name}
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="title is-3">{category.name}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
