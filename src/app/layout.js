import "../assets/styles/globals.scss";

import MainNavigation from "@/components/main-navigation";
import MainSideBar from "@/components/main-side-bar";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { just_another_hand, just_another_hand_down_here } from "./fonts";

export const metadata = {
  title: "Y Nương's Portfolio",
  description: "Y Nương's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${just_another_hand.variable} ${just_another_hand_down_here.variable}`}
      >
        <MainNavigation />

        <section className="main-content columns">
          <div className="column">
            <div className="section">{children}</div>
          </div>

          <div
            className="is-hidden-touch column is-narrow"
            style={{ width: "300px" }}
          >
            <MainSideBar />
          </div>
        </section>
      </body>
    </html>
  );
}
