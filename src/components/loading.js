"use client";

import styles from "./loading.module.scss";

const randomHeight = () => {
  return Math.floor(Math.random() * 200 + 100) + "px";
};

function Loading({ imageNum }) {

  return (
    <div className={styles.category}>
      <div className={`${styles.imageList}`}>
        {new Array(imageNum).fill(0).map((_, index) => (
          <div
            key={index}
            className={`${styles.linearBackground} mb-4`}
            style={{ height: randomHeight() }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Loading;
