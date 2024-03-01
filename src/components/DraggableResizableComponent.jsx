import { Resizable } from 'react-resizable';
import { useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Container } from 'reactstrap';

const DraggableResizableComponent = () => {
  const [width, setWidth] = useState(300); // Initial width of resizable components

  const handleResize = (e, { size }) => {
    setWidth(size.width);
  };

  return (
    <Container>
      <Row style={{ width: "100%", marginBottom: "2rem" }}>
        <Col xl={9} lg={9} md={5} sm={1}></Col>
        <Col xl={3} lg={3} md={7} sm={11}>
          <div>
            <p>Count - {0}</p>
            <p>Number of times APIs called</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={4} lg={4} md={6} sm={12}>
          <Resizable
            width={width}
            height={200}
            onResize={handleResize}
            draggableOpts={{ enableUserSelectHack: false }}
          >
            <Card style={{ border: "2px solid black", margin: "2rem" }}>
              <img alt="Sample" src="https://picsum.photos/300/200" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card‘s content.
                </CardText>
                <Button>Update</Button>
              </CardBody>
            </Card>
          </Resizable>
        </Col>
        <Col xl={4} lg={4} md={6} sm={12}>
          <Resizable
            width={width}
            height={200}
            onResize={handleResize}
            draggableOpts={{ enableUserSelectHack: false }}
          >
            <Card style={{ border: "2px solid black", margin: "2rem" }}>
              <img alt="Sample" src="https://picsum.photos/300/200" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card‘s content.
                </CardText>
                <Button>Update</Button>
              </CardBody>
            </Card>
          </Resizable>
        </Col>
        <Col xl={4} lg={4} md={6} sm={12}>
          <Resizable
            width={width}
            height={200}
            onResize={handleResize}
            draggableOpts={{ enableUserSelectHack: false }}
          >
            <Card style={{ border: "2px solid black", margin: "2rem" }}>
              <img alt="Sample" src="https://picsum.photos/300/200" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card‘s content.
                </CardText>
                <Button>Update</Button>
              </CardBody>
            </Card>
          </Resizable>
        </Col>
      </Row>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
        <Button xl={4} lg={4} md={6} sm={12} style={{ width: "10%" }}>Add</Button>
      </div>
    </Container>
  );
}

export default DraggableResizableComponent;
