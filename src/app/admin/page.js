import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./page.module.scss";

export default function Admin() {
  return (
    <div className={styles.admin}>
      <h1 className="title is-1">Admin</h1>
      <div className="columns">
        <div className="column is-one-quarter">
          <h2 className="title is-2">Category</h2>
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">Card header</p>
              <button className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <FontAwesomeIcon icon={faAngleDown} />
                </span>
              </button>
            </header>
          </div>
        </div>
        <div className="column">
          <h2 className="title is-2">Image list</h2>
        </div>
      </div>
    </div>
  );
}
