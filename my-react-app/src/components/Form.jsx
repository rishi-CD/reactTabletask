import { useState, useEffect } from 'react';
import './form.css';

function SportsForm() {
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    sport: ''
  });

  const [sub, setsub] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem('sportsForm');
    if (savedData) {
      setsub(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

   const newSub = {
      ...inputs,
    };

    const updatedSub = [...sub, newSub];
    setsub(updatedSub);

    localStorage.setItem('sportsForm', JSON.stringify(updatedSub));
    setInputs({
      name: '',
      description: '',
      sport: ''
    });

    console.log('All sub:', updatedSub);
  };

  return (
    <div className="form-container">
      <h2>Sports Information Form</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            required/>
        </div>

        <div className="form-group">
          <label>Sport:</label>
          <input
            type="text"
            name="sport"
            value={inputs.sport}
            onChange={handleChange}
            required/>
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={inputs.description}
            onChange={handleChange}
            required/>
        </div>

        <center>
          <button type="submit" className="submit-btn">
            Add Item
          </button>
        </center>
      </form>

    </div>
  );
}

export default SportsForm;

