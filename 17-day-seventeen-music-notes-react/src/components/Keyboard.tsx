import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeLow,
  faVolumeHigh,
  faVolumeXmark,
  faStop,
  faBackwardFast,
  faForwardFast,
  faPause,
  faLock,
  faCalculator,
  faPlay,
  faHouse,
  faLeftLong,
  faRightLeft,
  faUpLong,
  faTurnDown,
  faDownLong,
  faRightLong,
  faWindowMinimize,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWindows } from "@fortawesome/free-brands-svg-icons";

function Keyboard(props: {
  isAPressed: boolean;
  isZPressed: boolean;
  isEPressed: boolean;
  isQPressed: boolean;
  isSPressed: boolean;
  isDPressed: boolean;
  isSunPressed: boolean;
  isShiftPressed: boolean;
  isCtrlPressed: boolean;
  isSpacePressed: boolean;
  keyboardTheme: boolean;
}) {
  // ROW 1
  const keyRow1 = [
    { keyValue: "Escape", jsx: null },
    {
      keyValue: "1",
      jsx: (
        <span className="keyIcon">
          <FontAwesomeIcon icon={faCirclePlay} size="2xs" className="icon" />
        </span>
      ),
    },
    {
      keyValue: "F2",
      jsx: (
        <span className="keyIcon">
          <FontAwesomeIcon icon={faVolumeLow} size="2xs" className="icon" />
        </span>
      ),
    },
    {
      keyValue: "F3",
      jsx: (
        <span className="keyIcon">
          <FontAwesomeIcon icon={faVolumeHigh} size="2xs" className="icon" />
        </span>
      ),
    },
    {
      keyValue: "F4",
      jsx: (
        <span className="keyIcon">
          <FontAwesomeIcon icon={faVolumeXmark} size="2xs" className="icon" />
        </span>
      ),
    },
    {
      keyValue: "F5",
      jsx: (
        <span className="keyIcon">
          <FontAwesomeIcon icon={faStop} size="2xs" className="icon" />
        </span>
      ),
    },
    {
      keyValue: "F6",
      jsx: (
        <span className="keyIcon">
          <FontAwesomeIcon icon={faBackwardFast} size="2xs" className="icon" />
        </span>
      ),
    },
    {
      keyValue: "F7",
      jsx: (
        <span className="keyIcon">
          <FontAwesomeIcon icon={faPlay} size="2xs" className="icon" />
          <FontAwesomeIcon icon={faPause} size="2xs" className="icon" />
        </span>
      ),
    },
    {
      keyValue: "F8",
      jsx: (
        <span className="keyIcon">
          <FontAwesomeIcon icon={faForwardFast} size="2xs" className="icon" />
        </span>
      ),
    },
    {
      keyValue: "F9",
      jsx: (
        <span className="keyIcon">
          <FontAwesomeIcon icon={faEnvelope} size="2xs" className="icon" />
        </span>
      ),
    },
    {
      keyValue: "F10",
      jsx: (
        <span className="keyIcon">
          <FontAwesomeIcon icon={faHouse} size="2xs" className="icon" />
        </span>
      ),
    },
    {
      keyValue: "F11",
      jsx: (
        <span className="keyIcon">
          <FontAwesomeIcon icon={faLock} size="2xs" className="icon" />
        </span>
      ),
    },
    {
      keyValue: "F12",
      jsx: (
        <span className="keyIcon">
          <FontAwesomeIcon icon={faCalculator} size="2xs" className="icon" />
        </span>
      ),
    },
  ];
  // ROW 2
  const keyRow2 = [
    { keyValue: "N", jsx: <span className="keySymbole">2</span> },
    {
      keyValue: "1",
      jsx: <span className="keySymbole">&</span>,
    },
    {
      keyValue: "2",
      jsx: <span className="keySymbole">é ~</span>,
    },
    {
      keyValue: "3",
      jsx: <span className="keySymbole">" #</span>,
    },
    {
      keyValue: "4",
      jsx: <span className="keySymbole">' {"{"}</span>,
    },
    {
      keyValue: "5",
      jsx: null,
    },
    {
      keyValue: "6",
      jsx: <span className="keySymbole">- |</span>,
    },
    {
      keyValue: "7",
      jsx: <span className="keySymbole">è `</span>,
    },
    {
      keyValue: "8",
      jsx: <span className="keySymbole">_ \</span>,
    },
    {
      keyValue: "9",
      jsx: <span className="keySymbole">ç ^</span>,
    },
    {
      keyValue: "0",
      jsx: <span className="keySymbole">à @</span>,
    },
    {
      keyValue: "°",
      jsx: <span className="keySymbole">{") ]"}</span>,
    },
    {
      keyValue: "+",
      jsx: <span className="keySymbole">{"= }"}</span>,
    },
    {
      keyValue: null,
      jsx: (
        <span className="keyIcon">
          <FontAwesomeIcon icon={faLeftLong} size="lg" className="icon" />
        </span>
      ),
    },
  ];
  // ROW 3
  const keyRow3 = [
    {
      keyValue: 0,
      jsx: (
        <span className="keyIcon">
          <FontAwesomeIcon icon={faRightLeft} size="lg" className="icon" />
        </span>
      ),
    },
    {
      keyValue: "A",
      jsx: null,
    },
    {
      keyValue: "Z",
      jsx: (
        <span className="keySymbole">
          <FontAwesomeIcon icon={faUpLong} className="icon" />
        </span>
      ),
    },
    {
      keyValue: "E",
      jsx: <span className="keySymbole">€</span>,
    },
    {
      keyValue: "R",
      jsx: null,
    },
    {
      keyValue: "T",
      jsx: null,
    },
    {
      keyValue: "Y",
      jsx: null,
    },
    {
      keyValue: "U",
      jsx: null,
    },
    {
      keyValue: "I",
      jsx: null,
    },
    {
      keyValue: "O",
      jsx: null,
    },
    {
      keyValue: "P",
      jsx: null,
    },
    {
      keyValue: "¨",
      jsx: <span className="keySymbole">^</span>,
    },
    {
      keyValue: "£",
      jsx: <span className="keySymbole">$ ¤</span>,
    },
    {
      keyValue: 1,
      jsx: (
        <span className="keyIcon enter">
          <FontAwesomeIcon icon={faTurnDown} rotation={90} className="icon" />
        </span>
      ),
    },
  ];
  //   ROW 4
  const keyRow4 = [
    {
      keyValue: 0,
      jsx: (
        <span className="keyIcon">
          <FontAwesomeIcon icon={faLock} className="icon" />
        </span>
      ),
    },
    {
      keyValue: "Q",
      jsx: (
        <span className="keyIcon">
          <FontAwesomeIcon icon={faLeftLong} className="icon" />
        </span>
      ),
    },
    {
      keyValue: "S",
      jsx: (
        <span className="keyIcon">
          <FontAwesomeIcon icon={faDownLong} className="icon" />
        </span>
      ),
    },
    {
      keyValue: "D",
      jsx: (
        <span className="keySymbole">
          <FontAwesomeIcon icon={faRightLong} />
        </span>
      ),
    },
    {
      keyValue: "F",
      jsx: null,
    },
    {
      keyValue: "G",
      jsx: null,
    },
    {
      keyValue: "H",
      jsx: null,
    },
    {
      keyValue: "J",
      jsx: null,
    },
    {
      keyValue: "K",
      jsx: null,
    },
    {
      keyValue: "L",
      jsx: null,
    },
    {
      keyValue: "M",
      jsx: null,
    },
    {
      keyValue: "%",
      jsx: <span className="keySymbole">ù</span>,
    },
    {
      keyValue: "µ",
      jsx: <span className="keySymbole">*</span>,
    },
    {
      keyValue: 1,
      jsx: <span className="keyIcon emptyEnter"></span>,
    },
  ];
  //   ROW 5
  const keyRow5 = [
    {
      keyValue: 0,
      jsx: (
        <span className="keyIcon">
          <FontAwesomeIcon icon={faUpLong} className="icon" />
        </span>
      ),
    },
    {
      keyValue: ">",
      jsx: <span className="keyIcon">{"<"}</span>,
    },
    {
      keyValue: "W",
      jsx: null,
    },
    {
      keyValue: "X",
      jsx: null,
    },
    {
      keyValue: "C",
      jsx: null,
    },
    {
      keyValue: "V",
      jsx: null,
    },
    {
      keyValue: "B",
      jsx: null,
    },
    {
      keyValue: "N",
      jsx: null,
    },
    {
      keyValue: "?",
      jsx: <span className="keyIcon">,</span>,
    },
    {
      keyValue: ".",
      jsx: <span className="keyIcon">;</span>,
    },
    {
      keyValue: "/",
      jsx: <span className="keyIcon">:</span>,
    },
    {
      keyValue: "§",
      jsx: <span className="keySymbole">!</span>,
    },
    {
      keyValue: 1,
      jsx: (
        <span className="keyIcon">
          <FontAwesomeIcon icon={faUpLong} className="icon" />
        </span>
      ),
    },
  ];
  //   ROW 6
  const keyRow6 = [
    {
      keyValue: "CTRL1",
      jsx: null,
    },
    {
      keyValue: 0,
      jsx: (
        <span className="keyIcon">
          <FontAwesomeIcon icon={faWindows} className="icon" />
        </span>
      ),
    },
    {
      keyValue: "ALT1",
      jsx: null,
    },
    {
      keyValue: 1,
      jsx: (
        <span className="keyIcon space">
          <FontAwesomeIcon icon={faWindowMinimize} className="icon" />
        </span>
      ),
    },
    {
      keyValue: "ALT",
      jsx: null,
    },
    {
      keyValue: "FN",
      jsx: null,
    },
    {
      keyValue: 2,
      jsx: (
        <span className="keyIcon">
          <FontAwesomeIcon icon={faSun} className="icon" />
        </span>
      ),
    },
    {
      keyValue: "CTRL",
      jsx: null,
    },
  ];

  return (
    <div className={`keyboard ${props.keyboardTheme ? "keyboardTheme" : ""}`}>
      <div className="keyRow1">
        {keyRow1.map((key) => (
          <div key={key.keyValue} className="key">
            <span>{key.keyValue}</span>
            {key.jsx}
          </div>
        ))}
      </div>

      <div className="keyRow2">
        {keyRow2.map((key) => (
          <div key={key.keyValue} className="key">
            <span>{key.keyValue}</span>
            {key.jsx}
          </div>
        ))}
      </div>

      <div className="keyRow3">
        {keyRow3.map((key) => (
          <div
            key={key.keyValue}
            className={`key ${
              (key.keyValue === "Z" && props.isZPressed) ||
              (key.keyValue === "E" && props.isEPressed) ||
              (key.keyValue === "A" && props.isAPressed)
                ? "keyEvent"
                : ""
            } ${
              key.jsx && key.jsx.props.className === "keyIcon enter"
                ? "enter"
                : ""
            }`}
          >
            <span>
              {key.keyValue !== 0 && key.keyValue !== 1 ? key.keyValue : null}
            </span>
            {key.jsx}
          </div>
        ))}
      </div>

      <div className="keyRow4">
        {keyRow4.map((key) => (
          <div
            key={key.keyValue}
            className={`key ${
              (key.keyValue === "Q" && props.isQPressed) ||
              (key.keyValue === "S" && props.isSPressed) ||
              (key.keyValue === "D" && props.isDPressed)
                ? "keyEvent"
                : ""
            } ${
              key.jsx && key.jsx.props.className === "keyIcon emptyEnter"
                ? "emptyEnter"
                : ""
            }`}
          >
            <span>
              {key.keyValue !== 0 && key.keyValue !== 1 ? key.keyValue : null}
            </span>
            {key.jsx}
          </div>
        ))}
      </div>

      <div className="keyRow5">
        {keyRow5.map((key) => (
          <div
            key={key.keyValue}
            className={`key ${
              key.keyValue === 0 && props.isShiftPressed ? "keyEvent" : ""
            }`}
          >
            <span>
              {key.keyValue !== 0 && key.keyValue !== 1 ? key.keyValue : null}
            </span>
            {key.jsx}
          </div>
        ))}
      </div>

      <div className="keyRow6">
        {keyRow6.map((key) => (
          <div
            key={key.keyValue}
            className={`key ${
              (key.keyValue === "CTRL1" && props.isCtrlPressed) ||
              (key.keyValue === 1 && props.isSpacePressed)
                ? "keyEvent"
                : ""
            } ${
              key.jsx && key.jsx.props.className === "keyIcon space"
                ? "space"
                : ""
            }
                ${key.keyValue === 2 && props.isSunPressed ? "keyEvent" : ""}`}
          >
            <span>
              {key.keyValue !== 0 && key.keyValue !== 1 && key.keyValue !== 2
                ? key.keyValue === "ALT1"
                  ? "ALT"
                  : key.keyValue === "CTRL1"
                  ? "CTRL"
                  : key.keyValue
                : null}
            </span>
            {key.jsx}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
