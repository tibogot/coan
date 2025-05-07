import { useEffect, useState, useRef, useCallback, useMemo } from "react";

const GridComponent = () => {
  const gridRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Fixed configuration values
  const config = {
    bgColor: "transparent",
    symbolColor: "#FF8000",
    gridSpacing: 40,
    symbolSize: 5,
    symbolCornerRadius: 50,
    symbolRotation: 0,
    mouseRadius: 200,
    scaleAmount: 8,
    animationSpeed: 300,
    filterBlur: 0,
    filterContrast: 1,
    isFilterEnabled: false,
  };

  // Calculate distance between two points
  //@ts-ignore

  const getDistance = useCallback((x1, y1, x2, y2) => {
    const dx = x1 - x2;
    const dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy) || 1;
  }, []);

  // Handle mouse movement
  //@ts-ignore

  const handleMouseMove = useCallback((e) => {
    if (!gridRef.current) return;
    //@ts-ignore

    const rect = gridRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  // Update dimensions on resize
  const updateDimensions = useCallback(() => {
    if (!gridRef.current) return;
    setDimensions({
      //@ts-ignore
      width: gridRef.current.clientWidth,
      //@ts-ignore

      height: gridRef.current.clientHeight,
    });
  }, []);

  // Setup event listeners
  useEffect(() => {
    updateDimensions();

    const handleResize = () => {
      updateDimensions();
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove, updateDimensions]);

  // Generate grid symbols
  const symbols = useMemo(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return [];

    const {
      gridSpacing,
      //  symbolSize
    } = config;
    const gridWidth = Math.max(2, Math.floor(dimensions.width / gridSpacing));
    const gridHeight = Math.max(2, Math.floor(dimensions.height / gridSpacing));

    const horizontalSpacing = dimensions.width / gridWidth;
    const verticalSpacing = dimensions.height / gridHeight;

    const result = [];

    for (let i = 0; i < gridWidth; i++) {
      for (let j = 0; j < gridHeight; j++) {
        const left = horizontalSpacing / 2 + i * horizontalSpacing;
        const top = verticalSpacing / 2 + j * verticalSpacing;

        result.push({ left, top, x: left, y: top });
      }
    }

    return result;
  }, [dimensions, config.gridSpacing, config.symbolSize]);

  // Calculate scales for each symbol based on mouse position
  const symbolStyles = useMemo(() => {
    const {
      mouseRadius,
      scaleAmount,
      symbolSize,
      symbolCornerRadius,
      symbolRotation,
      symbolColor,
    } = config;

    return symbols.map((symbol) => {
      const distance = getDistance(mousePos.x, mousePos.y, symbol.x, symbol.y);
      const isClose = distance <= mouseRadius;
      const scale = isClose
        ? scaleAmount - (distance / mouseRadius) * (scaleAmount - 1)
        : 1;

      return {
        left: `${symbol.left}px`,
        top: `${symbol.top}px`,
        width: `${symbolSize}px`,
        height: `${symbolSize}px`,
        borderRadius: `${symbolCornerRadius}%`,
        backgroundColor: symbolColor,
        transform: `scale(${scale}) rotate(${symbolRotation}deg)`,
        marginLeft: `-${symbolSize / 2}px`,
        marginTop: `-${symbolSize / 2}px`,
        transitionDuration: `${config.animationSpeed}ms`,
      };
    });
  }, [symbols, mousePos, config, getDistance]);

  const containerStyle = {
    backgroundColor: config.bgColor,
    filter: config.isFilterEnabled
      ? `blur(${config.filterBlur}px) contrast(${config.filterContrast})`
      : "none",
  };

  return (
    <div className="relative flex h-[800px] w-1/2 items-center justify-center overflow-hidden select-none">
      <div
        ref={gridRef}
        className="relative h-full w-full overflow-hidden"
        style={containerStyle}
      >
        {symbolStyles.map((style, index) => (
          <div
            key={index}
            className="grid-symbol absolute transition-all ease-out"
            style={style}
          />
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
