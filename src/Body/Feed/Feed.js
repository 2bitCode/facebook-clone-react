import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel/StoryReel";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import db from "../../Firebase/firebase";
import { useStateValue } from "../../StateProvider/StateProvider";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("post")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          name={post.data.userName}
          profile={post.data.profileImage}
          timeStamp={post.data.timestamp}
          message={post.data.message}
          imageSrc={post.data.Postimage}
        />
      ))}
    </div>
  );
}

export default Feed;
