import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


const Medicine = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8000/api/getall');
      setMedicines(response.data);
    };

    fetchData();
  }, []);

  const deleteMedicine = async (medicineId) => {
    await axios
      .delete(`http://localhost:8000/api/delete/${medicineId}`)
      .then((response) => {
        setMedicines((prevMedicine) => prevMedicine.filter((medicine) => medicine._id !== medicineId));
        toast.success(response.data.msg, { position: 'top-right' });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);

    // Convert the date to DD-MM-YYYY format
    const [day, month, year] = formattedDate.split('/');
    return `${month}-${day}-${year}`;
  };

  return (
    
    <div className="container mt-4">
      <Link to={'/add'} className="btn btn-primary mb-3">
        Add Medicine
      </Link>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>S.No.</th>
            <th>Medicine</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Expiry Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine, index) => (
            <tr key={medicine._id}>
              <td>{index + 1}</td>
              <td>{medicine.medicine}</td>
              <td>{medicine.desc}</td>
              <td>{medicine.quantity}</td>
              <td>{formatDate(medicine.expiry)}</td>
              <td className="actionButtons">
                <button onClick={() => deleteMedicine(medicine._id)} className="btn btn-danger">
                  Delete
                </button>
                <Link to={`/edit/` + medicine._id} className="btn btn-primary ml-2">                  
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Medicine;
