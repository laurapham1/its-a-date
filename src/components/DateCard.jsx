import SaveButton from "./SaveButton";

const DateCard = ({ activity, favourites, setFavourites }) => {
  const isFavourited = favourites.some((fav) => fav.idea === activity.idea);

  const toggleFavourite = () => {
    if (isFavourited) {
      setFavourites((prev) => prev.filter((fav) => fav.idea !== activity.idea));
    } else {
      setFavourites((prev) => [...prev, activity]);
    }
  };

  return (
    <div className="date-card">
      <h2>{activity.idea}</h2>
      <SaveButton
        toggleFavourite={toggleFavourite}
        isFavourited={isFavourited}
      />
    </div>
  );
};

export default DateCard;
