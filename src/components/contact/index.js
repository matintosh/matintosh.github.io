import React from "react";
import { Tween, Timeline } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";

import Avatar from "../../assets/avatar.JPG";

export default function Contact() {
  return (
    <Controller>
      <Scene indicators={false} duration="400%" triggerHook="onLeave" pin>
        <Timeline wrapper={<div className="zoom" />}>
          <Tween
            from={{
              color: "#282424",
              opacity: 1,
            }}
            to={{
              opacity: 0,
            }}
          >
            <h1>Matias Martinez</h1>
          </Tween>
          <Tween
            from={{
              opacity: 0,
              borderRadius: "30%",
            }}
            to={{
              opacity: 1,

              left: "20%",
              borderRadius: 5,
            }}
          >
            <img src={Avatar} alt="" className="avatar" />
          </Tween>
          <Tween
            from={{
              opacity: 0,
            }}
            to={{
              opacity: 1,
            }}
          >
            <div className="contact">
              <h1>Software Developer</h1>
              <p>@matintosh</p>
            </div>
          </Tween>

          <Tween
            from={{
              opacity: 0,
              position: "absolute",
              bottom: "-100%",
            }}
            to={{
              opacity: 1,
              bottom: "20%",
            }}
          >
            <div>
              <p>Want to take a look at my projects?</p>
              <p className="link">Click here</p>
            </div>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  );
}
