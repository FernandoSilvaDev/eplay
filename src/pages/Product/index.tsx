// Componente externo
import Loader from '../../components/Loader'
import { useParams } from 'react-router-dom'
// Componentes
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
// Função
import { useGetGameQuery } from '../../services/api'

//Criação de casting, pois React Route Dom não tipa os parametros de dizer se vai ser um number ou string
type GameParams = {
  id: string //String pois todo o parametro para o React Route Dom é uma string.
}

const Product = () => {
  const { id } = useParams() as GameParams //adicionar o tipo string no id
  const { data: game } = useGetGameQuery(id)

  //Caso não encontre o produto vem esta mensagem
  if (!game) {
    return <Loader />
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p> {game.description} </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system}
          <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora:</b> {game.details.publisher}
          <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
          {/* .join(', ') Função para onverter uma array em uma string e colocar ', ' + 'space' para organizar a lista  */}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
