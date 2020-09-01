import React, { Component } from "react";
import Axios from "axios";

const baseURL =
  "https://us-central1-labenu-apis.cloudfunctions.net/futureCarTwo";
export default class App extends Component {
  state = {
    inputMax: "",
    inputMin: "",
    inputSearch: "",
    carArray: [],
    showFilter: false,
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
          <div key={car.id}>
            <p>{car.name}</p>
            <p>{car.price}</p>
            <p>{car.description}</p>
            <p>{car.paymt}</p>
            <p>{car.shipping}</p>
          </div>
        );
      });

    return (
      <>
        <button onClick={this.changeFilter}>Filtros</button>
        {this.state.showFilter && (
          <div>
            <label htmlFor="valueMax">Valor Máximo:</label>
            <input type="number" id="valueMax" onChange={this.handleInputMax} />
            <label htmlFor="valueMin">Valor Mínimo:</label>
            <input type="number" id="valueMin" onChange={this.handleInputMin} />
          </div>
        )}

        <label htmlFor="SearchName">Buscar produto:</label>
        <input id="SearchName" onChange={this.handleInputSearch} />
        <br />
        <br />
        <button>Vender</button>
        <br />
        <br />

        <select>
          <option>Ordenar por</option>
          <option>Título</option>
          <option>Valor da venda</option>
          <option>Prazo de entrega</option>
        </select>
        <br />
        <br />
        <br />
        {carList}
      </>
    );
  }
}
