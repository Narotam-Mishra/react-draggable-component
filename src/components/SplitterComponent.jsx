/* eslint-disable react/prop-types */
import { useState } from "react";
import { cn } from "../utils/cn";

const SplitterComponent = ({ id = "drag-bar", dir, isDragging, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      id={id}
      data-testid={id}
      tabIndex={0}
      className={cn(
        "sample-drag-bar",
        dir === "horizontal" && "sample-drag-bar--horizontal" || dir === "vertical" && "sample-drag-bar--vertical",
        (isDragging || isFocused) && "sample-drag-bar--dragging"
      )}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  );
};

export default SplitterComponent;


