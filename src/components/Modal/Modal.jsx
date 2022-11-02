import cl from './Modal.module.css';

import deleteXButton from '../../icons/deleteXButton.png';

const Modal = ({ isModalOpen, showModal, clearAllTodos }) => {
    return (
        <div className={`${cl.modal} ${isModalOpen && cl.active}`}>
            <div className={cl.modalContent}>
                <img src={deleteXButton} alt='delete' />
                <h1>Are you sure?</h1>
                <p>Do you really want to remove all todos?</p>
                <div className={cl.innerButtonsWrapper}>
                    <button onClick={() => clearAllTodos()}>Yes, I do!</button>
                    <button onClick={() => showModal(false)}>No, I don't!</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
