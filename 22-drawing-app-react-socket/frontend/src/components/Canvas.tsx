import { useState, useCallback, MouseEvent, useRef } from "react";
export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const lastX = useRef<number | null>(null);
  const lastY = useRef<number | null>(null);

  const [color, setColor] = useState<string>("#000");
  const [brushSize, setBrushSize] = useState<number>(3);

  // useCallback : mémorise la fonction et la garde inchangée
  // entre les rendus tant que ses dépendances ne changent pas
  // ameliore les performance
  const startDrawing = useCallback(() => {
    setIsDrawing(true);
  }, []);

  const stopDrawing = useCallback(() => {
    setIsDrawing(false);
    lastX.current = null;
    lastY.current = null;
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.beginPath();
      }
    }
  }, []);

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

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="flex flex-col w-screen">
      <div className="flex justify-center">
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

        <div className="flex flex-col justify-between">
          <div className="btnClear">
            <button
              type="button"
              className="bg-red-600 p-2 rounded-md uppercase text-gray-100 font-semibold ml-4 mb-6 font-cursive"
              onClick={clearCanvas}
            >
              Clear canvas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
