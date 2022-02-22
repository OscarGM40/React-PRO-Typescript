/// <reference types="react" />
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
declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor, }: LabelProps) => JSX.Element;
export { MyLabel };
