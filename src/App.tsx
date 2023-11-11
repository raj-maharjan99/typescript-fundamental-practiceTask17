// src/components/ExampleComponent.tsx

import React from "react";

// Import the Car and Bike types from types.ts
import { Car, Bike } from "../types";

// Define a variable using union type
const vehicle: Car | Bike = {
  make: "Toyota",
  model: "Camry",
};

// Define a variable using intersection type
const combinedVehicle: Car & Bike = {
  make: "Honda",
  model: "Civic",
  brand: "Trek",
  type: "Mountain Bike",
};

const ExampleComponent: React.FC = () => {
  return (
    <div className="flex flex-col   text-center">
      <div className="text-[25px]">TYPESCRIPT</div>
      <div className="pt-3 shadow-lg flex justify-between ">
        <div className="shadow-lg w-[400px] h-[200px] grid  justify-center items-center ">
          <h2 className="text-[25px] font-[600]">Vehicle Info</h2>
          <span>Make: {vehicle.make}</span>
          <p>Model: {vehicle.model}</p>
        </div>
        <div className="shadow-lg w-[400px] h-[200px] flex flex-col justify-center items-center ">
          <h1 className="text-[25px] font-[600]">Combined Vehicle Info</h1>
          <p>Make: {combinedVehicle.make}</p>
          <p>Model: {combinedVehicle.model}</p>
          <p>Brand: {combinedVehicle.brand}</p>
          <p>Type: {combinedVehicle.type}</p>
        </div>
      </div>
    </div>
  );
};

export default ExampleComponent;
