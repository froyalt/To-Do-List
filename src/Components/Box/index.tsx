import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormToDo from '../FormToDo';
import {Form, Button} from 'react-bootstrap'
import TaskContainer from '../TaskContainer';
import TaskItem from '../TaskItem';
import { useState } from 'react';
import "./style.css"


// interface BoxProps{
//   children: JSX.Element;
// }

interface Task {
  title: string;
  done: boolean;
  remove: boolean;
}


export default function Box() {
  
  const [task, setTask] = useState<Task[]>([]);

  const [taskTitle, setTaskTitle] = useState<string>("")

  function addTask(){
    setTask([...task, 
      {
      title: taskTitle,
      done: false,
      remove: false,
      },
    ]);
    // reseting the input to empty string
    setTaskTitle("")
  }

  function finishTask(position: number){
    const newList = [...task];

    newList[position].done = true;

    setTask(newList);
  }

  function removeTask(position: number){
    const newList = [...task];
    newList[position].remove = true;
    setTask(newList)
  }


  return (
    // add fluid? 
    <>
    <Container id="view-width" fluid className='bg-info rounded-2 my-2 mt-3'>
      <Row>
        <Col className='text-center my-2'><h2>To Do List</h2></Col>
      </Row>
      <Row>
        <Col className='col-12 col-lg-9 '><FormToDo value={taskTitle} onChange={(event) => setTaskTitle(event.target.value) } /></Col>
        <Col className=' m-auto mb-3 col-12 col-sm-6 col-lg-3'><Form.Group>
                    <Form.Control
                      className="btn btn-primary text-center"
                      value="Add"
                      onClick={addTask}
                    />
                  </Form.Group></Col>
      </Row>
    </Container>
    <Container id="view-width" fluid className='bg-info rounded-2 my-2'>
      <Row>
        <Col className='text-center my-2 mb-5'><h2>Tasks</h2></Col>
      </Row>
      <Row className=''>
        <Col className='col-12 text-center'>
          <TaskContainer>

            {task.map((tasks: Task, position: number) => {
                return(
                  <TaskItem title={tasks.title} done={tasks.done} finishTask={ () => finishTask(position) } remove={tasks.remove} removeTask={ () => removeTask(position) } />
                )
              })
            }
          </TaskContainer></Col>
      </Row>
      
    </Container>
    
    </>
  );
}