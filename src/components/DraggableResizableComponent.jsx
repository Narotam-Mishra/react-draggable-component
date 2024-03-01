/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Resizable } from "react-resizable";

const DraggableResizableComponent = ({ id, children, width, height }) => {
  const [size, setSize] = useState({ width, height });

  const onResize = (event, { size: { width, height } }) => {
    setSize({ width, height });
  };

  const props = useSpring(size);

  return (
    <animated.div style={props}>
      <Resizable onResize={onResize} width={size.width} height={size.height} draggableOpts={{ grid: [12, 12] }}>
        <div id={id} draggable="true">
          {children}
        </div>
      </Resizable>
    </animated.div>
  );
};

export default DraggableResizableComponent;
