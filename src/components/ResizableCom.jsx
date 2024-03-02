import SplitterComponent from "./SplitterComponent";
import { useResizable } from "react-resizable-layout";
import { cn } from "../utils/cn";
import CardCom from "./CardCom";
import { Button } from 'reactstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ResizableCom = () => {

  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [apiCounter, setApiCounter] = useState(0);

  const handleAddButtonClick = async () => {
    try {
      const response = await axios.get('http://localhost:7373/api/v1/add');
      console.log(response);
      setImage(response.data.url);
      setDescription(response.data.description);

      // Fetch API counter after successful Update button click
      fetchApiCounter();
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  };

  const handleUpdateButtonClick = async () => {
    try {
      const response = await axios.patch('http://localhost:7373/api/v1/updateData');
      console.log(response);
      setTitle(response.data.randomString);

      // Fetch API counter after successful Update button click
      fetchApiCounter();
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  };

  // Function to fetch API counter data
  const fetchApiCounter = async () => {
    try {
      const response = await fetch('http://localhost:7373/api/v1/getCount');
      const data = await response.json();
      setApiCounter(data.count);
    } catch (error) {
      console.error('Error fetching API counter data:', error);
    }
  };

  useEffect(() => {
    fetchApiCounter();
  }, [])
  
  const {
    isDragging: isFileDragging,
    position: fileW,
    separatorProps: fileDragBarProps,
  } = useResizable({
    axis: "x",
    initial: 500,
    min: 50,
  });
  const {
    isDragging: isPluginDragging,
    position: pluginW,
    separatorProps: pluginDragBarProps,
  } = useResizable({
    axis: "x",
    initial: 500,
    min: 50,
    reverse: true,
  });
  const {
    isDragging: isTopDragging,
    position: topH,
    separatorProps: topDragBarProps,
  } = useResizable({
    axis: "y",
    initial: 200, // Adjusted initial height
    min: 50,
    reverse: true,
  });

  return (
    <div className={"flex flex-column h-screen bg-dark font-mono color-white overflow-hidden"}>
      <div style={{ textAlign: "center" }}>
        <h2>API Call Counter: {apiCounter}</h2>
      </div>
      <div className={"flex grow"}>
        <div className={cn("shrink-0 contents", isTopDragging && "dragging")} style={{ height: topH }}>
          <SplitterComponent isDragging={isTopDragging} {...topDragBarProps} />
        </div>
        <div className={cn("shrink-0 contents", isFileDragging && "dragging")} style={{ width: fileW }}>
          <CardCom ariaOrientation="horizontal" image={image} title={title} description={description}/>
        </div>
        <SplitterComponent isDragging={isFileDragging} {...fileDragBarProps} />
        <div className={"flex grow"}>
          <div className={"grow bg-darker contents"}>
            <CardCom ariaOrientation="horizontal" image={image} title={title} description={description}/>
          </div>
          <SplitterComponent isDragging={isPluginDragging} {...pluginDragBarProps} />
          <div className={cn("shrink-0 contents", isPluginDragging && "dragging")} style={{ width: pluginW }}>
            <CardCom ariaOrientation="horizontal" image={image} title={title} description={description}/>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem", gap:"15px"}}>
        <Button color='danger' xxl={12} xl={11} lg={11} md={11} sm={11} style={{ width: "12%" }} onClick={handleAddButtonClick}>Add</Button>
        <Button color='primary' xxl={12} xl={11} lg={11} md={11} sm={11} style={{ width: "12%" }} onClick={handleUpdateButtonClick}>Update</Button>
      </div>
    </div>
  );
};

export default ResizableCom;
