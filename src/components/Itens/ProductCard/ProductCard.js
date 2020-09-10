import React from 'react'
import { CardContainer, CarImg } from '../ProductCard/styles'

export function ProductCard(props) {
    return (
        <CardContainer>
            <CarImg src={'https://source.unsplash.com/collection/135988/900x500'} alt={"Imagem do carro"}/>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <div>
                <span>Prazo de entrega: {props.shipping}</span>
                <span>Preço: R${props.price}</span>
            </div>
        </CardContainer>
    )
}