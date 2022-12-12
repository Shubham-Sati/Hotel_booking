import React from "react";
import useFetch from "../../hooks/useFetch";
import "./Featured.css";

const Featured = () => {
  const { data, loading } = useFetch(
    "http://localhost:8800/api/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src={require("../../All_Images/dublin.jpg")}
              alt="notFound"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]} property</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src={require("../../All_Images/russia.jpg")}
              alt="notFound"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>{data[1]} property</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src={require("../../All_Images/germany.jpg")}
              alt="notFound"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[2]} property</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
