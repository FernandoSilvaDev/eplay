import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Image = styled.div`
  position: relative;
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  //Colocar os elementos de cada lado na parte inferior.
  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    z-index: 1;
  }

  //Para fixar a tag no topo do container Banner
  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  //Criar um alpha no banner
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    content: '';
  }
`

export const Title = styled.h2`
  font-size: 36px;
  max-width: 450px;
  /* text-shadow: 2px 2px 0 black; */
`

export const Prices = styled.p`
  font-size: 24px;
  margin-top: 24px;
  /* text-shadow: 2px 2px 0 black; */

  span {
    text-decoration: line-through;
  }
`
