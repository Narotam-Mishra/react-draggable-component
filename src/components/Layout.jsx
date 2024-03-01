import { useState } from "react";
import ReactGridLayout, { WidthProvider } from "react-grid-layout";
import DraggableResizableComponent from "./DraggableResizableComponent";
import './styles/Layout.css'

const layout = [
  { i: "a", x: 0, y: 0, w: 1, h: 2 },
  { i: "b", x: 1, y: 0, w: 2, h: 1 },
  { i: "c", x: 1, y: 1, w: 1, h: 1 },
];

const Layout = () => {
  const [layoutState, setLayoutState] = useState(layout);

  const onResize = (layout, oldItem, newItem) => {
    setLayoutState((prevState) => ({
      ...prevState,
      [newItem.i]: { ...newItem },
    }));
  };

  return (
    <WidthProvider widthBreakpoint={1200} minWidth={992} onLayoutChange={onResize}>
      <ReactGridLayout
        className="layout"
        layout={layoutState}
        cols={12}
        rowHeight={50}
        onLayoutChange={onResize}
      >
        <div key="a">
          <DraggableResizableComponent id="a">
            <h3>Component A</h3>
            <p>This is the content of component A.</p>
          </DraggableResizableComponent>
        </div>
        <div key="b">
          <DraggableResizableComponent id="b">
            <h3>Component B</h3>
            <p>This is the content of component B.</p>
          </DraggableResizableComponent>
        </div>
        <div key="c">
          <DraggableResizableComponent id="c">
            <h3>Component C</h3>
            <p>This is the content of component C.</p>
          </DraggableResizableComponent>
        </div>
      </ReactGridLayout>
    </WidthProvider>
  );
};

export default Layout;
