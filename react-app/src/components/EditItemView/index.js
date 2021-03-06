import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getItem, updateItem } from "../../store/item";
import { useParams } from "react-router-dom";

import "./EditItemView.css"

const EditItemView = ({ singleItem }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [name, setName] = useState(singleItem?.name);
  const [description, setDescription] = useState(singleItem?.description);
  const [updatedItem, setUpdatedItem] = useState("");

  useEffect(() => {}, [updatedItem]);

  useEffect(() => {
    dispatch(getItem(id));
  }, [dispatch, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const itemId = await singleItem.id;
    const updatedItem = {
      id: itemId,
      name,
      description,
    };
    const itemWithChange = dispatch(updateItem(updatedItem));
    dispatch(getItem(itemId));
    setUpdatedItem(itemWithChange);
  };

  return (
    <div className="item_edit_container">
      <form onSubmit={handleSubmit}>
        <div className="item_edit_col1">
          <input 
            className="item_edit_title" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="item_edit_col2">
          <textarea
            className="item_edit_descript"
            maxLength="250"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="item_edit_col3">
          <div className="item_edit_button_title">edit your item:</div>
          <button type="submit">update</button>
        </div>
      </form>
    </div>
  );
};

export default EditItemView;
