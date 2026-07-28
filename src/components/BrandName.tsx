export function BrandName({ light = false }: { light?: boolean }) {
  return (
    <span className="brand">
      <span style={{ color: light ? "#FFFFFF" : "var(--navy)" }}>LOCAL</span>
      <span style={{ color: light ? "var(--red-vivid)" : "var(--red)" }}>CAR</span>
    </span>
  );
}
