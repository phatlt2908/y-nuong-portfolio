import styles from "./page.module.scss";
import Image from "next/image";

import aboutImage1 from "@/assets/images/about/about-1.png";
import aboutImage2 from "@/assets/images/about/about-2.png";
import aboutImage3 from "@/assets/images/about/about-3.png";

import { getRandomAnimationClass } from "@/constant";

export default function About() {
  return (
    <div className={styles.about}>
      <div className="card section">
        <div className="columns is-vcentered">
          <div className={`column card-image ${getRandomAnimationClass()}`}>
            <figure className="image is-square">
              <Image src={aboutImage1} width={800} height={800} alt="About" />
            </figure>
          </div>
          <div className={`column ${getRandomAnimationClass()}`}>
            <div className="content">
              <p className="title is-2">Hello, I’m Yin</p>
              <p className="subtitle is-4 color-strength">
                CONCEPT ARTIST & UX-UI GAME
              </p>

              <ul>
                <li>
                  I was born in 1999, currently living and working in Ho Chi
                  Minh City.
                  <br />I love drawing and designing, suitable for creating art
                  products.
                </li>
                <li>
                  Currently, I am a Concept artist & UX/UI game. I love my job
                  and amconstantly developing my skills.
                  <br />
                  #Drawing #Play game #Listening to music #Watching movies
                  #Travel #Play sports
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={`card section mt-6 ${getRandomAnimationClass()}`}>
        <div className="columns">
          <div className="column">
            <div className="card-image">
              <figure className="image">
                <Image src={aboutImage2} width={800} height={800} alt="About" />
              </figure>
            </div>
            <div className="content">
              <p className="title is-4 color-strength mt-4">SKILL</p>
              <ul>
                <li>
                  Team work, presentation of ideas, responsible,good
                  communication
                </li>
                <li>
                  Good level in Photoshop, Digital painting,Illustration,
                  Sketch, Hand-drawing
                </li>
                <li>
                  Knowledge & Understanding art style, humananatomy,
                  perspective, color & lighting
                </li>
                <li>UX/UI GameGame</li>
                <li>Have knowledge on working with Unity</li>
                <li>Proficient in Ps, Ai, Id, Dw, An, Lr,...</li>
                <li>Website building (html,css, wordpress,...)</li>
                <li>Graphic Design, Photography</li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <p className="title is-4 color-strength mt-4">
                EDUCATION & EXPERIENCE
              </p>

              <ul>
                <li>Graduated from Arena Multimedia School</li>
                <li>Team Leader of HUB Design Club - Arena Multimedia</li>
                <li>Art Instructor at My Thuat Bui</li>
                <li>Freelancer & Illustration artist</li>
                <li>Concept artist & UX/UI game at Vgames Studio</li>
                <li>Concept artist & UX/UI game at One Universe</li>
              </ul>
            </div>

            <div className="card-image">
              <figure className="image">
                <Image src={aboutImage3} width={800} height={800} alt="About" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
