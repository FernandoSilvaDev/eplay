import { useDispatch } from 'react-redux'
import Button from '../Button'
import Tag from '../Tag'

import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'
import { Banner, Infos } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  //Função do botão de adicionar o produto no carrinho.
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(game))
    dispatch(open()) //Para abrir a aba carrinho ao adicionar o produto.
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {/* Função se não existir o desconto não renderizar - o sinal && é como o If mas esse não precisa do Else */}
            {game.prices.discount && (
              <span>De {parseToBrl(game.prices.old)}</span>
            )}
            {/* Função caso não existir não renderizar o preço pois é for lançamento */}
            {game.prices.current && <>Por {parseToBrl(game.prices.current)}</>}
          </p>
          {/* Função caso não tiver preço não renderizar o botão de compra. */}
          {game.prices.current && (
            <Button
              type="button"
              title="Clique aqui para adicionar o jogo ao carrinho"
              variant="primary"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
