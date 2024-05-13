import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
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
    ]); // 바인딩된 데이터가 변경되면 자동으로 재랜더링해줌

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
            <h1>{title}</h1>
            <p></p>
            <div className='container'>
                <form action="" onSubmit={(e) => addTodo(e)}>
                    <input type="text"
                        placeholder='할 일 입력'
                        style={{ marginRight: '10px', writingMode: 'horizontal-tb' }}
                        onChange={(e) => setNewTodo(e.target.value)} value={newTodo} />
                    {/* <Form.Control type="text" placeholder="Normal text" className='w-75' /> */}
                    <Button variant='primary' onClick={() => addTodo(null)}>추가</Button>
                </form>
                <p></p>
                <div className='board'>
                    <ul>
                        {
                            todos.map(todo =>
                                <li key={todo.id}>
                                    <input type="checkbox" className='checkbox'
                                        onChange={() => handleCheckedChange(todo.id)} />
                                    <span onClick={() => handleTodoClick(todo)}>
                                        {
                                            todo.isChecked ?
                                                <del>{todo.text}</del> :
                                                <span>{todo.text}</span>
                                        }
                                    </span>
                                    <button className='delbutton' onClick={() => { removeTodo(todo.id) }}>삭제</button>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
            <TodoModal show={showDetail} todo={selectedTodo} handleClose={handleCloseDetail}></TodoModal>
        </div>

    )
}

export default TodoList;