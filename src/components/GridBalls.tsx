import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useControls } from "leva";

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
  const gridRef = useRef<HTMLDivElement>(null);
  const [symbols, setSymbols] = useState<SymbolData[]>([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const {
    bgColor,
    gridSpacing,
    symbolSize,
    symbolCornerRadius,
    symbolRotation,
    mouseRadius,
    symbolColor,
  } = useControls({
    bgColor: "#ffffff",
    gridSpacing: { value: 80, min: 30, max: 125, step: 1 },
    symbolSize: { value: 25, min: 1, max: 200, step: 1 },
    symbolCornerRadius: { value: 50, min: 0, max: 100, step: 1 },
    symbolRotation: { value: 0, min: 0, max: 360, step: 1 },
    mouseRadius: { value: 200, min: 1, max: 400, step: 1 },
    symbolColor: "#000000",
  });

  const dist = ([x1, y1]: number[], [x2, y2]: number[]) => {
    const dx = x1 - x2;
    const dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy) || 1;
  };

  const handleMouseMove = (e: MouseEvent) => {
    const rect = gridRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const setGrid = () => {
    const grid = gridRef.current;
    if (!grid) return;

    const docWidth = grid.clientWidth;
    const docHeight = grid.clientHeight;
    const gridWidth = Math.floor(docWidth / gridSpacing);
    const gridHeight = Math.floor(docHeight / gridSpacing);

    const newSymbols: SymbolData[] = [];

    for (let i = 0; i < gridWidth; i++) {
      for (let j = 0; j < gridHeight; j++) {
        newSymbols.push({
          left: (docWidth / (gridWidth + 1)) * (i + 1),
          top: (docHeight / (gridHeight + 1)) * (j + 1),
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

  const animateSymbols = () => {
    const grid = gridRef.current;
    if (!grid) return;
    //@ts-ignore

    Array.from(grid.children).forEach((el, index) => {
      const element = el as HTMLElement;
      const rect = element.getBoundingClientRect();
      const symbolX = rect.left + rect.width / 2;
      const symbolY = rect.top + rect.height / 2;

      if (dist([mouse.x, mouse.y], [symbolX, symbolY]) <= mouseRadius) {
        element.classList.add("is-active");
      } else {
        element.classList.remove("is-active");
      }
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setGrid();
    };

    setGrid();
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousemove", handleMouseMove);
    gsap.ticker.add(animateSymbols);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(animateSymbols);
    };
  }, [
    gridSpacing,
    symbolSize,
    symbolCornerRadius,
    symbolRotation,
    mouseRadius,
    symbolColor,
    bgColor,
  ]);

  return (
    <div
      ref={gridRef}
      className="relative h-full w-full overflow-hidden"
      style={{
        backgroundColor: bgColor,
        filter: "blur(10px) contrast(20)",
      }}
    >
      {symbols.map((symbol, index) => (
        <div
          key={index}
          className="absolute transition-all duration-[1500ms] ease-out"
          style={{
            left: `${symbol.left}px`,
            top: `${symbol.top}px`,
            width: `${symbol.width}px`,
            height: `${symbol.height}px`,
            borderRadius: `${symbol.borderRadius}%`,
            transform: symbol.transform,
            backgroundColor: symbol.backgroundColor,
          }}
        />
      ))}
    </div>
  );
};

export default GridComponent;
