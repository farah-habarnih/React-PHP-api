import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function App() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState(false);
  useEffect(() => {
    axios.get("http://localhost/api/products/fetchAll.php").then((res) => {
      setData(res.data);
    });
  }, [data1]);

  function deleteProduct(id) {
    alert(id);
    axios
      .get("http://localhost/api/products/delete.php?id=" + id)
      .then((result) => {
        setData1(true);
      })
      .catch(() => {
        console.log("http://localhost/api/products/delete.php?id=" + id);
        alert("Error in the Code");
      });
  }
  return (
    <div className="grid-cards">
      {data.map((product) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.img} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{product.price} JD</ListGroupItem>
            <ListGroupItem>{product.stock} In Stock</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link onClick={() => deleteProduct(product.id)}>
              Delete
            </Card.Link>
          </Card.Body>
        </Card>
      ))}
      {/* <div>
        <h3 class="mb-3 text-center">Product Details</h3>
        <table striped bordered hover>
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <Link class=" mr-2" to={`/products/edit/${user.id}`}>
                    <i class="fa fa-edit" aria-hidden="true"></i>
                  </Link>
                  <Link class="" onClick={() => deleteUser(user.id)}>
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
}

export default App;
