import React from "react";
import Item from "./utils/Item";
import Title from "./utils/Title";

const Sale = ({ ifExists, endpoint: { title, items } }) => {
  return (
    <>
      <div className="nike-container">
        <Title title={title} />
        <div
          className={`grid items-center justify-items-center gap-20 lg:gap-10 mt-7 ${
            ifExists
              ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"
              : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
          }`}
        >
          {items?.map((item, i) => (
            <Item {...item} key={i} ifExists={ifExists} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sale;
