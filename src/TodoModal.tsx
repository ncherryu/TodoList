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
                {/* todo에 값이 존재하면 todo, undefined면 렌더링하지 않겠다는 의미 */}
            </Modal>
        </div>
    )
}

export default TodoModal;