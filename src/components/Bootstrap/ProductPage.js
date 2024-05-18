import React, { useState } from "react";
import { Card, Button, Modal, Container, Row, Col } from "react-bootstrap";

// Giả sử đây là dữ liệu sản phẩm
const products = [
  {
    id: 1,
    name: "Sản phẩm 1",
    description: "Mô tả sản phẩm 1",
    price: "100.000 VND",
    imageUrl: "đường dẫn hình ảnh sản phẩm 1",
  },
  // Thêm các sản phẩm khác tại đây
];

const ProductPage = () => {
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    console.log("asdasd");
    setSelectedProduct(product);
    setShow(true);
  };

  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary" onClick={() => handleShow(product)}>
                  Thêm vào giỏ hàng
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal chi tiết sản phẩm */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedProduct.description}</p>
          <p>Giá: {selectedProduct.price}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Thêm vào giỏ hàng
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProductPage;
