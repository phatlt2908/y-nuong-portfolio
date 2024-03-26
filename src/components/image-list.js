"use client";

import { useState, useEffect } from "react";
import styles from "./image-list.module.scss";

import ImageBox from "@/components/image-box";
import ImageLoading from "@/components/image-loading";

function ImageList({ imageList }) {
  const [numberOfLoaded, setNumberOfLoaded] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const onImageLoaded = () => {
    setTimeout(() => {
      setNumberOfLoaded((prevNumberOfLoaded) => prevNumberOfLoaded + 1);
    }, 2000);
  };

  useEffect(() => {
    if (numberOfLoaded >= imageList.length) {
      setIsLoading(false);
    }
  }, [numberOfLoaded]);

  return (
    <>
      <div className={`${styles.category} ${isLoading ? styles.hidden : ""}`}>
        <div className={styles.imageList}>
          {imageList.map((img, index) => {
            return (
              <ImageBox
                key={index}
                imageId={img.imageId}
                onImageLoaded={onImageLoaded}
              />
            );
          })}
        </div>
      </div>
      {isLoading && <ImageLoading imageNum={imageList.length} />}
    </>
  );
}

export default ImageList;
