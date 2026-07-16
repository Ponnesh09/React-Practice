import React, { useState } from "react";

const FormTwo = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    isAdmin: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formData);
        }}
      >
        <label>
          User Name
          <input
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          If your Admin then click checkbox
          <input
            name="isAdmin"
            type="checkbox"
            checked={formData.isAdmin}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default FormTwo;
