import { useDispatch, useSelector } from 'react-redux'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import logo from '../../assets/img_logo/logo.svg'
import cartIcon from '../../assets/img_logo/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()

  //Função para exibir o numero de item adicionado no carrinho
  const { items } = useSelector((state: RootReducer) => state.cart)

  //Função para exibir o menu Hamburguer quando estiver na resolução celular
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  //Clicar no carrinho e abrir o menu
  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to="/">
            <h1>
              <img src={logo} alt="Eplay" />
            </h1>
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link
                  title="Clique aqui para acessar a pagina de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de em breve"
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        {/* items.length para contar intens no carrinho */}
        <S.CartButton role="button" onClick={openCart}>
          {items.length} <span> - produto(s)</span>
          <img src={cartIcon} alt="Carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link
              title="Clique aqui para acessar a pagina de categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)} //Para quando clicar o menu fechar
            >
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)} //Para quando clicar o menu fechar
            >
              Em breve
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)} //Para quando clicar o menu fechar
            >
              Promoções
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
