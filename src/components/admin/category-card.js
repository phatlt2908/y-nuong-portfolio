"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import swal from "sweetalert2";

import adminApi from "@/service/adminApi";
import styles from "./category-card.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

// import SpinnerLoading from "./spinner-loading";

function CategoryCard({ category: categoryProps, onLoaded, onSaved }) {
  const [isShowContent, setIsShowContent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState();
  const [imageListString, setImageListString] = useState();

  const onClickHeader = () => {
    setIsShowContent(!isShowContent);
    if (!isShowContent) {
      if (categoryProps.code) {
        setIsLoading(true);
        adminApi
          .getCategoryInfo(categoryProps.code)
          .then((res) => {
            setCategory(res.data);
            setImageListString(
              res.data.images.map((image) => image.imageId).join("\n")
            );
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        setCategory(categoryProps);
      }
    }
  };

  useEffect(() => {
    if (imageListString) {
      const imageList = imageListString.split("\n").map((imageId) => {
        return {
          imageId: imageId,
          description: null,
        };
      });
      setCategory((prev) => ({ ...prev, images: imageList }));
      onLoaded(imageList);
    }
  }, [imageListString]);

  const handleCategoryName = (e) => {
    setCategory((prev) => ({ ...prev, name: e.target.value }));
  };
  const handleCategoryBanner = (e) => {
    setCategory((prev) => ({ ...prev, bannerImage: e.target.value }));
  };
  const handleImageList = (e) => {
    setImageListString(e.target.value);
  };

  const saveCategory = () => {
    adminApi
      .saveCategoryInfo(category)
      .then((res) => {
        swal.fire({
          title: "Saved! 😊",
          text: "Category information has been saved successfully!",
          icon: "success",
        });
        onSaved();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="card mb-4">
      <header className="card-header cursor-pointer" onClick={onClickHeader}>
        <p className="card-header-title">{categoryProps.name}</p>
        <button className="card-header-icon" aria-label="more options">
          <span className="icon">
            {isShowContent ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </span>
        </button>
      </header>
      {isShowContent && category && (
        <>
          {category.bannerImage && (
            <div className="card-image">
              <figure className="image is-4by3">
                <Image
                  className={styles.bannerImage}
                  src={
                    "https://drive.google.com/thumbnail?id=" +
                    category.bannerImage +
                    "&sz=w600"
                  }
                  width={1000}
                  height={1000}
                  alt="Category thumnail"
                  referrerPolicy="no-referrer"
                />
              </figure>
            </div>
          )}
          <div className="card-content">
            <div className="content">
              <div className="field">
                <label className="label">Category name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Category name"
                    value={category.name}
                    onChange={handleCategoryName}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Banner Google image id</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="12A2Szbtovgxxqxddia..."
                    value={category.bannerImage}
                    onChange={handleCategoryBanner}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Image list (google image id)</label>
                <div className="control">
                  <textarea
                    className="textarea white-space-nowrap"
                    placeholder="12A2Szbtovgxxqxddia..."
                    value={imageListString}
                    onChange={handleImageList}
                  />
                </div>
              </div>
            </div>
          </div>
          <footer className="card-footer">
            <div
              className="card-footer-item cursor-pointer has-text-link"
              onClick={saveCategory}
            >
              Save
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default CategoryCard;
