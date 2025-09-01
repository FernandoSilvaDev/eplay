import ProductList from '../../components/ProductList'
import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulator } =
    useGetSimulationGamesQuery()

  // if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
  return (
    <>
      <ProductList
        games={actionGames}
        title="Ação"
        background="gray"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductList
        games={sportGames}
        title="Esportes"
        background="black"
        id="sports"
        isLoading={isLoadingSport}
      />
      <ProductList
        games={simulationGames}
        title="Simução"
        background="gray"
        id="simulation"
        isLoading={isLoadingSimulator}
      />
      <ProductList
        games={fightGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductList
        games={rpgGames}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductList
        games={fightGames}
        title="Em breve Aventura"
        background="black"
        id="adventure"
        isLoading={isLoadingFight}
      />
    </>
  )
  // }

  // return <h4>Carregando...</h4>
}

export default Categories
