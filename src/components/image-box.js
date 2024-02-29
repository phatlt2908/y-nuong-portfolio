"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./image-box.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

function ImageBox({ image }) {
  const [isFullImage, setBoxClass] = useState(false);

  const onClickImg = () => {
    setBoxClass(!isFullImage);
  };

  return (
    <div
      className={`${styles.imageBoxContainer} ${isFullImage ? "full" : ""}`}
      onClick={onClickImg}
    >
      <div className={styles.content}>
        <Image
          width={300}
          height={300}
          src={image}
          alt="porforlio thumbnail"
          referrerPolicy="no-referrer"
        />
      </div>

      {isFullImage && (
        <div className={styles.full}>
          <div className={styles.fullImage}>
            <div className={styles.closeBtn}>
              <FontAwesomeIcon className="fa-lg" icon={faHouse} />
            </div>
            <Image
              width={1000}
              height={1000}
              className="grid-item"
              src={image}
              alt="porforlio full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageBox;
