import React, { Component } from "react";
import Axios from "axios";
import Header from "./components/Header/Header";
import Itens from "./components/Itens/Itens";
import SaleCar from "./components/SaleCar";
import Footer from "./components/Footer/Footer";

import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

/* Estilos Botão */
const ButtonFilter = styled.button`
  background-color: #2f3f9f;
  padding: 5px 25px;
  border: none;
  color: #fff;
  font-size: 18px;
  border-radius: 7%;
  text-align: center;
  margin-top: 20px;
  margin-left: 30%;
  margin-bottom: 1%;
  cursor: pointer;

  &:hover {
    background-color: #808080;
  }
`;

const Label = styled.label`
  color: #2f3f9f;
  font-weight: bold;
  font-size: 18px;
  margin-right: 5px;
  margin-left: 5%;
`;

const Input = styled.input`
  width: 20%;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 2px solid #2f3f9f;
`;

const ContainerValor = styled.label`
  margin-left: 20%;
`;

const InputValor = styled.input`
  width: 10%;
  padding: 5px;
  margin: 10px;
  border-radius: 10px;
  border: 2px solid #2f3f9f;
`;

const Select = styled.select`
  width: 175px;
  padding: 5px;
  font-size: 16px;
  line-height: 1;
  border: 0;
  border-radius: 0;
  height: 34px;
  margin-left: 25%;
  color: #2f3f9f;
  font-weight: bold;
  margin-bottom: 3%;
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
    showCar: true,
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

  changeShowCar = () => {
    this.setState({ showCar: !this.state.showCar });
  };

  changeSelect = (event) => {
    const noOrder = this.carArray;
    let newValue = event.target.value;

    switch (newValue) {
      case "ordemTitulo":
        const ordemTitulo = this.state.carArray.sort((a, b) => {
          return a.name > b.nome ? 1 : b.name > a.name ? -1 : 0;
        });
        this.setState({ carArray: ordemTitulo });
        console.log(this.state.carArray);
        break;
      case "crescente":
        const ordemCrescente = this.state.carArray.sort(
          (a, b) => a.price - b.price
        );
        this.setState({ carArray: ordemCrescente });
        break;
      case "decrescente":
        const ordemDecrescente = this.state.carArray.sort(
          (a, b) => b.price - a.price
        );
        this.setState({ carArray: ordemDecrescente });
        break;
      default:
        this.setState({ carArray: noOrder });
    }
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
        <Header showCar={this.state.showCar} changeCar={this.changeShowCar} />
        {this.state.showCar && (
          <div>
            <ButtonFilter onClick={this.changeFilter}>Filtros</ButtonFilter>

            {this.state.showFilter && (
              <>
                <div>
                  <ContainerValor>
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
                  </ContainerValor>
                </div>

                <Select onChange={this.changeSelect}>
                  <option>Ordenar por</option>
                  <option value="ordemTitulo">Título</option>
                  <option value="crescente">Preço crescente</option>
                  <option value="decrescente">Preço decrescente</option>
                </Select>
              </>
            )}

            <Label htmlFor="SearchName">Buscar produto:</Label>
            <Input
              id="SearchName"
              placeholder="Digite aqui para pesquisar"
              onChange={this.handleInputSearch}
            />
            <Grid container>{carList}</Grid>
          </div>
        )}
        <br />
        {this.state.showCar ? "" : <SaleCar />}
        <div>
          <Footer />
        </div>
      </>
    );
  }
}
