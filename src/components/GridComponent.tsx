import { useEffect, useState, useRef } from "react";

interface SymbolData {
  left: number;
  top: number;
  width: number;
  height: number;
  borderRadius: number;
  transform: string;
  backgroundColor: string;
}

const GridComponent: React.FC = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [symbols, setSymbols] = useState<SymbolData[]>([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  // Fixed values (from your latest leva setup)
  const bgColor = "transparent";
  const symbolColor = "#FF8000";
  const gridSpacing = 40;
  const symbolSize = 5;
  const symbolCornerRadius = 50;
  const symbolRotation = 0;
  const mouseRadius = 200;
  const scaleAmount = 5;
  const animationSpeed = 300;
  const filterBlur = 0;
  const filterContrast = 1;
  const isFilterEnabled = false;

  const dist = (point1: [number, number], point2: [number, number]): number => {
    const [x1, y1] = point1;
    const [x2, y2] = point2;
    const dx = x1 - x2;
    const dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy) || 1;
  };

  const handleMouseMove = (e: MouseEvent): void => {
    const rect = gridRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const setGrid = (): void => {
    const grid = gridRef.current;
    if (!grid) return;

    const docWidth = grid.clientWidth;
    const docHeight = grid.clientHeight;

    const gridWidth = Math.max(2, Math.floor(docWidth / gridSpacing));
    const gridHeight = Math.max(2, Math.floor(docHeight / gridSpacing));

    const newSymbols: SymbolData[] = [];

    for (let i = 0; i < gridWidth; i++) {
      for (let j = 0; j < gridHeight; j++) {
        const horizontalSpacing = docWidth / gridWidth;
        const verticalSpacing = docHeight / gridHeight;

        const left = horizontalSpacing / 2 + i * horizontalSpacing;
        const top = verticalSpacing / 2 + j * verticalSpacing;

        newSymbols.push({
          left,
          top,
          width: symbolSize,
          height: symbolSize,
          borderRadius: symbolCornerRadius,
          transform: `scale(1) rotate(${symbolRotation}deg)`,
          backgroundColor: symbolColor,
        });
      }
    }

    setSymbols(newSymbols);
  };

  useEffect(() => {
    setMounted(true);

    const handleResize = (): void => {
      setGrid();
    };

    setTimeout(() => {
      setGrid();
    }, 100);

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousemove", handleMouseMove as EventListener);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener(
        "mousemove",
        handleMouseMove as EventListener,
      );
    };
  }, []);

  useEffect(() => {
    if (mounted) {
      setGrid();
    }
  }, [gridSpacing, symbolSize, symbolRotation, mounted]);

  useEffect(() => {
    let animationFrameId: number;

    const animateSymbols = (): void => {
      const grid = gridRef.current;
      if (!grid) return;

      Array.from(grid.children).forEach((child) => {
        const element = child as HTMLElement;
        if (!element.classList.contains("grid-symbol")) return;

        const rect = element.getBoundingClientRect();
        const gridRect = grid.getBoundingClientRect();

        const symbolX = rect.left - gridRect.left + rect.width / 2;
        const symbolY = rect.top - gridRect.top + rect.height / 2;

        const distance = dist([mouse.x, mouse.y], [symbolX, symbolY]);
        const isClose = distance <= mouseRadius;

        const scale = isClose
          ? scaleAmount - (distance / mouseRadius) * (scaleAmount - 1)
          : 1;

        element.style.transform = `scale(${scale}) rotate(${symbolRotation}deg)`;
        element.style.transitionDuration = `${animationSpeed}ms`;
      });

      animationFrameId = requestAnimationFrame(animateSymbols);
    };

    animateSymbols();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [mouse]);

  return (
    <div className="relative flex h-[800px] w-1/2 items-center justify-center overflow-hidden">
      <div
        ref={gridRef}
        className="relative h-full w-full overflow-hidden"
        style={{
          backgroundColor: bgColor,
          filter: isFilterEnabled
            ? `blur(${filterBlur}px) contrast(${filterContrast})`
            : "none",
        }}
      >
        {symbols.map((symbol, index) => (
          <div
            key={index}
            className="grid-symbol absolute transition-all ease-out"
            style={{
              left: `${symbol.left}px`,
              top: `${symbol.top}px`,
              width: `${symbol.width}px`,
              height: `${symbol.height}px`,
              borderRadius: `${symbol.borderRadius}%`,
              transform: symbol.transform,
              backgroundColor: symbol.backgroundColor,
              marginLeft: `-${symbolSize / 2}px`,
              marginTop: `-${symbolSize / 2}px`,
              transitionDuration: `${animationSpeed}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
