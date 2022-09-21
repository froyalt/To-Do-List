import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function FormToDo() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter your task" />
      </Form.Group>
    </Form>
  );
}