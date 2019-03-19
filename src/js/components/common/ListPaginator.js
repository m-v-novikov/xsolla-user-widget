import React from "react";

export default ({ usersPagination, requestAction}) => {

  return (
    <ul className={"paginator row mb-20"}>
      {
        (!!usersPagination.length && usersPagination.length !== 1) &&
        usersPagination.map((item, i) => {
          return (
            <li key={i}
                title={!item.str.toString().includes("...") ? item.str : ""}
                className={(item.active && !item.str.toString().includes("...")) ? "active" : ""}
                onClick={() => !item.active && requestAction(item.index)}>
              {item.str}
            </li>
          );
        })
      }
    </ul>
  );
};

export const buildPaginationObj = (total, current) => {
  const itemsPerPage = 10;

  const maxPages = Math.floor(total/itemsPerPage);
  const currentIndex = Math.floor(current/itemsPerPage + 1);
  const allPagesArr = [...Array(Math.ceil(total/ itemsPerPage)).keys()];


  if(maxPages < 2) return [];

  if(currentIndex < 6){
    allPagesArr.splice(6, (allPagesArr.length - 8), "...");
  }else if(currentIndex > (maxPages - 4)){
    allPagesArr.splice(2, (allPagesArr.length - 8), "...");
  }else{
    allPagesArr.splice(2, (currentIndex - 5), "...");
    allPagesArr.splice(8, (allPagesArr.length - 10), "...");
  }

  return allPagesArr.map(( btn ) => ({
    str: (!btn.toString().includes("...") ? (btn + 1) : btn),
    index: (btn ? (btn * itemsPerPage) : btn),
    active: ((btn + 1) === currentIndex || btn.toString().includes("..."))
  }));
};
