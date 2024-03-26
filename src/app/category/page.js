"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.scss";

import { getRandomAnimationClass } from "@/constant";

import portfolioApi from "@/service/portfolioApi";

import ImageLoading from "@/components/image-loading";

export default function Category() {
  const [categoryList, setCategoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCategoryList();
  }, []);

  const loadCategoryList = () => {
    setIsLoading(true);
    portfolioApi
      .getCategoryList()
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div id="category-list" className="columns is-multiline">
        {categoryList.map((category, index) => (
          <div
            key={index}
            className={`column is-one-third-widescreen is-half-desktop is-half-tablet is-full-mobile ${getRandomAnimationClass()}`}
          >
            <Link href={`/category/${category.code}`} className="card">
              <div className="card-image">
                <figure className="image is-5by3">
                  <Image
                    className={styles.bannerImage}
                    width={1000}
                    height={500}
                    src={
                      "https://drive.google.com/thumbnail?id=" +
                      category.bannerImage +
                      "&sz=w600"
                    }
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
      {isLoading && <ImageLoading imageNum={6} itemClass={"image is-5by3"} />}
    </>
  );
}
