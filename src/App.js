


import SaleCar from './components/SaleCar'

import React, { Component } from "react";
import Axios from "axios";
import Header from "./components/Header/Header";
import Itens from "./components/Itens/Itens";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";

/* Estilos Botão */
const ButtonFilter = styled.button`
  background-color: #2f3f9f;
  padding: 10px 20px;
  border: none;
  color: #fff;
  font-size: 18px;
  border-radius: 7%;
  text-align: center;
  margin-top: 20px;
  margin-right: 80px;
  cursor: pointer;
  margin-left: 30%;

  &:hover {
    background-color: #808080;
  }
`;

const ButtonVender = styled.button`
  background-color: #2f3f9f;
  padding: 10px 20px;
  border: none;
  color: #fff;
  font-size: 18px;
  border-radius: 7%;
  text-align: center;
  cursor: pointer;
  margin-left: 90%;
`;

const Label = styled.label`
  color: blue;
  font-weight: bold;
  font-size: 18px;
  margin-right: 5px;
`;

const Input = styled.input`
  width: 20%;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 2px solid #2f3f9f;
`;

const InputValor = styled.input`
  width: 10%;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 2px solid #2f3f9f;
`;

const baseURL =
  "https://us-central1-labenu-apis.cloudfunctions.net/futureCarTwo";
export default class App extends Component {
  state = {
    inputMax: "",
    inputMin: "",
    inputSearch: "",
    carArray: [],
    showFilter: false,
    order: "",
  };

  componentDidMount() {
    this.getAllCars();
  }

  getAllCars = async () => {
    try {
      const response = await Axios.get(`${baseURL}/cars`);
      this.setState({ carArray: response.data.cars });
    } catch (error) {
      console.log(error);
    }
  };

  handleInputMax = (e) => {
    this.setState({ inputMax: e.target.value });
  };

  handleInputMin = (e) => {
    this.setState({ inputMin: e.target.value });
  };

  handleInputSearch = (e) => {
    this.setState({ inputSearch: e.target.value });
  };

  changeFilter = () => {
    this.setState({ showFilter: !this.state.showFilter });
  };

  render() {
    const carList = this.state.carArray
      .filter((item) => {
        return item.name.toLowerCase().indexOf(this.state.inputSearch) >= 0;
      })
      .filter((item) => {
        return item.price >= (parseFloat(this.state.inputMin) || 0);
      })
      .filter((item) => {
        return item.price <= (parseFloat(this.state.inputMax) || Infinity);
      })
      .map((car) => {
        return (
          <Itens
            key={car.id}
            name={car.name}
            price={car.price}
            description={car.description}
          />
        );
      });

    return (
      <>
        <Header />
        {/* <Box className={classes.search}>
          <TextField id="standard-basic" label="Search" /> */}
        <ButtonFilter onClick={this.changeFilter}>Filtros</ButtonFilter>
        {/*  </Box> */}

        {this.state.showFilter && (
          <>
            <div>
              <Label htmlFor="valueMax">Valor Máximo:</Label>
              <InputValor
                type="number"
                id="valueMax"
                onChange={this.handleInputMax}
              />
              <Label htmlFor="valueMin">Valor Mínimo:</Label>
              <InputValor
                type="number"
                id="valueMin"
                onChange={this.handleInputMin}
              />
            </div>

            <select>
              <option>Ordenar por</option>
              <option>Título</option>
              <option>Valor da venda</option>
              <option>Prazo de entrega</option>
            </select>
          </>
        )}

        <Label htmlFor="SearchName">Buscar produto:</Label>
        <Input
          id="SearchName"
          placeholder="Digite aqui para pesquisar"
          onChange={this.handleInputSearch}
        />
        <br />
        <br />
        {/* <ButtonVender>Vender</ButtonVender> */}
        <br />
        <br />

        <br />
        <br />
        <br />
        <Grid container>{carList}</Grid>
      </>
    );
  }
}
