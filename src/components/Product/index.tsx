import Tag from '../Tag'
import { Card, Description, Infos, Title } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  description,
  system,
  infos,
  image,
  id
}: Props) => {
  //Função para limitar a extenção de caracteres na discrição dos produtos.
  const getDescription = (text: string) => {
    //Se descrição for maior que 95 corta (slice) a descrição, caso ao contrario retorna normalmente
    if (text.length > 95) {
      return text.slice(0, 92) + '...'
    }
    return text
  }
  return (
    <Card
      title={`Clique aqui para ver mais detalhes do jogo: ${title}`}
      to={`/product/${id}`}
    >
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Title>{title}</Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Description>{getDescription(description)}</Description>
    </Card>
  )
}

export default Product
