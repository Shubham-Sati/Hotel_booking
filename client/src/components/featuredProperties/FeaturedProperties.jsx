import "./FeaturedProperties.css";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading } = useFetch(
    "http://localhost:8800/api/hotels?featured=true&limit=4"
  );

  return (
    <div className="fp">
      {loading ? (
        "Loading Please Wait"
      ) : (
        <>
          {data.map((item, idx) => (
            <div className="fpItem" key={item._id}>
              <img src={item.photos[0]} alt="notFound" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;

// const images = [
//   require("../../All_Images/hut1.jpeg"),
//   require("../../All_Images/hut2.jpeg"),
//   require("../../All_Images/hut3.jpeg"),
//   require("../../All_Images/hut4.jpeg"),
// ];
