import React from 'react';
import { StickyContainer, Sticky } from "react-sticky";
import Spinner from "./common/Spinner";
import { withRouter } from 'react-router-dom'

export default withRouter(({history, usersArr = [], loader = ""}) => {
  const colsClass = " col-6 col-xs-6 col-sm-3";
  const columns = [
    { field: "userName", name: "Name"},
    { field: "email", name: "Email"},
    { field: "custom", name: "Custom params"},
    { field: "balance", name: "Balance"},
  ];

  return (
    <div className={"tasks m20-0 " + loader}>

      <StickyContainer>

        <Sticky>
          {({ style, isSticky }) => {

            return (
              <div className={"sticky-table-head" + (isSticky ? " sticky" : "")} style={style}>
                <div className={"list-title row"}>
                  {
                    columns.map((column, i) => {
                      return (
                        <div key={i} className={`${column.field} ${colsClass}`}>
                          <span className={"dib"}>{column.name}</span>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            );
          }}
        </Sticky>
        {
          usersArr.length ?
            <table className={"tasks-list w-100"}>
              <tbody>
              {
                usersArr.map((user, i) => {
                  return (
                    <tr key={i} className={"list-item row"} onClick={() => {history.push(`/user/${user.user_id}`)}}>
                      <td className={"name " + colsClass} title={user["user_name"]}>{user["user_name"] ? user["user_name"] : "Unknown" }</td>
                      <td className={"email " + colsClass} title={user.email}>{user.email ? user.email : "-"}</td>
                      <td className={"custom " + colsClass} title={user["user_custom"]}>{user["user_custom"] ? user["user_custom"] : "-"}</td>
                      <td className={"balance " + colsClass} title={user["user_custom"]}>
                        {user["balance"] ? (user["balance"] + " " + (user["wallet_currency"] ? user["wallet_currency"] : "")): "-"}
                      </td>
                    </tr>
                  );
                })
              }
              </tbody>
            </table>
            :
            <div className={"tasks-list-empty row p-20-0"}>
              <span className={"col-24"}>Users list is Empty!</span>
            </div>
        }
        <Spinner/>
      </StickyContainer>
    </div>
  );
})
