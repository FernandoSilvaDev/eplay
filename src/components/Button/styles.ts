import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  //se Props variant for igual (===) 'primary' ? a cor é verde, caso ao contrairo (:) é branca
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.green : colors.white)};
  color: ${colors.white};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${colors.white};
  /* box-shadow: 2px 2px black; */
  color: ${colors.white};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
  /* text-shadow: 2px 2px black; */
`
