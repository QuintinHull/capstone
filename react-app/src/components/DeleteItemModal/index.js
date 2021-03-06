import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Delete from './Delete';

import "./DeleteItemModal.css"

function DeleteItemModal({ singleItem }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="delete_open_modal" onClick={() => setShowModal(true)}>remove</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Delete singleItem={singleItem}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteItemModal;