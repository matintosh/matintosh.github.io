import React from "react";
import { Tween, Timeline } from "react-gsap";
import { scroller, animateScroll as scroll } from "react-scroll";
import ScrollDown from "../scroll-down-icon";

import "./styles.sass";
export default function Landing() {
  const handleScroll = () => {
    scroll.scrollToBottom({
      duration: 18000,
      delay: 0,
    });
  };
  return (
    <Tween
      from={{
        backgroundColor: "#fafafa",
      }}
      to={{
        backgroundColor: "#000",
      }}
    >
      <section className="landing">
        <h1>Hello Stranger!</h1>
        <ScrollDown onClick={handleScroll} />
      </section>
    </Tween>
  );
}
