import React from "react";
import images from "../../constants/images";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { red } from "@mui/material/colors";

const UserButton = ({
  userImage = images.avatarLeopard,
  username = "Alex Gree",
  onClickFunction = () => null,
}) => {
  return (
    <div className="user-btn" onClick={() => onClickFunction()}>
      <div className="user-btn-img-container"><img src={userImage} className="user-btn-image" /></div>
      <p className="user-btn-name">{username}</p>
      <KeyboardArrowDownIcon
        fontSize="large"
        sx={{ color: red[400] }}
        className="user-btn-icon"
      />
    </div>
  );
};

export default UserButton;
