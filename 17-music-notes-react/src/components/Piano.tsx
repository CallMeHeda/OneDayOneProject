function Piano(props: {
  isAPressed: boolean;
  isZPressed: boolean;
  isEPressed: boolean;
  isRPressed: boolean;
  isTPressed: boolean;
  isYPressed: boolean;
  isUPressed: boolean;
  isIPressed: boolean;
  isOPressed: boolean;
  isPPressed: boolean;
  isCapsLockPressed: boolean;
  isQPressed: boolean;
  isSPressed: boolean;
  isDPressed: boolean;
  isFPressed: boolean;
  isGPressed: boolean;
  isHPressed: boolean;
  isJPressed: boolean;
  isKPressed: boolean;
  isLPressed: boolean;
  isMPressed: boolean;
  isPercentPressed: boolean;
  isPoundPressed: boolean;
  isEnterPressed: boolean;
}) {
  return (
    <div id="piano">
      <div className="keys">
        {/* BLACK KEYS */}
        <div className="blackKeys">
          <div
            className={`key black ${props.isAPressed ? "activeBlackKey" : ""}`}
          >
            <span>A</span>
          </div>
          <div
            className={`key black ${props.isZPressed ? "activeBlackKey" : ""}`}
          >
            <span>Z</span>
          </div>
          <div
            className={`key black ${props.isEPressed ? "activeBlackKey" : ""}`}
          >
            <span>E</span>
          </div>
          <div
            className={`key black ${props.isRPressed ? "activeBlackKey" : ""}`}
          >
            <span>R</span>
          </div>
          <div
            className={`key black ${props.isTPressed ? "activeBlackKey" : ""}`}
          >
            <span>T</span>
          </div>
          <div
            className={`key black ${props.isYPressed ? "activeBlackKey" : ""}`}
          >
            <span>Y</span>
          </div>
          <div
            className={`key black ${props.isUPressed ? "activeBlackKey" : ""}`}
          >
            <span>U</span>
          </div>
          <div
            className={`key black ${props.isIPressed ? "activeBlackKey" : ""}`}
          >
            <span>I</span>
          </div>
          <div
            className={`key black ${props.isOPressed ? "activeBlackKey" : ""}`}
          >
            <span>O</span>
          </div>
          <div
            className={`key black ${props.isPPressed ? "activeBlackKey" : ""}`}
          >
            <span>P</span>
          </div>
        </div>
        {/* WHITE KEYS */}
        <div className="whiteKeys">
          <div
            className={`key white ${
              props.isCapsLockPressed ? "activeWhiteKey" : ""
            }`}
          >
            <span>MAJ</span>
          </div>
          <div
            className={`key white ${props.isQPressed ? "activeWhiteKey" : ""}`}
          >
            <span>Q</span>
          </div>
          <div
            className={`key white ${props.isSPressed ? "activeWhiteKey" : ""}`}
          >
            <span>S</span>
          </div>
          <div
            className={`key white ${props.isDPressed ? "activeWhiteKey" : ""}`}
          >
            <span>D</span>
          </div>
          <div
            className={`key white ${props.isFPressed ? "activeWhiteKey" : ""}`}
          >
            <span>F</span>
          </div>
          <div
            className={`key white ${props.isGPressed ? "activeWhiteKey" : ""}`}
          >
            <span>G</span>
          </div>
          <div
            className={`key white ${props.isHPressed ? "activeWhiteKey" : ""}`}
          >
            <span>H</span>
          </div>
          <div
            className={`key white ${props.isJPressed ? "activeWhiteKey" : ""}`}
          >
            <span>J</span>
          </div>
          <div
            className={`key white ${props.isKPressed ? "activeWhiteKey" : ""}`}
          >
            <span>K</span>
          </div>
          <div
            className={`key white ${props.isLPressed ? "activeWhiteKey" : ""}`}
          >
            <span>L</span>
          </div>
          <div
            className={`key white ${props.isMPressed ? "activeWhiteKey" : ""}`}
          >
            <span>M</span>
          </div>
          <div
            className={`key white ${
              props.isPercentPressed ? "activeWhiteKey" : ""
            }`}
          >
            <span>%/ù</span>
          </div>
          <div
            className={`key white ${
              props.isPoundPressed ? "activeWhiteKey" : ""
            }`}
          >
            <span>£/µ</span>
          </div>
          <div
            className={`key white ${
              props.isEnterPressed ? "activeWhiteKey" : ""
            }`}
          >
            <span>Enter</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Piano;
