import { useState, useEffect } from "react";
import dateIdeas from "./dateIdeas.json";
import { Button, Select, Spin, Drawer } from "antd";
import "./App.css";
import DateCard from "./components/DateCard";
import { dateCategories } from "./utils/dateCategories";

const FAVOURITES_KEY = "favouriteIdeas";

// Save to localStorage
const saveFavourites = (favourites) => {
  localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
};

// Load from localStorage
const loadFavourites = () => {
  const saved = localStorage.getItem(FAVOURITES_KEY);
  return saved ? JSON.parse(saved) : [];
};

function App() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [openFavourites, setOpenFavourites] = useState(false);

  useEffect(() => {
    const storedFavourites = loadFavourites();
    setFavourites(storedFavourites);
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setActivity(getRandomIdea());
      setLoading(false);
    }, 500);
  };

  const getRandomIdea = () => {
    const filteredIdeas = dateIdeas.filter((idea) => !category ? true : dateCategories[idea.category] === category);
    const randomIndex = Math.floor(Math.random() * filteredIdeas.length);
    return filteredIdeas[randomIndex];
  };

  const content = () => {
    if (loading) return <Spin />;
    if (!activity) return;

    return (
      <DateCard
        activity={activity}
        favourites={favourites}
        setFavourites={setFavourites}
      />
    );
  };

  return (
    <div className="App">
      <h1>It's a date! 🌹</h1>
      <div className="category-section">
        <h3>Choose a category:</h3>
        <Select
          className="select"
          onChange={(value) => setCategory(value)}
          value={category}
          defaultValue=""
          style={{ width: 150 }}
        >
          <option value="">Any</option>
          {Object.values(dateCategories).map((category) => (
            <Select.Option value={category}>{category}</Select.Option>
          ))}
        </Select>
      </div>
      <Button color="danger" variant="solid" onClick={handleClick}>
        Surprise Me
      </Button>
      <div className="content-section">{content()}</div>
      <Button type="text" onClick={() => setOpenFavourites(!openFavourites)}>
        <h3>My Favourites ❤️</h3>
      </Button>

      <Drawer
        title="My Favourites ❤️"
        placement={"bottom"}
        onClose={() => setOpenFavourites(false)}
        open={openFavourites}
      >
        <div className="favourites-section">
          <div className="date-cards">
            {favourites.length > 0 ? (
              favourites.map((fav) => (
                <DateCard
                  activity={fav}
                  favourites={favourites}
                  setFavourites={setFavourites}
                />
              ))
            ) : (
              <p>No favourites yet!</p>
            )}
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default App;
