import { useEffect, useState } from "react";
import "../styles/piano.scss";
import * as Tone from "tone";
import Piano from "./Piano";
import { release } from "os";

function PianoView() {
  // WHITE
  const [isCapsLockPressed, setIsCapsLockPressed] = useState<boolean>(false);
  const [isQPressed, setIsQPressed] = useState<boolean>(false);
  const [isSPressed, setIsSPressed] = useState<boolean>(false);
  const [isDPressed, setIsDPressed] = useState<boolean>(false);
  const [isFPressed, setIsFPressed] = useState<boolean>(false);
  const [isGPressed, setIsGPressed] = useState<boolean>(false);
  const [isHPressed, setIsHPressed] = useState<boolean>(false);
  const [isJPressed, setIsJPressed] = useState<boolean>(false);
  const [isKPressed, setIsKPressed] = useState<boolean>(false);
  const [isLPressed, setIsLPressed] = useState<boolean>(false);
  const [isMPressed, setIsMPressed] = useState<boolean>(false);
  const [isPercentPressed, setIsPercentPressed] = useState<boolean>(false);
  const [isPoundPressed, setIsPoundPressed] = useState<boolean>(false);
  const [isEnterPressed, setIsEnterPressed] = useState<boolean>(false);

  // BLACK
  const [isAPressed, setIsAPressed] = useState<boolean>(false);
  const [isZPressed, setIsZPressed] = useState<boolean>(false);
  const [isEPressed, setIsEPressed] = useState<boolean>(false);
  const [isRPressed, setIsRPressed] = useState<boolean>(false);
  const [isTPressed, setIsTPressed] = useState<boolean>(false);
  const [isYPressed, setIsYPressed] = useState<boolean>(false);
  const [isUPressed, setIsUPressed] = useState<boolean>(false);
  const [isIPressed, setIsIPressed] = useState<boolean>(false);
  const [isOPressed, setIsOPressed] = useState<boolean>(false);
  const [isPPressed, setIsPPressed] = useState<boolean>(false);

  const players = new Tone.Players(
    {
      key1: "./notes/piano/key01.mp3",
      key2: "./notes/piano/key02.mp3",
      key3: "./notes/piano/key03.mp3",
      key4: "./notes/piano/key04.mp3",
      key5: "./notes/piano/key05.mp3",
      key6: "./notes/piano/key06.mp3",
      key7: "./notes/piano/key07.mp3",
      key8: "./notes/piano/key08.mp3",
      key9: "./notes/piano/key09.mp3",
      key10: "./notes/piano/key10.mp3",
      key11: "./notes/piano/key11.mp3",
      key12: "./notes/piano/key12.mp3",
      key13: "./notes/piano/key13.mp3",
      key14: "./notes/piano/key14.mp3",
      key15: "./notes/piano/key15.mp3",
      key16: "./notes/piano/key16.mp3",
      key17: "./notes/piano/key17.mp3",
      key18: "./notes/piano/key18.mp3",
      key19: "./notes/piano/key19.mp3",
      key20: "./notes/piano/key20.mp3",
      key21: "./notes/piano/key21.mp3",
      key22: "./notes/piano/key22.mp3",
      key23: "./notes/piano/key23.mp3",
      key24: "./notes/piano/key24.mp3",
    },
    { volume: -6 }
  ).toDestination();

  const handleKeyDown = (e: any) => {
    const pressedKey = e.key.toLowerCase();
    if (pressedKey === "capslock") setIsCapsLockPressed(true);
    if (pressedKey === "q") setIsQPressed(true);
    if (pressedKey === "s") setIsSPressed(true);
    if (pressedKey === "d") setIsDPressed(true);
    if (pressedKey === "f") setIsFPressed(true);
    if (pressedKey === "g") setIsGPressed(true);
    if (pressedKey === "h") setIsHPressed(true);
    if (pressedKey === "j") setIsJPressed(true);
    if (pressedKey === "k") setIsKPressed(true);
    if (pressedKey === "l") setIsLPressed(true);
    if (pressedKey === "m") setIsMPressed(true);
    if (pressedKey === "%" || pressedKey === "ù") setIsPercentPressed(true);
    if (pressedKey === "£" || pressedKey === "µ") setIsPoundPressed(true);
    if (pressedKey === "enter") setIsEnterPressed(true);

    // BLACK
    if (pressedKey === "a") setIsAPressed(true);
    if (pressedKey === "z") setIsZPressed(true);
    if (pressedKey === "e") setIsEPressed(true);
    if (pressedKey === "r") setIsRPressed(true);
    if (pressedKey === "t") setIsTPressed(true);
    if (pressedKey === "y") setIsYPressed(true);
    if (pressedKey === "u") setIsUPressed(true);
    if (pressedKey === "i") setIsIPressed(true);
    if (pressedKey === "o") setIsOPressed(true);
    if (pressedKey === "p") setIsPPressed(true);
  };

  const handleKeyUp: EventListener = (e) => {
    const keyboardEvent = e as KeyboardEvent;
    keyboardEvent.preventDefault();
    console.log(keyboardEvent.key.toLowerCase());
    if (players.loaded && keyboardEvent.key.toLowerCase() === "capslock") {
      const player = players.player("key1");
      if (player) player.start();
      setIsCapsLockPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "q") {
      const player = players.player("key2");
      if (player) player.start();
      setIsQPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "s") {
      const player = players.player("key3");
      if (player) player.start();
      setIsSPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "d") {
      const player = players.player("key4");
      if (player) player.start();
      setIsDPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "f") {
      const player = players.player("key5");
      if (player) player.start();
      setIsFPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "g") {
      const player = players.player("key6");
      if (player) player.start();
      setIsGPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "h") {
      const player = players.player("key7");
      if (player) player.start();
      setIsHPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "j") {
      const player = players.player("key8");
      if (player) player.start();
      setIsJPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "k") {
      const player = players.player("key9");
      if (player) player.start();
      setIsKPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "l") {
      const player = players.player("key10");
      if (player) player.start();
      setIsLPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "m") {
      const player = players.player("key11");
      if (player) player.start();
      setIsMPressed(false);
    }
    if (
      (players.loaded && keyboardEvent.key.toLowerCase() === "%") ||
      keyboardEvent.key.toLowerCase() === "ù"
    ) {
      const player = players.player("key12");
      if (player) player.start();
      setIsPercentPressed(false);
    }
    if (
      (players.loaded && keyboardEvent.key.toLowerCase() === "£") ||
      keyboardEvent.key.toLowerCase() === "µ"
    ) {
      const player = players.player("key13");
      if (player) player.start();
      setIsPoundPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "enter") {
      const player = players.player("key14");
      if (player) player.start();
      setIsEnterPressed(false);
    }

    // BLACK
    if (players.loaded && keyboardEvent.key.toLowerCase() === "a") {
      const player = players.player("key15");
      if (player) player.start();
      setIsAPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "z") {
      const player = players.player("key16");
      if (player) player.start();
      setIsZPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "e") {
      const player = players.player("key17");
      if (player) player.start();
      setIsEPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "r") {
      const player = players.player("key18");
      if (player) player.start();
      setIsRPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "t") {
      const player = players.player("key19");
      if (player) player.start();
      setIsTPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "y") {
      const player = players.player("key20");
      if (player) player.start();
      setIsYPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "u") {
      const player = players.player("key21");
      if (player) player.start();
      setIsUPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "i") {
      const player = players.player("key22");
      if (player) player.start();
      setIsIPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "o") {
      const player = players.player("key23");
      if (player) player.start();
      setIsOPressed(false);
    }
    if (players.loaded && keyboardEvent.key.toLowerCase() === "p") {
      const player = players.player("key24");
      if (player) player.start();
      setIsPPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("keydown", handleKeyDown);
  }, [handleKeyUp]);

  return (
    <div className="containerPiano">
      <Piano
        isAPressed={isAPressed}
        isZPressed={isZPressed}
        isEPressed={isEPressed}
        isRPressed={isRPressed}
        isTPressed={isTPressed}
        isYPressed={isYPressed}
        isUPressed={isUPressed}
        isIPressed={isIPressed}
        isOPressed={isOPressed}
        isPPressed={isPPressed}
        isCapsLockPressed={isCapsLockPressed}
        isQPressed={isQPressed}
        isSPressed={isSPressed}
        isDPressed={isDPressed}
        isFPressed={isFPressed}
        isGPressed={isGPressed}
        isHPressed={isHPressed}
        isJPressed={isJPressed}
        isKPressed={isKPressed}
        isLPressed={isLPressed}
        isMPressed={isMPressed}
        isPercentPressed={isPercentPressed}
        isPoundPressed={isPoundPressed}
        isEnterPressed={isEnterPressed}
      />
    </div>
  );
}

export default PianoView;
