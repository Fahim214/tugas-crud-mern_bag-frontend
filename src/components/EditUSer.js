import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [imageurl, setImageurl] = useState("")

  const navigate = useNavigate();
  const {id} = useParams()

  useEffect(() => {
      getUserById()
  }, [])

  const getUserById = async () => {
      const res = await axios.get(`http://localhost:3008/users/${id}`)
      setName(res.data.name)
      setEmail(res.data.email)
      setGender(res.data.gender)
      setImageurl(res.data.imageurl)
  }

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3008/users/${id}`, {
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
        <Form onSubmit={updateUser}>
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
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditUser;
