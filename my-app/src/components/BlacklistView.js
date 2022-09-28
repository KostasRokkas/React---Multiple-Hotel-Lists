import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import ListComponent from "./ListComponent";

const styles = createUseStyles({
  form: {
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#f2f2f2",
    padding: "20px",
    borderRadius: "5px",
    width: "60%",
    margin: "auto",
  },
  input: {
    margin: "2px 0",
    width: "50%",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxSizing: "border-box",
  },

  addList: {
    backgroundImage: "linear-gradient(-180deg, #00D775, #00BD68)",
    borderRadius: "5px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0 2px 4px",
    color: "#FFFFFF",
    cursor: "pointer",
    height: "44px",
    lineHeight: "44px",
    padding: "0 20px",
    textAlign: "center",
    width: "100%",
    border: "0",
  },

  addNewHotel: {
    backgroundImage: "linear-gradient(-180deg, #00D775, #00BD68)",
    borderRadius: "5px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0 2px 4px",
    color: "#FFFFFF",
    cursor: "pointer",
    height: "40px",
    lineHeight: "40px",
    padding: "0 20px",
    border: "0",
  },

  canselNewHotel: {
    backgroundColor: "#e62143",
    borderRadius: "5px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0 2px 4px",
    color: "#FFFFFF",
    cursor: "pointer",
    height: "40px",
    lineHeight: "40px",
    padding: "0 20px",
    border: "0",
  },

  btnForm: {
    margin: "20px 10% 20px 10%",
  },
});

const BlacklistView = () => {
  const dummyData = [
    [
      { name: "Hilton", address: "mixalakopoulou 38" },
      { name: "Parklane", address: "niki 15" },
      { name: "Mainalo", address: "sexioti 22" },
      { name: "Mainalo", address: "irakleous 5" },
    ],
    [
      { name: "Emerald", address: "dimitrakopoulou 6" },
      { name: "Elite", address: "joker kai batman gwnia" },
      { name: "Romanda", address: "el. venizelou 55" },
    ],
  ];
  const classes = styles({});

  const [hotelsLists, setHotelsLists] = useState([]);
  const [chosenList, setChosenList] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", address: "" });

  const retrieveDummyData = () => {
    let hotels = window.localStorage.getItem("hotels");
    if (!hotels) {
      window.localStorage.setItem("hotels", JSON.stringify(dummyData));
      hotels = JSON.stringify(dummyData);
    }
    setHotelsLists(JSON.parse(hotels));
  };

  useEffect(() => retrieveDummyData(), []);

  const onAddList = () => {
    const newLists = [...hotelsLists, []];
    setHotelsLists(newLists);
  };
  const onAddHotel = (hotel) => {
    const newLists = [...hotelsLists];
    newLists[chosenList].push(hotel);
    setHotelsLists(newLists);
    setChosenList(null);
    setShowForm(false);
  };

  const deleteList = (index) => {
    const newLists = [...hotelsLists];
    newLists.splice(index, 1);
    setHotelsLists(newLists);
  };
  const onHotelDelete = (listIndex, hotelIndex) => {
    const newLists = [...hotelsLists];
    newLists[listIndex].splice(hotelIndex, 1);
    setHotelsLists(newLists);
  };

  const onCloneList = (index) => {
    const newLists = [...hotelsLists, hotelsLists[index]];
    setHotelsLists(newLists);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onAddHotel({
      name: form.name,
      address: form.address,
    });
  };

  return (
    <div className={classes.container}>
      {showForm && (
        <div>
          <form onSubmit={onSubmit} className={classes.form}>
            <h2>Add new Hotel</h2>
            <label htmlFor="name" className={classes.label}>
              Name: </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={classes.input}
            />
            <br />
            <label htmlFor="address" className={classes.label}>
              Address: </label>
            <input
              id="address"
              type="text"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className={classes.input}
            />
            <div className={classes.btnForm}>
              <button
                type="submit"
                onClick={() => onSubmit()}
                className={classes.addNewHotel}
              >
                Add
              </button>
              <button
                className={classes.canselNewHotel}
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      <button className={classes.addList} onClick={onAddList}>
        Add list
      </button>
      {hotelsLists.map((hotelList, index) => {
        return (
          <ListComponent
            key={index}
            blackList={hotelList}
            index={index}
            onDelete={() => deleteList(index)}
            onDeleteHotel={(hotelIndex) => onHotelDelete(index, hotelIndex)}
            onAddHotel={() => {
              setChosenList(index);
              setShowForm(true);
            }}
            onCloneList={() => onCloneList(index)}
          />
        );
      })}
    </div>
  );
};

export default BlacklistView;
