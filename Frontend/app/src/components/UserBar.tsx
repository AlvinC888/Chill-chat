//Import packages
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../scripts/getUsers";
import { UserBarIcon } from "./UserBarIcon";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import "./style/UserBar.css";

//Props interface
interface Props {
  viewOnClick: () => void;
}

//UserBar component
export const UserBar: React.FC<Props> = (props) => {
  //State
  let [userList, setUserList] = useState<any>([]);

  //Call get user function
  useEffect(() => {
    //Call function
    getAllUsers().then((returnData) => {
      setUserList(returnData.data);
    });
  }, []);

  //Render component
  return (
    <div id="userList">
      {/*Hide/unhide button*/}
      <VisibilityOffIcon id="hideButton" onClick={props.viewOnClick} />
      {/*Tittle*/}
      <h2 id="tittle">Users:</h2>
      {/*Map users*/}
      {userList.map((user) => {
        //Render user
        return (
          <div id="user" key={user.id}>
            {/*Icon*/}
            <UserBarIcon />
            {/*Username*/}
            <strong className="userDisplayName">{user.username}</strong>
          </div>
        );
      })}
    </div>
  );
};