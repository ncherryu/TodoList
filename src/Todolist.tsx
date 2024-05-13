import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import TodoModal from './TodoModal';
import './Todolist.css';

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
};

const TodoList: React.FC = () => {
    const title: string = '오늘 할 일';
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: '공부하기', isChecked: false },
        { id: 2, text: '잠자기', isChecked: false },
        { id: 3, text: '미팅하기', isChecked: false }
    ]);

    const [newTodo, setNewTodo] = useState<string>('');
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    const handleCheckedChange = (itemId: number) => {
        setTodos(prevItems =>
            prevItems.map(item =>
                item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
            )
        )
    }

    const addTodo = (e: (React.FormEvent<HTMLFormElement> | null)) => {
        e?.preventDefault();
        if (newTodo.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: newTodo, isChecked: false }]);
            setNewTodo('');
        }
    }

    const removeTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const handleTodoClick = (todo: Todo) => {
        setShowDetail(true);
        setSelectedTodo(todo);
    }

    const handleCloseDetail = () => {
        setShowDetail(false);
    }

    return (
        <div>
            <Row>
                <h1>{title}</h1>
            </Row>
            <Form onSubmit={(e) => addTodo(e)} className='my-4'>
                <Row className="justify-content-center">
                    <Col xs={6} className='text-end'>
                        <Form.Control type="text"
                            placeholder="할 일 입력"
                            onChange={(e) => setNewTodo(e.target.value)} value={newTodo} />
                    </Col>
                    <Col xs='auto'>
                        <Button variant='primary' onClick={() => addTodo(null)}>추가</Button>
                    </Col>
                </Row>
            </Form>
            <Container>
                <Row className='board'>
                    <ul>
                        {
                            todos.map(todo => {
                                return (
                                    <li key={todo.id}>
                                        <Row className='align-items-center my-1'>
                                            <Col xs={1} className='text-center'>
                                                <Form.Check onChange={() => handleCheckedChange(todo.id)} />
                                            </Col>
                                            <Col xs={9} onClick={() => handleTodoClick(todo)}>
                                                {
                                                    todo.isChecked ?
                                                        <del>{todo.text}</del> :
                                                        <span>{todo.text}</span>
                                                }
                                            </Col>
                                            <Col xs={2} className='text-end'>
                                                <Button variant='outline-danger' onClick={() => { removeTodo(todo.id) }}>삭제</Button>
                                            </Col>
                                        </Row>
                                    </li>)

                            })
                        }
                    </ul>
                </Row>
            </Container >
            <TodoModal show={showDetail} todo={selectedTodo} handleClose={handleCloseDetail}></TodoModal>
        </div>

    )
}

export default TodoList;