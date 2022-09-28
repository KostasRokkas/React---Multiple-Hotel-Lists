import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import ListComponent from "./ListComponent";

const styles = createUseStyles({
  form: {
    backgroundColor: "rgb(255,0,255)",
    color: "orange",
    margin: "2rem auto",
    padding: "1rem",
    width: "60%",
    // maxWidth: "70rem",
    textAlign: "center",
    borderRadius: "20%",
  },
  input: {
    // display: "block",
    width: "50%",
    border: "5px solid #ccc",
    padding: "0.15rem",
    marginBottom: " 0.5rem",
    // marginTop: "0.5rem",
    // marginright: '5.5rem'
  },
});

const BlacklistView = (props) => {
  const dummyData = [
    [
      { id: 1, name: "Hilton" },
      { id: 2, name: "Parklane" },
      { id: 3, name: "Mainalo" },
      { id: 4, name: "Mainalo" },
    ],
    [
      { id: 1, name: "Emerald" },
      { id: 2, name: "Elite" },
      { id: 3, name: "Romanda" },
    ],
  ];
  const classes = styles();

  const [hotelsLists, setHotelsLists] = useState([]);

  const retrieveDummyData = () => {
    let hotels = window.localStorage.getItem("hotels");
    if (!hotels) {
      window.localStorage.setItem("hotels", JSON.stringify(dummyData));
      hotels = JSON.stringify(dummyData);
    }
    setHotelsLists(JSON.parse(hotels));
  };

  useEffect(() => retrieveDummyData(), []);

  const addList = () => {
    const newLists = [...hotelsLists, []];
    setHotelsLists(newLists);
  };


  // PROBLEM!!!!!!!!!!!!!!!!!1
  const deleteList = (index) => {
    const newLists = hotelsLists.splice(index, 1);
    setHotelsLists(newLists);
  };

  const deleteHotel = (index) => {
    const deleteOneHotel = hotels.splice(index, 1)
    
    
  }
  return (
    <div>
      <form className={classes.form}>
        <h2>Add new Hotel</h2>
        <label htmlFor="name"> Name: </label>
        <input id="name" type="text" className={classes.input} />
        <button>Add</button>
        <button>Cancel</button>
      </form>
      <button onClick={addList}>Add list</button>
      {hotelsLists.map((hotelList, index) => {
        return (
          <ListComponent
            blackList={hotelList}
            index={index}
            onDelete={() => deleteList(index)}
          />
        );
      })}
    </div>
  );
};

export default BlacklistView;
