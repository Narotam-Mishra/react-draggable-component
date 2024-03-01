import { useState } from 'react';
import { Resizable } from 'react-resizable';
import './styles/TestCom.css'; // Import CSS for styling

const ResizableLayout = () => {
  const [sizes, setSizes] = useState([700, 700, 700]); // Initial sizes for the components

  const handleResize = (index, _, { size }) => {
    const newSizes = [...sizes];
    newSizes[index] = size.width;
    setSizes(newSizes);
  };

  return (
    <div className="resizable-layout">
      {sizes.map((size, index) => (
        <Resizable
          key={index}
          width={size}
          height={300} // Set the initial height for all components
          onResize={(event, data) => handleResize(index, event, data)}
          draggableOpts={{ enableUserSelectHack: false }}
        >
          <div className="resizable-component">
            {/* Add your content for each component here */}
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              perspiciatis ea mollitia aliquam cumque quisquam maxime ex quos
              quo cum. Omnis, deleniti minus libero assumenda neque quae quia
              molestias est dolorem nulla molestiae hic beatae unde autem, nobis
              culpa facere pariatur exercitationem error? Deserunt
              exercitationem voluptas voluptates quam distinctio illum
              molestias. Quis earum totam dolorum laudantium voluptatem sit
              voluptas veniam laborum? Aliquam, explicabo magnam odit alias
              optio commodi ea! Animi aspernatur expedita soluta esse molestiae
              sint fugit dolore consectetur placeat sequi dolores, excepturi
              iusto nobis omnis repellendus corporis illo facilis praesentium
              quo dolor voluptate? Iusto debitis vitae officia rem totam.
            </p>
            Component {index + 1}
          </div>
        </Resizable>
      ))}
    </div>
  );
};

export default ResizableLayout;
