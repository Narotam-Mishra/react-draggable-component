/* eslint-disable react/prop-types */
import { Row, Col, Card, CardBody, CardTitle, CardText, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardCom = ({ ariaOrientation, image, title, description }) => {
  const orientation = "horizontal";
  return (
    <Container>
      <Row>
        <Col xxl={12} xl={11} lg={11} md={11} sm={11}>
          <Card
            style={{ margin: "2rem" }}
            aria-orientation={ariaOrientation || orientation}
          >
            <img
              alt="Sample"
              src={image ? image : "https://picsum.photos/300/200"}
              style={{ objectFit: "cover", width: "100%" }}
            />
            <CardBody>
              <CardTitle tag="h5">{title ? title : "Card Title"}</CardTitle>
              <CardText>
                {description
                  ? description
                  : "Some quick example text to build on the card title and make up the bulk of the card‘s content."}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardCom;
