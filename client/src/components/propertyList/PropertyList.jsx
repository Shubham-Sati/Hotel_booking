import React from "react";
import "./PropertyList.css";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {
  const { data, loading } = useFetch(
    "http://localhost:8800/api/hotels/countByType"
  );

  const images = [
    require("../../All_Images/hotel.jpeg"),
    require("../../All_Images/apartments.webp"),
    require("../../All_Images/resorts.jpg"),
    require("../../All_Images/villas.jpg"),
    require("../../All_Images/cabins.jpg"),
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading please wait"
      ) : (
        <>
          {data &&
            images.map((img, idx) => (
              <div className="pListItem" key={idx}>
                <img src={img} alt="notFound" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[idx]?.type}</h1>
                  <h2>
                    {data[idx]?.count} {data[idx]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
