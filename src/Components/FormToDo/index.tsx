import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


interface FormToDoProps{
  value: string;
  onChange: (event: any) => void;
}

export default function FormToDo(props: FormToDoProps) {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter your task" value={props.value} onChange={props.onChange} />
      </Form.Group>
    </Form>
  );
}