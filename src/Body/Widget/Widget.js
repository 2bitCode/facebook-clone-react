import React from "react";
import "./Widget.css";

function Widget() {
  return (
    <div className="widget">
      <div
        className="fb-page"
        data-href="https://www.facebook.com/Nebstar12"
        data-tabs="timeline"
        data-width="440"
        data-height="1500"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        {/*<blockquote
          cite="https://www.facebook.com/Nebstar12"
          class="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/Nebstar12">NEB STAR</a>
        </blockquote>*/}
      </div>
    </div>
  );
}

export default Widget;
