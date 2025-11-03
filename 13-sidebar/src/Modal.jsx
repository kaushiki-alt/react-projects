import React from 'react'
import { useGlobalContext } from './Context'
import { FaTimes } from 'react-icons/fa'

const Modal = () => {
    const { isModalOpen, closeModal } = useGlobalContext()
    return (
        <div>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button className="close modal-close" onClick={closeModal}>
                            <FaTimes/>
                        </button>
                        modal
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal
