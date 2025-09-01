import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    // Para Destaques
    getFeaturedGames: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    // Para Promoções
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    //Para Em-breve
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    //Para categoria Ação
    getActionGames: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    //Para categoria esportes
    getSportGames: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    //Para categoria simulação
    getSimulationGames: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    //Para categoria Luta
    getFightGames: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    //Para categoria RPG
    getRpgGames: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    //Para Produtos
    //Esse ira receber um parametro que será o Id que no React reconhece como uma string.
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    }),
    // Nesta parte se utiliza o Mutation que é usado para enviar dados, sendo que o Query é usado para recuperar dados do servidor.
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeaturedGamesQuery,
  useGetSoonQuery,
  useGetOnSaleQuery,
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetGameQuery,
  usePurchaseMutation
} = api
export default api
