import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Landing from "../../components/landing";
import "./styles.sass";
import Dialog from "../../components/dialog";
import Contact from "../../components/contact";
export default function Home() {
  return (
    <>
      <Controller>
        <Scene triggerHook="onLeave" duration="800%" pin>
          <Timeline wrapper={<div id="pinContainer" />}>
            <Landing />
            <Dialog />
          </Timeline>
        </Scene>
      </Controller>
      <Contact />
    </>
  );
}
