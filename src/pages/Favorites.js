import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

function FavoritesPage() {
  const faveContext = useContext(FavoritesContext);

  let content;

  if (faveContext.totalFavorites === 0) {
    content = <p>You have no favorites. Add some!</p>
  } else {
    content = <MeetupList meetups={faveContext.favorites} />
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
