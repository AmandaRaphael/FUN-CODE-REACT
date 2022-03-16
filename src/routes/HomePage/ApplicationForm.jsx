import {useContext}from "react";
import { Form, Button } from "react-bootstrap";
import MyContext from "../../context/MyContext";
const ApplicationForm = () => {
 const{ formSubmitHandler }=useContext(MyContext)
  return (
    <div>
      <Form className="mb-3 m-5">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            Your Name <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control type="text" placeholder="Enter your Name" required={true}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" required>
          <Form.Label>
            Email address <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Phone number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Enter your Age" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Courses you would like to learn</Form.Label>
          <Form.Check type="checkbox" label="JavaScript" />
          <Form.Check type="checkbox" label="React" />
          <Form.Check type="checkbox" label="HTML" />
          <Form.Check type="checkbox" label="CSS" />
          <Form.Check type="checkbox" label="Python" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={formSubmitHandler}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ApplicationForm;
