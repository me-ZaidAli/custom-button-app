import { Color, Variant } from "./type";

export const VariantClasses = (color: Color, variant: Variant) => {
  switch (variant) {
    case "solid":
      return `bg-${color}-500 hover:bg-${color}-600 text-white`;
    case "outlined":
      return `outline outline-solid outline-4 outline-${color}-600 text-black hover:text-white hover:bg-${color}-600`;
  }
};
