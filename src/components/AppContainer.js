import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductsList } from './ProductsList/ProductsList.js'

const Header = styled.div`
  height: 10vh;
  text-align: center;
  background-color: yellow;
`

export class AppContainer extends Component {

  render() {
    return (
      <div>
        <Header>Header</Header>
        <ProductsList/>
      </div>
    )
  }
}
