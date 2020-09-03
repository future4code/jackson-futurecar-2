import React from 'react';
import styled from "styled-components";
import axios from "axios";
import {baseUrl, axiosConfig } from './constants/axiosConstants';

import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';


const ContainerApp = styled.div`
  background-color: #cecece;
  width: 0 auto;
 height: 0 auto;
`;

const Imagem = styled.img`
  width: 200px;
`;

const Container = styled.div`
 font-family: sans-serif;
 margin-top:50px;
 text-align: center;
color: #cecece;

`


class SaleCar extends React.Component {
    state = {
        name:"",
        description:"",
        price:"",
        payment:"",
        shipping:""
}

handleNameCarChange = (event)=> {
    this.setState ({name:event.target.value});
}
 handlePriceChange = (event) => {
    this.setState ({price:event.target.value});
 }
 handlePaymentChange = (event) => {
    this.setState ({payment:event.target.value});
 }
 handleDescriptionChange = (event) => {
    this.setState ({description:event.target.value});
 }    
 handleShippingChange = (event) => {
    this.setState ({shipping:event.target.value});
 }


handleClient = () => {
    const body ={
        name: this.state.name,
        description: this.state.description,
        price: this.state.price,
        paymentMethod: this.state.payment,
        shipping: this.state.shipping
    }
    console.log(this.state)
    axios
      .post(baseUrl,body , axiosConfig)
      .then((response) => {
      
        this.setState({name:"",description:"",price:"",payment:"",shipping:""})
      })
      .catch(error => {
        alert("Erro ao criar o usuário");
        console.log(error);
      })
  };


    render(){
        return(
            <div>
        <ContainerApp>
          <Imagem src="./imagens/4cars.png" alt="logo" />
        </ContainerApp>
        <Container>
            <h2>Cadastro de Venda</h2>
            <TextField 
              id="filled-basic" label="Nome do Carro:" variant="filled"  type="text"
              value={this.state.name}
              onChange={this.handleNameCarChange} /> 
            <p>
            <TextField 
              id="filled-basic" label="Descrição:" variant="filled"  type="text" 
              value={this.state.description}
              onChange={this.handleDescriptionChange} / >
            </p>
            <p>
            <TextField  
              id="filled-basic" label="Preço:" variant="filled"  type="text" 
              value={this.state.price}
              onChange={this.handlePriceChange} />
            </p>
            <p> 
            <FormControl  variant="filled" >
            <FormHelperText >Metodo de Pagamento:</FormHelperText>
                <Select  value={this.state.payment}onChange={this.handlePaymentChange}>
                    <MenuItem  value =""></MenuItem>
                    <MenuItem value ="Card">Card</MenuItem>
                    <MenuItem value ="Dinheiro">Dinheiro</MenuItem>
                    <MenuItem value ="Boleto">Boleto</MenuItem>
                </Select>
            </FormControl>
            </p>
            <p>  
            <FormControl  variant="filled" >
            <FormHelperText>Shipping: </FormHelperText>
                <Select  value={this.state.shipping}onChange={this.handleShippingChange}>
                        <MenuItem value =""></MenuItem>
                        <MenuItem value ="1">1</MenuItem>
                        <MenuItem value ="2">2</MenuItem>
                        <MenuItem value ="3">3</MenuItem>
                        <MenuItem value ="4">4</MenuItem>
                        <MenuItem value ="5">5</MenuItem>
                </Select>
            </FormControl>
            </p>
            <Button variant="contained" onClick ={this.handleClient}>Enviar</Button>
        </Container>
        </div>
        )
    }
}
export default SaleCar; 