type Props = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

export const CustomCursor = ({ x = 0, y = 0, width = 0, height = 0 }: Props) => {
  const offset = 8;

  return (
    <rect
      x={x - offset}
      y={y}
      width={width}
      height={height}
      style={{ fill: "rgba(156, 163, 175, 0.25)" }}
      rx={12}
      ry={12}
    />
  );
};
