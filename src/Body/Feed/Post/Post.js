import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Post({ profile, name, timeStamp, message, imageSrc }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar className="post__avatar" src={profile} />
        <div className="post__info">
          <h3>{name}</h3>
          <p>{new Date(timeStamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__message">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={imageSrc} />
      </div>
      <div className="post__bottom">
        <div className="post__bottom__option">
          <ThumbUpIcon fontSize="large" />
          <p>Like</p>
        </div>
        <div className="post__bottom__option">
          <ChatBubbleOutlinedIcon fontSize="large" />
          <p>Comment</p>
        </div>
        <div className="post__bottom__option">
          <NearMeIcon fontSize="large" />
          <p>Share</p>
        </div>
        <div className="post__bottom__option">
          <AccountCircleIcon fontSize="large" />
          <p></p>
        </div>
        <div className="post__bottom__option">
          <ExpandMoreIcon fontSize="large" />
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Post;
