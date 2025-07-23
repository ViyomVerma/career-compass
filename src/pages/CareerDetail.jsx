// src/pages/CareerDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const CareerDetail = () => {
  const { id } = useParams();
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold">Career Details for: {id}</h2>
    </div>
  );
};

export default CareerDetail;
