import "../styles/beat.scss";
import { useEffect, useState } from "react";
import * as Tone from "tone";
import Keyboard from "./Keyboard";

function Beat() {
  const [isAPressed, setIsAPressed] = useState<boolean>(false);
  const [isZPressed, setIsZPressed] = useState<boolean>(false);
  const [isEPressed, setIsEPressed] = useState<boolean>(false);
  const [isQPressed, setIsQPressed] = useState<boolean>(false);
  const [isSPressed, setIsSPressed] = useState<boolean>(false);
  const [isDPressed, setIsDPressed] = useState<boolean>(false);
  const [isCtrlPressed, setIsCtrlPressed] = useState<boolean>(false);
  const [isSpacePressed, setIsSpacePressed] = useState<boolean>(false);
  const [isShiftPressed, setIsShiftPressed] = useState<boolean>(false);
  const [isSunPressed, setIsSunPressed] = useState<boolean>(false);

  const [keyboardTheme, setKeyboardTheme] = useState<boolean>(false);

  const players = new Tone.Players({
    clap: "./notes/beat/clap-break-the-bank_C_minor.wav",
    kick: "./notes/beat/kick-08.wav",
    snareMouth: "./notes/beat/snare.mp3",
    gameReady: "./notes/beat/game-ready-button-fx_D_major.wav",
    harshKick: "./notes/beat/harsh-kick.wav",
    snare: "./notes/beat/memphis-snare-dry-drum_11bpm_C_minor.wav",
    hithat: "./notes/beat/hihat.mp3",
    kickMp3: "./notes/beat/kick.mp3",
    tom: "./notes/beat/tom.mp3",
  }).toDestination();

  const handleKeyDown = (e: any) => {
    const pressedKey = e.key.toLowerCase();
    if (pressedKey === "a") setIsAPressed(true);
    if (pressedKey === "z") setIsZPressed(true);
    if (pressedKey === "e") setIsEPressed(true);
    if (pressedKey === "q") setIsQPressed(true);
    if (pressedKey === "s") setIsSPressed(true);
    if (pressedKey === "d") setIsDPressed(true);
    if (pressedKey === "shift") setIsShiftPressed(true);
    if (pressedKey === "control") setIsCtrlPressed(true);
    if (pressedKey === " ") setIsSpacePressed(true);
    if (pressedKey === "pagedown") setIsSunPressed(true);
  };

  const handleKeyUp: EventListener = (e) => {
    const keyboardEvent = e as KeyboardEvent;
    keyboardEvent.preventDefault();
    if (players.loaded && keyboardEvent.key.toLowerCase() === "a") {
      const player = players.player("gameReady");
      if (player) player.start();
      setIsAPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "z") {
      const player = players.player("clap");
      if (player) player.start();
      setIsZPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "d") {
      const player = players.player("kick");
      if (player) player.start();
      setIsDPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "e") {
      const player = players.player("snareMouth");
      if (player) player.start();
      setIsEPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "q") {
      const player = players.player("harshKick");
      if (player) player.start();
      setIsQPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "s") {
      const player = players.player("snare");
      if (player) player.start();
      setIsSPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "shift") {
      const player = players.player("tom");
      if (player) player.start();
      setIsShiftPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "control") {
      const player = players.player("kickMp3");
      if (player) player.start();
      setIsCtrlPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === " ") {
      const player = players.player("hithat");
      if (player) player.start();
      setIsSpacePressed(false);
    }

    if (keyboardEvent.key.toLowerCase() === "pagedown") {
      setKeyboardTheme((theme) => !theme);
      setIsSunPressed(false);
    }
    console.log(keyboardEvent.key.toLowerCase());
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="container">
      <Keyboard
        isAPressed={isAPressed}
        isZPressed={isZPressed}
        isEPressed={isEPressed}
        isQPressed={isQPressed}
        isSPressed={isSPressed}
        isDPressed={isDPressed}
        isSunPressed={isSunPressed}
        isShiftPressed={isShiftPressed}
        isCtrlPressed={isCtrlPressed}
        isSpacePressed={isSpacePressed}
        keyboardTheme={keyboardTheme}
      />
    </div>
  );
}

export default Beat;
