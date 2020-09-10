import React, { Component } from "react";
import Axios from "axios";

import { ListContainer } from "./styles.js";
import { ProductCard } from "../ProductCard/ProductCard";

const baseURL =
  "https://us-central1-labenu-apis.cloudfunctions.net/futureCarTwo";

export default function ProductsList(props) {
  return (
    <ListContainer>
      {props.filterList.map((car) => {
        return (
          <ProductCard
            key={car.id}
            name={car.name}
            price={car.price}
            description={car.description}
            paymt={car.paymt}
            shipping={car.shipping}
          />
        );
      })}
    </ListContainer>
  );
}
