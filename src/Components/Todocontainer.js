import React from "react";

const Todocontainer = ({ item }) => {
  return (
    <div className="todo__container">
      <li>{item.title}</li>
      <br />
    </div>
  );
};

export default Todocontainer;
