import { useState } from "react";
import dateIdeas from "./dateIdeas.json";
import { Button, Select, Spin } from "antd";
import "./App.css";

const dateCategories = [
  "Outdoor",
  "Creative",
  "At Home",
  "Adventurous",
  "Food & Drink",
  "Cosy & Chill",
];

function App() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setActivity(getRandomIdea());
      setLoading(false);
    }, 1000);
  };

  const getRandomIdea = () => {
    const filteredIdeas = dateIdeas.filter((idea) =>
      dateCategories.includes(category) ? idea.category === category : true
    );
    const randomIndex = Math.floor(Math.random() * filteredIdeas.length);
    return filteredIdeas[randomIndex];
  };

  const content = () => {
    if (loading) return <Spin />;
    if (!activity) return;

    return <h2>{activity.idea}</h2>;
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
          style={{ width: 130 }}
        >
          <option value="">Any</option>
          {dateCategories.map((category) => (
            <Select.Option value={category}>{category}</Select.Option>
          ))}
        </Select>
      </div>
      <Button color="danger" variant="solid" onClick={handleClick}>
        Surprise Me
      </Button>
      <div className="content-section">{content()}</div>
    </div>
  );
}

export default App;
