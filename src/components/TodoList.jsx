import React from "react";
import ShowItems from "./ShowItems";
const TodoList = props => {
  const { todo, label, handleRemove, updateHandler, handleClick } = props;
  return (
    <div>
      <u className="text-primary h3">{label}</u>
      <div className="container  my-2">
        {todo?.map(item => (
          <ShowItems
            handleRemove={handleRemove}
            updateHandler={updateHandler}
            handleClick={handleClick}
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
