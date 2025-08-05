import { useState, useEffect } from 'react';
import './Tabls.css';

function SportsList() {
  const [sportsData, setSportsData] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [showAll, setShowAll] = useState(false);
  const Count = 5;

  useEffect(() => {
    const savedData = localStorage.getItem('sportsForm');
    if (savedData) {
      setSportsData(JSON.parse(savedData));
    }
  }, []);

  const handleCheckboxChange = (index) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  const handleDelete = (id) => {
  const newData = sportsData.filter(item => item.name !== id); // Using 'name' as ID
  setSportsData(newData);
  localStorage.setItem('sportsForm', JSON.stringify(newData));
};

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const visibleItems = showAll ? sportsData : sportsData.slice(0, Count);

  return (
    <div className="list-container">
      <h2>Sports Information List</h2>
      {sportsData.length === 0 ? (
        <p>No sports data available.</p>
      ) : (
        <>
          <table className="sports-table">
            <thead>
              <tr>
                <th>Select</th>
                <th>Name</th>
                <th>Sport</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {visibleItems.map((item, index) => (
                <tr 
                  key={index} 
                  className={checkedItems[index] ? 'strikethrough' : ''}
                >
                  <td>
                    <input
                      type="checkbox"
                      checked={checkedItems[index] || false}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.sport}</td>
                  <td>
                    <button onClick={() => handleDelete(item.name)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {sportsData.length > Count && (
            <button onClick={toggleShowAll} >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default SportsList;
