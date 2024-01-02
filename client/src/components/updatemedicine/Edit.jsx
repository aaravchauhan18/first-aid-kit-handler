import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Edit = () => {
  const medicines = {
    medicine: '',
    desc: '',
    quantity: '',
    expiry: '',
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [medicine, setMedicine] = useState(medicines);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setMedicine({ ...medicine, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getone/${id}`)
      .then((response) => {
        setMedicine(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/api/update/${id}`, medicine)
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
      <h3 className="mt-3">Update Medicine</h3>
      <form className="mt-3" onSubmit={submitForm}>
        <div className="mb-3">
          <label htmlFor="medicine" className="form-label">
            Medicine Name
          </label>
          <input
            type="text"
            value={medicine.medicine}
            onChange={inputChangeHandler}
            id="medicine"
            name="medicine"
            className="form-control"
            autoComplete="off"
            placeholder="Medicine Name"
            disabled
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Medicine Description
          </label>
          <input
            type="text"
            value={medicine.desc}
            onChange={inputChangeHandler}
            id="desc"
            name="desc"
            className="form-control"
            autoComplete="off"
            placeholder="Medicine Description"
            disabled
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Medicine Quantity
          </label>
          <input
            type="number"
            value={medicine.quantity}
            onChange={inputChangeHandler}
            id="quantity"
            name="quantity"
            className="form-control"
            autoComplete="off"
            placeholder="Quantity"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="expiry" className="form-label">
            Expiry Date
          </label>
          <input
            type="text"
            value={medicine.expiry}
            onChange={inputChangeHandler}
            id="expiry"
            name="expiry"
            className="form-control"
            autoComplete="off"
            placeholder="Expiry Date"
            disabled
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            UPDATE MEDICINE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
