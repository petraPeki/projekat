import React, { useState, useEffect } from 'react';
import './Ranking.css';

const Ranking = () => {
  const [listB, setListB] = useState([]);
  const [listA, setListA] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const colors = {
    RedBull: '#3671C6',
    Mercedes: '#27F4D2',
    Ferrari: '#E8002D',
    Mclaren: '#FF8000',
    Alpine: '#FF87BC',
    AstonMartin: '#229971',
    KickSauber: '#52E252',
    Haas: '#B6BABD',
    Williams: '#64C4FF',
    RB: '#6692FF'
  };

  useEffect(() => {
    fetch('http://localhost:5000/api/teams')
        .then(response => response.json())
        .then(data => {
          if (Object.keys(data).length === 0) {
            console.error('No data returned from API');
          } else {
            console.log(data);
            setListA(Object.entries(data).map(([teamName, teamData]) => ({
              name: teamName,
              drivers: teamData
            })));
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          // Consider adding a fallback or error message to the UI
        });
  }, []);
  const handleClick = (teamName) => {
    setSelectedTeam(selectedTeam === teamName ? null : teamName);
  };

  

  const moveItem = (item, fromList, toList) => {
    if (fromList === toList) return; // Prevent moving item to the same list

    const sourceList = fromList === 'listA' ? listA : listB;
    const targetList = toList === 'listA' ? listA : listB;

    let updatedSourceList = sourceList.filter(i => i.name !== item.name);

    let updatedTargetList = [...targetList, item];

    if (toList === 'listB' && updatedTargetList.length > 3) {
      updatedTargetList = updatedTargetList.slice(-3);
    }

    if (toList === 'listA') {
      setListB(updatedSourceList);
    } else {
      setListB(updatedTargetList);
    }
  };

  return (
    <div className="ranking-container">
      <h1>Izaberi svoja tri omiljena vozača</h1>
      <div className="lists-container">
        <div className="team-list">
          {listA.map((team) => (
            <div
              key={team.name}
              className="team-item"
              onClick={() => handleClick(team.name)}
              style={{ 
                cursor: 'pointer', 
                background: colors[team.name] || 'black'
              }}
            >
              {team.name}
            </div>
          ))}
        </div>
        <div className="drivers-list">
          { console.log(listA, selectedTeam, listA[selectedTeam]) }
          {selectedTeam && (
            <div style={{
              background: colors[selectedTeam] || 'black',
              padding: 10,
              borderRadius: 20,
              }}>
              <h2 style= {{color: 'white' }}>Vozači {selectedTeam}</h2>
              {listA.find(team => team.name === selectedTeam).drivers.map((driver, index) => (
                  <li
                      key={index}
                      onClick={() => moveItem(driver, 'listA', 'listB')}
                  >{driver.name}</li>
              ))}
            </div>
          )}
        </div>

        <div className="listB">
          <h2>Omiljeni</h2>
          <ul>
            {listB.map((item, index) => (
              <li
                key={index}
                onClick={() => moveItem(item, 'listB', 'listA')}
                style={{
                  padding: 10,
                  backgroundColor: 'white',
                  margin: 5,
                  borderRadius: 20
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ranking;