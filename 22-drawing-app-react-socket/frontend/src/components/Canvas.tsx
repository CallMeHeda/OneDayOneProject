import { useDraw } from "../hooks/useDraw";
import { useState, useCallback, MouseEvent, ChangeEvent } from "react";

import { CirclePicker } from "react-color";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

library.add(faEraser);

const Canvas = () => {
  const {
    startDrawing,
    stopDrawing,
    clearCanvas,
    canvasRef,
    isDrawing,
    lastX,
    lastY,
  } = useDraw();

  const [color, setColor] = useState<string>("#000");

  const customColors = [
    "#4D4D4D",
    "#FFFFFF",
    "#FCDC00",
    "#DBDF00",
    "#A4DD00",
    "#68CCCA",
    "#73D8FF",
    "#AEA1FF",
    "#FDA1FF",
    "#F44E3B",
    "#FE9200",
    "#333333",
    "#808080",
    "#cccccc",
    "#D33115",
    "#E27300",
    "#FCC400",
    "#B0BC00",
    "#68BC00",
    "#16A5A5",
    "#009CE0",
    "#7B64FF",
    "#FA28FF",
    "#000000",
    "#666666",
    "#B3B3B3",
    "#9F0500",
    "#C45100",
    "#FB9E00",
    "#808900",
    "#194D33",
    "#0C797D",
    "#0062B1",
    "#653294",
    "#AB149E",
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#607d8b",
  ];
  const customColor = customColors.map((color) => color);

  const [brushSize, setBrushSize] = useState<number>(3);

  const handleBrushSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBrushSize(parseInt(e.target.value, 10));
  };

  const handleChangeColor = (color: { hex: string }) => {
    setColor(color.hex);
  };

  const draw = useCallback(
    (e: MouseEvent) => {
      if (!isDrawing) return;
      const canvas = canvasRef.current;
      if (!canvasRef.current?.toDataURL()) return;

      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (lastX.current !== null && lastY.current !== null) {
          ctx.strokeStyle = color;
          ctx.lineWidth = brushSize;

          ctx.beginPath();
          ctx.moveTo(lastX.current, lastY.current);
          ctx.lineTo(x, y);
          ctx.stroke();
        }

        lastX.current = x;
        lastY.current = y;
      }
    },
    [canvasRef, color, isDrawing, brushSize, lastX, lastY]
  );

  return (
    <div className="flex flex-col w-screen canvasContainer">
      <div className="flex justify-center canvasAndColors">
        <div className="flex mt-7 canvas">
          <canvas
            id="canvas"
            width="1500"
            height="800"
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseUp={stopDrawing}
            onMouseMove={draw}
            className="border border-solid border-gray-500 bg-slate-50"
          ></canvas>
        </div>

        <div className="flex flex-col justify-between colors-clear">
          <div className="self-start mt-10 ml-4 colorPicker">
            <CirclePicker
              colors={customColor}
              color={color}
              onChangeComplete={handleChangeColor}
            />
            <div className="mt-8 brushSize">
              <input
                type="range"
                min="1"
                max="20"
                value={brushSize}
                onChange={handleBrushSizeChange}
              />
            </div>
          </div>

          <div className="btnClear">
            <button
              type="button"
              className="bg-red-600 p-2 rounded-md uppercase text-gray-100 font-semibold ml-4 mb-6 font-cursive"
              onClick={clearCanvas}
            >
              Clear canvas
              <span className="text-gray-900">
                <FontAwesomeIcon icon={faEraser} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
