"use client";

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";

import MainSideBar from "@/components/main-side-bar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCommentDots,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import logoImg from "@/assets/images/common/y-nuong-logo.png";

function MainNavigation() {
  const pathname = usePathname();
  const [isActiveMobile, setIsActiveMobile] = useState(false);

  useEffect(() => {
    setIsActiveMobile(false);
  }, [pathname]);

  const onBurger = () => {
    setIsActiveMobile(!isActiveMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link className="navbar-item" href="/">
          <Image src={logoImg} width={89} height={55} alt="logo" />
        </Link>
        <div className="navbar-item mx-auto is-hidden-desktop">
          <Link className="navbar-item" href="/">
            <FontAwesomeIcon icon={faHouse} size="xl" />
          </Link>
          <a className="navbar-item" href="#">
            <FontAwesomeIcon icon={faCommentDots} size="xl" />
          </a>
          <a className="navbar-item" href="#">
            <FontAwesomeIcon icon={faUser} size="xl" />
          </a>
        </div>
        <a
          role="button"
          className={"navbar-burger " + (isActiveMobile && "is-active")}
          aria-label="menu"
          aria-expanded="false"
          htmlFor="menu-toggle"
          onClick={onBurger}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu">
        {/* hidden on mobile */}
        <div className="navbar-start"></div>
        <div className="navbar-end">
          <Link className="navbar-item" href="/">
            <FontAwesomeIcon icon={faHouse} size="xl" />
          </Link>
          <a className="navbar-item" href="#">
            <FontAwesomeIcon icon={faCommentDots} size="xl" />
          </a>
          <a className="navbar-item" href="#">
            <FontAwesomeIcon icon={faUser} size="xl" />
          </a>
        </div>
      </div>

      {isActiveMobile && (
        <div className="is-hidden-desktop">
          <MainSideBar />
        </div>
      )}
    </nav>
  );
}

export default MainNavigation;
