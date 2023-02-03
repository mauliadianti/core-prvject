import React from "react";
import ReactModal from "react-modal";

interface IInputModalProps {
    isModalOpen: boolean;
    onCloseModal: () => void;
    onConfirm: () => void;
}
export const InputModal: React.FC<IInputModalProps> = (props) => {
    const {
        isModalOpen,
        onCloseModal,
        onConfirm,
    } = props;

    return (
        <ReactModal
            isOpen={isModalOpen}
            onAfterClose={onCloseModal}
            onRequestClose={onCloseModal}
        >
            <h2>Contact me by filling forms bellow</h2>
            <p>your email address will privately send to my email address and I will not share it with anyone else</p>
            <form>
                <input />
            </form>
            <button
                onClick={onCloseModal}
            >
                Close
            </button>
            <button
                className='button-primary'
                onClick={onConfirm}
            >
                Send
            </button>
        </ReactModal>
    )
}