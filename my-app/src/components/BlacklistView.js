import React, {useState, useEffect} from "react"
import ListComponent from "./ListComponent";


const BlacklistView = () => {
      const dummyData = [
        [{ name: "Hilton" }, { name: "Parklane" }, { name: "Mainalo" }],
        [{ name: "Emerald" }, { name: "Elite" }, { name: "Romanda" }],
  ];

  const [hotelsLists, setHotelsLists] = useState([])
  
  const retrieveDummyData = () => {

    const hotels = window.localStorage.getItem('hotels', )
    if (!hotels) {
      window.localStorage.setItem('hotels', JSON.stringify(dummyData))
      // let hotels = JSON.stringify({dummyData})
    }
    setHotelsLists(JSON.parse(hotels).dummyData)
  }
  console.log( hotelsLists );

  useEffect(() => retrieveDummyData(),[])
   
    return (
      <div>
        {hotelsLists.map((hotelList, index) => {
          return <ListComponent blackList={hotelList} index={ index} />
       })}
      </div>
    );
}

export default BlacklistView