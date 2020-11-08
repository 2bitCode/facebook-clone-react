import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        className="storyReel__story"
        image="https://image-cdn.essentiallysports.com/wp-content/uploads/20200806114912/pokimane-announces-esports-scholarship-uci1.png"
        profileSrc="https://image-cdn.essentiallysports.com/wp-content/uploads/20200806114912/pokimane-announces-esports-scholarship-uci1.png"
        title="Pokimane"
      />
      <Story
        className="storyReel__story"
        image="https://wpq0221c4a-flywheel.netdna-ssl.com/wp-content/uploads/2020/08/Sykkuno2.jpg"
        profileSrc="https://celebpie.com/wp-content/uploads/2020/05/3b8028eecdfc80c076c5c9ed375b11.jpg"
        title="Sykkuno"
      />
      <Story
        className="storyReel__story"
        image="https://vignette.wikia.nocookie.net/thefaultinourstars/images/9/94/Hazel.jpeg/revision/latest?cb=20140131145143"
        profileSrc="https://i.pinimg.com/originals/cb/40/92/cb40923173a100ca89e7baa84db8fda5.png"
        title="Hazel Grace Lancaster"
      />
      <Story
        className="storyReel__story"
        image="https://i.pinimg.com/originals/98/0e/d8/980ed8d311f70645e81325727069b1ea.jpg"
        profileSrc="https://cdn.dribbble.com/users/1787553/screenshots/5342369/ragnar-gif-dribbble_still_2x.gif?compress=1&resize=400x300"
        title="Ragnar Lothbrok"
      />
      <Story
        className="storyReel__story"
        image="https://scontent.fbwa4-1.fna.fbcdn.net/v/t1.0-9/53462642_443669442839559_5919076511461146624_o.jpg?_nc_cat=100&ccb=2&_nc_sid=174925&_nc_ohc=yCBxRN77cBAAX9kw1EJ&_nc_ht=scontent.fbwa4-1.fna&oh=5442120cd8777c7663d9c87d4bd2b6b6&oe=5FC9193B"
        profileSrc="https://scontent.fbwa4-1.fna.fbcdn.net/v/t1.0-9/122491399_839126816627151_4136366449064197904_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=oGQYfRQcWmMAX_1-ZHy&_nc_ht=scontent.fbwa4-1.fna&oh=9755505c78ac0dfc56c9fe1a113179bb&oe=5FC6715C"
        title="2bit Sachin"
      />
    </div>
  );
}

export default StoryReel;
