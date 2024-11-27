import { useMemo, MouseEvent, ReactNode } from "react";

import { Color, Variant } from "./type";
import { VariantClasses } from "./utils";
import { BaseButtonClasses } from "./constant";

interface ButtonProps {
  id?: string;
  children?: ReactNode;
  color?: Color;
  variant?: Variant;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

/**
 Button component with custom color and variant options
 * @param {bool} id Id to uniquely identify button
 * @param {function} children Children component you want to render inside button
 * @param {function} color Button color in-case of different variant types
 * @param {function} variant Different variant styles to render
 * @param {function} onClick Click action handler
 */

const Button = ({
  id = "button",
  children = "",
  color = "red",
  variant = "solid",
  onClick = () => {},
}: ButtonProps) => {
  const currentVariantClasses = useMemo(() => {
    return VariantClasses(color, variant);
  }, [color, variant]);

  return (
    <button
      id={id}
      className={`${currentVariantClasses} ${BaseButtonClasses}`}
      data-testid={id}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
