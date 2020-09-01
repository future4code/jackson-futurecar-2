import React, { Component } from 'react'
import Axios from 'axios'

import { ListContainer } from './styles.js'
import { ProductCard } from '../ProductCard/ProductCard'

const baseURL = 'https://us-central1-labenu-apis.cloudfunctions.net/futureCarTwo'

export class ProductsList extends React.Component {
    state = {
        carArray: []
    }

    componentDidMount() {
        this.getAllCars()
    }

    getAllCars = async () => {
        try{
            const response = await Axios.get(`${baseURL}/cars`)
            this.setState({ carArray: response.data.cars })
            
        }catch(error){
            console.log(error)
        }
    }

    render() {
        return (
            <ListContainer>
                {this.state.carArray.map((car) => { return <ProductCard key={car.id} name={car.name} price={car.price} description={car.description} paymt={car.paymt} shipping={car.shipping}/>})}
            </ListContainer>
        )
    }
}
