import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartActions";
import car1Image from "../Images/mazda-mx-5-miata.webp";
import car2Image from "../Images/honda-civic-si.webp";
import car3Image from "../Images/subaru-brz.webp";
import car4Image from "../Images/subaru-wrx.webp";
import car5Image from "../Images/toyota-gr86.webp";
import car6Image from "../Images/volkswagen-jetta-gli.webp";

const OurCars = () => {
  const dispatch = useDispatch();

  const cars = [
    { id: 1, make: "Mazda", model: "MX5", year: 2020, image: car1Image },
    { id: 2, make: "Honda", model: "Civic", year: 2021, image: car2Image },
    { id: 3, make: "Subaru", model: "BRZ", year: 2019, image: car3Image },
    { id: 4, make: "Subaru", model: "WRX", year: 2022, image: car4Image },
    { id: 5, make: "Toyota", model: "GR86", year: 2023, image: car5Image },
    {
      id: 6,
      make: "Volkswagen",
      model: "Jetta GLI",
      year: 2024,
      image: car6Image,
    },
  ];

  const [selectedColor, setSelectedColor] = React.useState(null);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleAddToCart = (car) => {
    dispatch(addToCart(car));
  };

  return (
    <div>
      <h1>Products Page</h1>
      <div className="row">
        {cars.map((car) => (
          <div key={car.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={car.image}
                className="card-img-top"
                alt={`${car.make} ${car.model}`}
              />
              <div className="card-body">
                <h5 className="card-title">{`${car.make} ${car.model}`}</h5>
                <p className="card-text">{`Year: ${car.year}`}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(car)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCars;
