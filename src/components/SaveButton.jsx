import { useState } from "react";
import { Button } from "antd";
import "../App.css";
const SaveButton = () => {
  const [saved, setSaved] = useState(false);

  const handleToggle = () => {
    setSaved((prev) => !prev);
  };

  return (
    <div className="save-button">
      <Button type="text" onClick={handleToggle}>
        {saved ? "❤️" : "🤍"}
      </Button>
    </div>
  );
}


export default SaveButton;