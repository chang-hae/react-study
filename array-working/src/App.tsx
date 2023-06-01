import React, { useState } from 'react';

interface NotificationHour {
  hour: string
}

interface DisplayHour {
  hour: string
  disabled: boolean
}

function App() {
  const [selectedHours, setSelectedHours] = useState<NotificationHour[]>([]);
  const [displayHours, setDisplayHours] = useState<DisplayHour[]>([
    {hour: '00', disabled: false},
    {hour: '01', disabled: false},
    {hour: '02', disabled: false},
    {hour: '03', disabled: false},
    {hour: '04', disabled: false},
    {hour: '05', disabled: false},
    {hour: '06', disabled: false},
    {hour: '07', disabled: false},
    {hour: '08', disabled: false},
    {hour: '09', disabled: false},
    {hour: '10', disabled: false},
    {hour: '11', disabled: false},
    {hour: '12', disabled: false},
    {hour: '13', disabled: false},
    {hour: '14', disabled: false},
    {hour: '15', disabled: false},
    {hour: '16', disabled: false},
    {hour: '17', disabled: false},
    {hour: '18', disabled: false},
    {hour: '19', disabled: false},
    {hour: '20', disabled: false},
    {hour: '21', disabled: false},
    {hour: '22', disabled: false},
    {hour: '23', disabled: false}
  ]);

  const addSelectedHours = (hour: string) => {
    setSelectedHours([...selectedHours, { hour }]);
  }

  const disableDisplayHour = (hour: string) => {
    setDisplayHours(displayHours.map((displayItem) => 
      displayItem.hour === hour ? {...displayItem, disabled: true} : displayItem))
  }

  const resetDisplayHours = () => {
    setDisplayHours(
      displayHours.map((displayItem) => 
      { return {...displayItem, disabled: false} }))
  }

  const resetSelectedHours = () => {
    setSelectedHours([]);
  }

  return (
    <>
      {
        selectedHours.map((selectedHour, index) => <span key={index} style={{ padding: 12}}>{selectedHour.hour}</span>)
      }
      <br />
      {
        displayHours.map(item => 
        <button 
          key={item.hour}
          disabled={item.disabled}
          onClick={() => {
            addSelectedHours(item.hour);
            disableDisplayHour(item.hour);
        }}>{item.hour}</button>)
      }
      <br />
      <button onClick={() => {
        resetDisplayHours();
        resetSelectedHours();
      }}>reset</button>
    </>
  );
}

export default App;
