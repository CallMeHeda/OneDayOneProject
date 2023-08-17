import "../styles/beat.scss";
import { useEffect, useState } from "react";
import * as Tone from "tone";
import Keyboard from "./Keyboard";

const Beat = () => {
  const [isAPressed, setIsAPressed] = useState<boolean>(false);
  const [isZPressed, setIsZPressed] = useState<boolean>(false);
  const [isEPressed, setIsEPressed] = useState<boolean>(false);
  const [isQPressed, setIsQPressed] = useState<boolean>(false);
  const [isSPressed, setIsSPressed] = useState<boolean>(false);
  const [isDPressed, setIsDPressed] = useState<boolean>(false);
  const [isSunPressed, setIsSunPressed] = useState<boolean>(false);

  const [keyboardTheme, setKeyboardTheme] = useState<boolean>(false);

  const players = new Tone.Players(
    {
      clap: "./notes/beat/clap-break-the-bank_C_minor.wav",
      kick: "./notes/beat/kick-08.wav",
      gameReady: "./notes/beat/game-ready-button-fx_D_major.wav",
      harshKick: "./notes/beat/harsh-kick.wav",
      snare: "./notes/beat/memphis-snare-dry-drum_11bpm_C_minor.wav",
    },
    { volume: -6 }
  ).toDestination();

  const handleKeyDown = (e: any) => {
    const pressedKey = e.key.toLowerCase();
    if (pressedKey === "a") setIsAPressed(true);
    if (pressedKey === "z") setIsZPressed(true);
    if (pressedKey === "e") setIsEPressed(true);
    if (pressedKey === "q") setIsQPressed(true);
    if (pressedKey === "s") setIsSPressed(true);
    if (pressedKey === "d") setIsDPressed(true);
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
      const player = players.player("kick");
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

    if (keyboardEvent.key.toLowerCase() === "pagedown") {
      setKeyboardTheme((theme) => !theme);
      setIsSunPressed(false);
    }
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
    <div>
      <Keyboard
        isAPressed={isAPressed}
        isZPressed={isZPressed}
        isEPressed={isEPressed}
        isQPressed={isQPressed}
        isSPressed={isSPressed}
        isDPressed={isDPressed}
        isSunPressed={isSunPressed}
        keyboardTheme={keyboardTheme}
      />
    </div>
  );
};

export default Beat;
