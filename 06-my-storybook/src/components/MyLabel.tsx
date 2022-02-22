import "./myLabel.css";

export interface LabelProps {
  /** 👇 propiedad para establecer el texto del componente */
  label: string;
  /** Establecer el tamaño del label */
  size: "normal" | "h1" | "h2" | "h3";
  /** establecer mayusculas */
  allCaps?: boolean;
  /** establecer color de la fuente */
  color?: "primary" | "secondary" | "tertiary";
  /** establecer color mediante selector */
  fontColor?: string;
  /** establecer color mediante selector */
  backgroundColor?: string;
}
/**
 * Etiqueta hyper-complicada
 */
const MyLabel = ({
  label = "No Label",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor,
  backgroundColor = "transparent",
}: LabelProps) => {
  return (
    <span
      className={`label ${size} text-${color} ${allCaps ? "uppercase" : ""} `}
      style={{ color: fontColor, backgroundColor }}
    >
      {label}
    </span>
  );
};

export { MyLabel };
