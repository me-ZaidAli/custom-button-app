import { useState } from "react";

import { Button } from "./components";
import { ColorPallet } from "./constant";
import { Color } from "./components/Button/type";

function App() {
  const [color, setColor] = useState<Color>("red");

  /** Handler to change button color on click */
  const handleColorChange = () => {
    const currentColorIndex = ColorPallet.findIndex(
      (colorToFind) => color === colorToFind
    );

    const totalColors = ColorPallet.length;

    if (currentColorIndex !== totalColors - 1) {
      setColor(ColorPallet[currentColorIndex + 1]);
    } else {
      setColor(ColorPallet[0]);
    }
  };

  return (
    <Button
      id="color-change"
      color={color}
      variant="solid"
      onClick={handleColorChange}
    >
      Change Color
    </Button>
  );
}

export default App;
