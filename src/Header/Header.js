import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListSharpIcon from "@material-ui/icons/ListSharp";
import { useStateValue } from "../StateProvider/StateProvider";

function Header() {
  const [menuState, setMenuState] = React.useState(false);
  const [{ menu, user }, dispatch] = useStateValue();
  const menuClickHandler = () => {
    if (menuState) {
      setMenuState(false);
    } else {
      setMenuState(true);
    }
    dispatch({
      type: "MENU_BAR",
      menu: menuState,
    });
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt="Aha! no internet!"
        />
        <div className="header__input">
          <SearchIcon fontSize="large" />
          <input placeHolder="Search Facebook" type="text" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option header__menuBar">
          <IconButton>
            <ListSharpIcon
              fontSize="large"
              onClick={menuClickHandler}
              onChange={(e) => e.preventDefault()}
            />
          </IconButton>
        </div>
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>

        <IconButton>
          <AddIcon fontSize="medium" />
        </IconButton>
        <IconButton>
          <ForumIcon fontSize="medium" />
        </IconButton>
        <IconButton>
          <NotificationsIcon fontSize="medium" />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon fontSize="medium" />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
