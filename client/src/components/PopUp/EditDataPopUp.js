import React, { useState } from "react";

export const EditData = ({ data, onClose }) => {
  const [editedData, setEditedData] = useState(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit edited data
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={editedData.name}
            onChange={(event) =>
              setEditedData({ ...editedData, name: event.target.value })
            }
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            value={editedData.age}
            onChange={(event) =>
              setEditedData({ ...editedData, age: event.target.value })
            }
          />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
      <button onClick={handleClose}>Close</button>
    </div>
  );
};
