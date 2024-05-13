import React from 'react';
import { Modal, Button } from 'react-bootstrap';

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
};

type TodoModalProps = {
    show: boolean;
    todo: Todo | null;
    handleClose: () => void;// props는 함수도 넘겨줄 수 있음
}

const TodoModal: React.FC<TodoModalProps> = ({ show, todo, handleClose }) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Todo 상세정보</Modal.Title>
                </Modal.Header>
                <Modal.Body>{todo?.text}</Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default TodoModal;