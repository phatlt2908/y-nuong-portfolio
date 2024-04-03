"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import styles from "./page.module.scss";
import adminApi from "@/service/adminApi";
import CategoryCard from "@/components/admin/category-card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Admin() {
  const [categoryList, setCategoryList] = useState([]);
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    loadCategoryList();
  }, []);

  const loadCategoryList = () => {
    adminApi.getCategoryList().then((res) => {
      setCategoryList(res.data);
    });
  }

  const updateImageList = (imageList) => {
    setImageList(imageList);
  };

  const addNewCategory = () => {
    const newCategory = {
      code: null,
      name: "New Category",
      bannerImage: "",
      images: [],
    };
    setCategoryList((oldArray) => [...oldArray, newCategory]);
  };

  return (
    <div className={styles.admin}>
      <h1 className="title is-1">Admin</h1>
      <hr />
      <div className="columns">
        <div className="column is-one-quarter">
          <h2 className="title is-2">Category</h2>
          {categoryList.map((category, index) => (
            <CategoryCard
              category={category}
              key={index}
              onLoaded={updateImageList}
              onSaved={loadCategoryList}
            />
          ))}
          <div className="card cursor-pointer" onClick={addNewCategory}>
            <header className="card-header">
              <p className="card-header-title">
                <span>Add new</span>
              </p>
              <button className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              </button>
            </header>
          </div>
        </div>
        <div className="column">
          <h2 className="title is-2">Image list example display</h2>
          <div className={styles.imageList}>
            {imageList.map((img, index) => {
              return (
                <Image
                  width={1000}
                  height={1000}
                  src={
                    "https://drive.google.com/thumbnail?id=" +
                    img.imageId +
                    "&sz=w600"
                  }
                  alt="porforlio thumbnail"
                  referrerPolicy="no-referrer"
                  priority={true}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
