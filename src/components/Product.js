import axios from "axios";
import { useEffect, useState } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import "./Product.css";
import { BsTag, BsShare } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
function Product() {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/product").then((result) => {
      setListProduct(result.data);
    });
  }, []);
  console.log(listProduct);

  return (
    <div>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {listProduct.map((item, index) => (
            <Col>
              <Card className="listWisata" style={{ borderRadius: "10px" }}>
                <Card.Img
                  variant="top"
                  src={item.cover}
                  className="imgProduct"
                  style={{
                    borderRadius: "10px",
                    width: "90%",
                    margin: "20px auto",
                  }}
                />
                <Card.Body>
                  <Card.Title className="title" style={{ textAlign: "left" }}>
                    {item.title}
                  </Card.Title>
                  <Card.Text className="text" style={{ textAlign: "left" }}>
                    {item.summary}
                  </Card.Text>
                  <div className="icons">
                    <span style={{ fontSize: "13px" }}>{item.likes}</span>
                    <FaRegHeart
                      style={{
                        margin: "8px",
                        fontSize: "21px",
                      }}
                    />
                    <BsTag style={{ margin: "8px", fontSize: "21px" }} />
                    <BsShare style={{ margin: "8px", fontSize: "21px" }} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Product;
