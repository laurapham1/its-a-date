import { useState } from "react";
import { Button } from "antd";
import "../App.css";
const SaveButton = ({toggleFavourite, isFavourited}) => {

  const handleToggle = () => {
    toggleFavourite();
  };

  return (
    <div className="save-button">
      <Button type="text" onClick={handleToggle}>
        {isFavourited ? "❤️" : "🤍"}
      </Button>
    </div>
  );
}


export default SaveButton;