import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [imageurl, setImageurl] = useState("")

  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3008/users", {
        name,
        email,
        gender,
        imageurl,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-4">
      <div className="column is-half">
          <div>
              <Link to="/" className="button is-success mb-4">Kembali</Link>
          </div>
        <Form onSubmit={saveUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Select
            className="mb-3"
            aria-label="Default select example"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Select>
          <Form.Group className="mb-4">
            <Form.Label>Url Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Image Url"
              value={imageurl}
              onChange={(e) => setImageurl(e.target.value)}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddUser;
