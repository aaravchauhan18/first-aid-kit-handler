import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';


const Add = () => {
  const medicines = {
    medicine: '',
    desc: '',
    quantity: '',
    expiry: '',
  };

  const [medicine, setMedicine] = useState(medicines);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setMedicine({ ...medicine, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post('http://localhost:8000/api/create', medicine)
      .then((response) => {
        toast.success(response.data.msg, { position: 'top-right' });
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mt-4">
      <Link to={'/'} className="btn btn-secondary">
        Back
      </Link>
      <h3 className="mt-3">Add new medicine</h3>
      <form className="mt-3" onSubmit={submitForm}>
        <div className="mb-3">
          <label htmlFor="medicine" className="form-label">
            Medicine Name
          </label>
          <input
            type="text"
            className="form-control"
            id="medicine"
            name="medicine"
            autoComplete="off"
            placeholder="Medicine Name"
            onChange={inputHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Medicine Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            name="desc"
            autoComplete="off"
            placeholder="Medicine Description"
            onChange={inputHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Medicine Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
            autoComplete="off"
            placeholder="Quantity"
            onChange={inputHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="expiry" className="form-label">
            Expiry Date
          </label>
          <input
            type="date"
            className="form-control"
            id="expiry"
            name="expiry"
            autoComplete="off"
            placeholder="Expiry Date"
            onChange={inputHandler}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            ADD MEDICINE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
