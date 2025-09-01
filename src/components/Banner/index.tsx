import Loader from '../Loader'
import Tag from '../Tag'
import Button from '../Button'
import { useGetFeaturedGamesQuery } from '../../services/api'

import * as S from './styles'
import { parseToBrl } from '../../utils'

const Banner = () => {
  // data: game - é renomear data para game para não precisar renomear todo atributo que já se chama game
  const { data: game } = useGetFeaturedGamesQuery()

  //Caso não encontre o produto vem esta mensagem
  if (!game) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            De <span>{parseToBrl(game.prices.old)}</span> <br />
            por apenas {parseToBrl(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui e aproveite este lançamento"
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
