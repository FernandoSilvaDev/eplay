import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import * as S from './styles'
import { getTotalPrice, parseToBrl } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const navigate = useNavigate()

  //Para fechar o carrinho no overlay
  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  //Função para remover item do carrinho
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  // Para quando clicar no botão Finalizar a compra ser direcionando para a pagina checkout e fechar o carrinho
  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart}></S.Overlay>
      <S.Sidebar>
        {/* Condição para caso o carrinho esteja vazio exibir esta mensagem. */}
        {items.length > 0 ? (
          <>
            <ul>
              {/* Para rederizar os itens no carrinho */}
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{parseToBrl(item.prices.current)}</span>
                  </div>
                  {/* Button para remover o item do carrinho */}
                  <button onClick={() => removeItem(item.id)} type="button" />
                </S.CartItem>
              ))}
            </ul>
            <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
            <S.Prices>
              Total de {parseToBrl(getTotalPrice(items))}
              {''} <span>Em até 6x sem juros</span>
            </S.Prices>
            <Button
              onClick={goToCheckout}
              title="Clique aqui para continuar a compra"
              type="button"
            >
              Continuar a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra!
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
