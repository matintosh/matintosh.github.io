import React from "react";
import { Tween, Timeline } from "react-gsap";
import './styles.sass'
export default function Dialog() {
  return (
    <>
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
    </>
  );
}
