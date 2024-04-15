import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Estate = () => {
  const { id } = useParams();
  const estates = useLoaderData();
  const estate = estates.find((estate) => estate.id === id);
  console.log(estate);
  const {
    segment_name,
    estate_title,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image_url,
  } = estate;

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image_url} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{segment_name}</h1>
            <p className="py-6">{description}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estate;
