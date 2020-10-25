// @flow
import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Avatar from "../../assets/avatar.JPG";

import "./styles.sass";

const Home = () => (
  <div className="home">
    <Controller>
      <Scene triggerHook="onLeave" duration="800%" pin>
        <Timeline wrapper={<div id="pinContainer" />}>
          <Tween
            from={{
              backgroundColor: "#fafafa",
            }}
            to={{
              backgroundColor: "#000",
            }}
          >
            <section className="panel">
              <h1>Hello Stranger!</h1>
            </section>
          </Tween>
          <Tween
            from={{
              opacity: 0,
            }}
            to={{
              opacity: 1,
              color: "#fafafa",
            }}
            wrapper={<div className="technologies" />}
          >
            <h1>If you are looking for</h1>
          </Tween>
          <Tween from={{ y: "-100%", opacity: 0 }} to={{ y: "0%", opacity: 1 }}>
            <section className="panel black">
              <h1>An Innovative</h1>
            </section>
          </Tween>
          <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
            <section className="panel black">
              <h1>Pixel Perfect Enthusiastic</h1>
            </section>
          </Tween>
          <Tween from={{ y: "-100%", opacity: 0 }} to={{ y: "0%", opacity: 1 }}>
            <section className="panel black">
              <h1>CSS Lover</h1>
            </section>
          </Tween>
          <Tween from={{ y: "100%", opacity: 0 }} to={{ y: "0%", opacity: 1 }}>
            <section className="panel black">
              <h1>Client & Product Focused</h1>
            </section>
          </Tween>
          <Tween from={{ x: "100%", opacity: 0 }} to={{ x: "0%", opacity: 1 }}>
            <section className="panel black">
              <h1>Software Developer</h1>
            </section>
          </Tween>
          <Tween from={{ x: "-100%", opacity: 0 }} to={{ x: "0%", opacity: 1 }}>
            <section className="panel black">
              <h1>You've found the right place</h1>
            </section>
          </Tween>
          <Tween
            from={{ opacity: 0 }}
            to={{ opacity: 1, backgroundColor: "#fafafa" }}
          >
            <section className="panel black">
              <h1>You've found the right place</h1>
            </section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
    <Controller>
      <Scene indicators={false} duration="400%" triggerHook="onLeave" pin>
        <Timeline wrapper={<div className="zoom" />}>
          <Tween
            from={{
              color: "#282424",
            }}
            to={{
              color: "#fafafa",
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
  </div>
);

export default Home;
