import styles from "./page.module.scss";
import Image from "next/image";

import contactGif from "@/assets/images/contact/contact.gif";

export default function About() {
  return (
    <div className={styles.contact}>
      <div className="card section">
        <div className="columns is-vcentered">
          <div className="column card-image">
            <figure className="image is-square">
              <Image
                className={styles.contactImage}
                src={contactGif}
                width={1000}
                height={1000}
                alt="Contact"
              />
            </figure>
          </div>
          <div className="column">
            <div className="content section">
              <p className="title is-2 color-strength">CONTACT ME:</p>
              <p>
                <a href="mailto:ynuong742@gmail.com">
                  Email: ynuong742@gmail.com
                </a>
              </p>
              <p>Website: Yinxcoart.com</p>
              <p>
                <a
                  href="https://www.instagram.com/yinx_co"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Instagram: @Yinxco
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
