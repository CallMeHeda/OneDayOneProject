import { useRef, useState, useCallback } from "react";

export const useDraw = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const lastX = useRef<number | null>(null);
  const lastY = useRef<number | null>(null);

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

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, []);

  return {
    startDrawing,
    stopDrawing,
    clearCanvas,
    canvasRef,
    isDrawing,
    lastX,
    lastY,
  };
};
