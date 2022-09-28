import React from "react";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  container: {
    width: "80%",
    margin: "auto",
    margin: "20px 10% 20px 10%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign: "center",
    alignContent: "flex-start",
    borderRadius: "15px",
  },

  h: {
    lineHeight: "60px",
    fontWeight: "800",
  },

  td: {
    padding: "10px 12px",
    border: "1px solid #ddd",
  },
  th: {
    border: "1px solid #ddd",
    padding: "80px",
    paddingTop: "12px",
    paddingBottom: "12px",
    textAlign: "center",
  },

  btnAddHotel: {
    backgroundImage: "linear-gradient(-180deg, #00D775, #00BD68)",
    borderRadius: "5px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0 2px 4px",
    color: "#FFFFFF",
    cursor: "pointer",
    display: "flex",
    alignSelf: "flex-down",
    height: "30px",
    lineHeight: "30px",
    padding: "0 20px",
    textAlign: "center",
    width: "10%",
    border: "0",
  },

  btnCloneHotel: {
    backgroundImage: "linear-gradient(-180deg, #00D775, #00BD68)",
    borderRadius: "5px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0 2px 4px",
    color: "#FFFFFF",
    cursor: "pointer",
    display: "flex",
    alignSelf: "flex-down",
    height: "30px",
    lineHeight: "30px",
    padding: "0 20px",
    textAlign: "center",
    width: "10%",
    border: "0",
  },

  btnDeleteHotel: {
    background: "#e62143",
    borderRadius: "11px",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "500",
    justifyContent: "center",
    lineHeight: "10.4929px",
    padding: ".8em 1em",
    textAlign: "center",
    textDecoration: "none",
    textShadow: "rgba(0, 0, 0, .3) 1px 1px 1px",
    width: "70%",
    border: "0",
  },

  btnDeleteLists: {
    background: "#e62143",
    borderRadius: "11px",
    boxSizing: "border-box",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    fontWeight: "500",
    justifyContent: "center",
    lineHeight: "10.4929px",
    padding: ".8em 1em",
    textAlign: "center",
    textDecoration: "none",
    textShadow: "rgba(0, 0, 0, .3) 1px 1px 1px",
    width: "100%",
    border: "0",
  },

  "@media (max-width: 600px)": {
    container: {
      flexDirection: "columns",
      justifyContent: "center",
      display: "block",
      padding: "0px 0px 0px 0px",
    },
  },
});
 
function ListComponent({ blackList, index, onDelete, onDeleteHotel, onAddHotel, onCloneList }) {
  const classes = styles();
  return (
    <div className={classes.container}>
      <div>
        <h5 className={classes.h}>Blacklist No:{index+1}</h5>
        <button className={classes.btnDeleteLists} onClick={onDelete}>
          Delete List
        </button>
      </div>
      <table className={classes.table}>
        <thead>
          <th className={classes.th}>Name</th>
          <th className={classes.th}>Address</th>
          <th className={classes.th}>Actions</th>
        </thead>
        <tbody className={classes.tBodyTr}>
          {blackList.map((hotel, index) => {
            return (
              <tr key={index}>
                <td className={classes.td}>{hotel.name}</td>
                <td className={classes.td}>{hotel.address}</td>
                <td className={classes.td}>
                  <button
                    className={classes.btnDeleteHotel}
                    onClick={() => onDeleteHotel(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
        <button className={classes.btnAddHotel} onClick={onAddHotel}>
          Add Hotel
        </button>
        <button className={classes.btnCloneHotel} onClick={onCloneList}>
          Clone List
        </button>
    </div>
  );
}

export default ListComponent;
