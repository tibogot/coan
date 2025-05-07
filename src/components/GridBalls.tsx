import { useEffect, useState, useRef } from "react";
// import { gsap } from "gsap";
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
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [symbols, setSymbols] = useState<SymbolData[]>([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  // More visible default values with all controls
  const controls = useControls({
    // Visual settings
    bgColor: "#121212",
    symbolColor: "#39FF14",

    // Grid settings
    gridSpacing: { value: 80, min: 30, max: 200, step: 1 },
    symbolSize: { value: 40, min: 1, max: 200, step: 1 },
    symbolCornerRadius: { value: 50, min: 0, max: 100, step: 1 },
    symbolRotation: { value: 0, min: 0, max: 360, step: 1 },

    // Interaction settings
    mouseRadius: { value: 200, min: 1, max: 600, step: 10 },
    scaleAmount: { value: 1.5, min: 1, max: 3, step: 0.1 },
    animationSpeed: { value: 300, min: 100, max: 1000, step: 50 },

    // Filter settings
    filterBlur: { value: 0, min: 0, max: 20, step: 0.5 },
    filterContrast: { value: 1, min: 1, max: 20, step: 0.5 },
    isFilterEnabled: false,
  });

  // Destructure for easier use
  const {
    bgColor,
    symbolColor,
    gridSpacing,
    symbolSize,
    symbolCornerRadius,
    symbolRotation,
    mouseRadius,
    scaleAmount,
    animationSpeed,
    filterBlur,
    filterContrast,
    isFilterEnabled,
  } = controls;

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
    console.log("Setting up grid");
    const grid = gridRef.current;
    if (!grid) return;

    // Log dimensions to debug
    console.log("Grid dimensions:", {
      width: grid.clientWidth,
      height: grid.clientHeight,
    });

    const docWidth = grid.clientWidth;
    const docHeight = grid.clientHeight;

    // Calculate number of grid points based on spacing
    const gridWidth = Math.max(2, Math.floor(docWidth / gridSpacing));
    const gridHeight = Math.max(2, Math.floor(docHeight / gridSpacing));

    console.log(`Grid points: ${gridWidth}×${gridHeight}`);

    const newSymbols: SymbolData[] = [];

    // Create the grid points with proper spacing
    for (let i = 0; i < gridWidth; i++) {
      for (let j = 0; j < gridHeight; j++) {
        // Calculate position with proper spacing and margins
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

    console.log(`Created ${newSymbols.length} symbols`);
    setSymbols(newSymbols);
  };

  useEffect(() => {
    console.log("Component mounted");
    setMounted(true);

    const handleResize = (): void => {
      setGrid();
    };

    // Delay the initial setup to ensure container is properly measured
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

  // Re-run setGrid when relevant props change
  useEffect(() => {
    if (mounted) {
      setGrid();
    }
  }, [gridSpacing, symbolSize, symbolRotation, mounted]);

  // Create animation effect
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

        // Calculate position relative to grid
        const symbolX = rect.left - gridRect.left + rect.width / 2;
        const symbolY = rect.top - gridRect.top + rect.height / 2;

        const distance = dist([mouse.x, mouse.y], [symbolX, symbolY]);
        const isClose = distance <= mouseRadius;

        // Calculate scale based on distance
        const scale = isClose
          ? scaleAmount - (distance / mouseRadius) * (scaleAmount - 1)
          : 1;

        // Set the transform with both rotation and scale
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
  }, [mouse, mouseRadius, symbolRotation, scaleAmount, animationSpeed]);

  return (
    <div className="relative flex h-[800px] w-1/2 items-center justify-center overflow-hidden p-10">
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
