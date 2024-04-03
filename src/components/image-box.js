"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./image-box.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { getRandomAnimationClass } from "@/constant";

import SpinnerLoading from "./spinner-loading";

function ImageBox({ imageId, onImageLoaded }) {
  const [isFullImage, setIsFullImage] = useState(false);
  const [isLoadingFullImage, setIsLoadingFullImage] = useState(true);

  const onClickImg = () => {
    setIsFullImage(!isFullImage);
    setIsLoadingFullImage(true);
  };

  return (
    <div
      className={`${getRandomAnimationClass()} ${styles.imageBoxContainer} ${
        isFullImage ? "full" : ""
      }`}
      onClick={onClickImg}
    >
      <Image
        className={styles.thumnail}
        width={1000}
        height={1000}
        src={"https://drive.google.com/thumbnail?id=" + imageId + "&sz=w600"}
        alt="porforlio thumbnail"
        referrerPolicy="no-referrer"
        onLoad={() => onImageLoaded()}
        onError={() => onImageLoaded()}
        priority={true}
      />

      {isFullImage && (
        <div className={styles.full}>
          <div className={styles.fullImage}>
            <div className={styles.closeBtn}>
              <FontAwesomeIcon className="fa-lg" icon={faXmark} />
            </div>
            {isLoadingFullImage && <SpinnerLoading />}
            <Image
              width={2000}
              height={2000}
              src={
                "https://drive.google.com/thumbnail?id=" + imageId + "&sz=w2000"
              }
              alt="porforlio full"
              referrerPolicy="no-referrer"
              onLoad={() => setIsLoadingFullImage(false)}
              onError={() => setIsLoadingFullImage(false)}
              priority={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageBox;
