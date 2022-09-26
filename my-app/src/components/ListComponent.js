import React, { useState } from "react";
import { createUseStyles } from "react-jss";

// const {addNewHotel, setNewHotel} = useState()

const styles = createUseStyles({
  ListComponent: {
    // display: 'flex',
    // flexDirection: 'column',
    width: "80%",
    backgroundColor: "green",
    margin: "0.5rem auto",
    borderRadius: "20px",
    textAlign: "center",
    padding: "0.25rem 1rem",
  },
  title: {
    backgroundColor: "blue",
    width: "85%",
    margin: "0.5rem auto",
    borderRadius: "20px",
    textAlign: "center",
    padding: "0.25rem 1rem",
  },
  btn: {
    border: "1px solid #4f005f",
    background: "rgb(189,183,107)",
    color: "white",
    padding: "0.25rem 1rem",
    cursor: "pointer",
    borderRadius: "20px",
    float: "right",
    justifyContened: "center",
  },
});
function ListComponent({ blackList, index }) {
  const classes = styles();
  console.log({ blackList });
  return (
    <div>
      <table className={classes.ListComponent}>
        <thead className={classes.title}>
          <tr>name</tr>
        </thead>
        <tbody>
          <tr>parklane</tr>
        </tbody>
        <button className={classes.btn}>add</button>
        <button className={classes.btn}>delete</button>
      </table>
      <div>
        <h2>Add new Hotel</h2>
        <input type="text" />
      </div>
    </div>

    //    <div>
    //      <div className={classes.title}>Blacklist Hotels</div>

    //      <ul>
    //        <li className={classes.ListComponent}>
    //          ListComponent
    //          <button className={classes.btn}>Add</button>
    //          <button className={classes.btn}>Delete</button>
    //        </li>
    //      </ul>
    //    </div>
  );
}

export default ListComponent;
