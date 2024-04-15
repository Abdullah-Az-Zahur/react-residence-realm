import React from "react";
import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa6";

const EstateCard = ({ estate }) => {
  const { estate_title, image_url, price, id, status } = estate;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <p className=" font-bold ">
          For <span className="text-green-500 font-bold ">{status}</span>
        </p>
        <h2 className="card-title ">{estate_title}</h2>
        <div className="flex">
          <div>
            <p className="flex items-center text-blue-400">
              <FaDollarSign /> {price}
            </p>
          </div>
          <div>
            <div></div>
          </div>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/estate/${id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
