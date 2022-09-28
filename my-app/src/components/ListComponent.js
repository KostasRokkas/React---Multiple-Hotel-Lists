import React, {useState} from "react";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  ListComponent: {
    width: "80%",
    backgroundColor: "green",
    margin: "0.5rem auto",
    borderRadius: "20px",
    textAlign: "center",
    padding: "0.25rem 1rem",
  },
  container: {
    margin: "0",
    padding: "20px",
    boxSizing: "border-box",

    // backgroundColor: 'grey',
    // display: 'Flex',
    // flexDirection: 'column',
    // gap:'10px',
    // padding: '1rem'
  },
  table: {
    width: "80%",
    borderCollapse: "collapse",
  },

  td: {
    padding: "12px 15px",
    border: "1px solid #ddd",
    textAlign: "center",
  },
  th: {
    "& td": {
      padding: "12px 15px",
      border: "1px solid #ddd",
      textAlign: "center",
    },
  },

  tBodyTr: {
    "& > : nthChild": {
      backgroundColor: "#f5f5f5",
    },
  },

  "@media (max-width: 500px)": {
    container: {
      display: "block",
      width: "90%",
    },
    th: {
      display: "none",
    },
  },

  btn: {
    border: "1px solid #4f005f",
    background: "rgb(189,183,107)",
    color: "white",
    padding: "0.25rem 1rem",
    cursor: "pointer",
    borderRadius: "20px",
    float: "left",
  },
});
  // td: {
  //   position: 'relative',
  //   textAlign: 'right',
  //   paddingLeft: '15px',
  // },

  // td: {
  //   '&:before': {
  //   position: 'absolute',
  //   left: '0%',
  //   width: '50%',
  //   paddingLeft: '15px',
  //   textAlign: 'left'
  // }},

  

  
  
  

  
// ddd

//   },
//   title: {
//     backgroundColor: "blue",
//     width: "85%",
//     margin: "0.5rem auto",
//     borderRadius: "20px",
//     textAlign: "center",
//     padding: "0.25rem 1rem",
//   },
//   btn: {
//     border: "1px solid #4f005f",
//     background: "rgb(189,183,107)",
//     color: "white",
//     padding: "0.25rem 1rem",
//     cursor: "pointer",
//     borderRadius: "20px",
//     // float: "right",
//   },
// });
  


function ListComponent({ blackList, index, onDelete }) {
  const classes = styles();
  console.log({ blackList });
  
  return (
    <div className={classes.container}>
      <div>
        <h5>Blacklist {index}</h5>
        <button onClick = {onDelete}>Delete List</button>
      </div>
      <table className={classes.ListComponent}>
        <thead>
          <th className={classes.th}>Name</th>
          <th className={classes.th}>Id</th>
          <th className={classes.th}>Actions</th>
        </thead>
        <tbody className={classes.tBodyTr}>
          {blackList.map((hotel) => {
            return (
              <tr key={hotel.id}>
                <td className={classes.td}>{hotel.name}</td>
                <td className={classes.td}>{hotel.id}</td>
                <td className={classes.td}>
                  <button onDelete = {DeleteHotel}>Deletee</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <tfooter>
        <button className={classes.btn}>add</button>
      </tfooter>
    </div>
  );}

export default ListComponent;
