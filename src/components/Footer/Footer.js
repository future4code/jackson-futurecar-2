import React, { Component } from "react";

import styled from "styled-components";

const FooterCar = styled.div`
  background-color: #b9b9b9;
  padding: 10px;
  font-size: 18px;
  color: #9e9e9e;
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
`;

const Title = styled.h2`
  font-size: 20px;
  &:hover {
    color: #ef585a;
  }
`;

export default function Footer() {
  return (
    <FooterCar>
      <span>
        <Title>Contato</Title> (61) 4080-5208 <br /> Segunda a sexta - 8h às 20h
        Sábado, das 8h às 18h
      </span>

      <span>
        <Title>Fale conosco</Title> Sac: 0800-567-8025 <br />
      </span>

      <span>
        <Title>Sobre Nós</Title>
        Av. das Acácias, Lago sul - Brasília-DF <br /> CNPJ: 08.451-057/0001-10
      </span>
    </FooterCar>
  );
}
