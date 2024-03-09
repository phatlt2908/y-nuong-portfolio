"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./image-box.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ImageBox({ imageId }) {
  const [isFullImage, setIsFullImage] = useState(false);
  const [isFullImageLoaded, setIsFullImageLoaded] = useState(false);

  const onClickImg = () => {
    setIsFullImage(!isFullImage);
  };

  return (
    <div
      className={`${styles.imageBoxContainer} ${isFullImage ? "full" : ""}`}
      onClick={onClickImg}
    >
      <Image
        width={1000}
        height={1000}
        src={"https://drive.google.com/thumbnail?id=" + imageId + "&sz=w600"}
        alt="porforlio thumbnail"
        referrerPolicy="no-referrer"
      />

      {isFullImage && (
        <div className={styles.full}>
          <div className={styles.fullImage}>
            <div className={styles.closeBtn}>
              <FontAwesomeIcon className="fa-lg" icon={faXmark} />
            </div>
            <Image
              onLoad={() => setIsFullImageLoaded(true)}
              width={2000}
              height={2000}
              className={isFullImageLoaded ? "" : "is-hidden"}
              src={
                "https://drive.google.com/thumbnail?id=" + imageId + "&sz=w1200"
              }
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
