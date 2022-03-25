import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";

import styles from "./MainNavigation.module.css";

function MainNavigation() {

  const faveContext = useContext(FavoritesContext);
  
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups App</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
              <span className={styles.badge}>{faveContext.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
