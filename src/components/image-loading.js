"use client";

import styles from "./image-loading.module.scss";

function ImageLoading({ imageNum, itemClass }) {

  return (
    <div className={styles.category}>
      <div className={`${styles.imageList}`}>
        {new Array(imageNum).fill(0).map((_, index) => (
          <div
            key={index}
            className={`${itemClass ? "image is-5by3" : ""} ${styles.linearBackground} mb-4`}
            style={{ height: itemClass ? "auto" : "300px" }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageLoading;
