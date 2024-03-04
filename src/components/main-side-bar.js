"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import avatarImg from "@/assets/images/common/y-nuong-avatar.jpeg";
import avatarNameImg from "@/assets/images/common/y-nuong-avatar-name.png";

import styles from "./main-side-bar.module.scss";

function MainSideBar() {
  const pathname = usePathname();

  return (
    <aside className={`${styles.sideBar} section`}>
      <div className={styles.infor}>
        <div className="is-flex py-6">
          <div className="image is-48x48">
            <Image
              className="is-rounded is-align-self-center"
              src={avatarImg}
              width={50}
              height={50}
            />
          </div>
          <div className="image is-align-self-center ml-4">
            <Image src={avatarNameImg} width={100} height={50} />
          </div>
        </div>
      </div>

      <ul className={styles.menu}>
        <li>
          <Link
            href="/"
            className={
              "title is-4 is-uppercase has-text-weight-normal " +
              (!pathname || pathname == "/" ? "is-active" : "")
            }
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            href="/category"
            className={
              "title is-4 is-uppercase has-text-weight-normal " +
              (pathname.startsWith("/category") ? "is-active" : "")
            }
          >
            CATEGORIES
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={
              "title is-4 is-uppercase has-text-weight-normal " +
              (pathname == "/about" ? "is-active" : "")
            }
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={
              "title is-4 is-uppercase has-text-weight-normal " +
              (pathname == "/contact" ? "is-active" : "")
            }
          >
            CONTACT
          </Link>
        </li>
      </ul>

      <div className="side-bar__contact">
        <a
          href="https://www.facebook.com/yinxco"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="icon">
            <FontAwesomeIcon icon={faFacebook} size="xl" />
          </span>
        </a>
        <a
          href="https://www.instagram.com/yinx_co"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="icon ml-2">
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </span>
        </a>
        <a href="mailto:ynuong742@gmail.com">
          <span className="icon ml-2">
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
          </span>
        </a>
      </div>
    </aside>
  );
}

export default MainSideBar;
