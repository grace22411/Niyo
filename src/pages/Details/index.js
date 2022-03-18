import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { DashImages } from "../../helpers/Data";
import { Details, Reviews } from "./style";

const ImageDetail = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let data = DashImages.filter((imageId) => imageId.id == id)[0];
    setDetails(data);
  }, [id]);

  return (
    <>
      <Details>
        <div
          className="image"
          style={{ backgroundImage: `url(${details.image})` }}
        >
          <div className="price">
            <p>
              <i className="fab fa-ethereum"></i> {details.price}
            </p>
            <br />
            <p>Try On</p>
          </div>
        </div>
        <div className="info">
          <h1>{details.name}</h1>
          <div className="location-description">
            <div className="desc">
              <i className="fas fa-map-marker-alt"></i> {details.local}
            </div>
            <div className="desc">
              <i className="fas fa-map-marker-alt"></i> {details.location}
            </div>
            <div className="desc">
            <i className="fas fa-money-bill-alt"></i> {details.btc} available
            </div>
          </div>
        </div>
      </Details>

      <Reviews>
          <h1>Scroll to read reviews:</h1>
            <div className="each-review">
                <p><span>Jorianne Says:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
            </div>
            <div className="each-review">
                <p><span>Kate Says:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
            </div>
            <div className="each-review">
                <p><span>Ayomide Says:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
            </div>
      </Reviews>
    </>
  );
};

export default ImageDetail;
