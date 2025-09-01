import { Provider } from 'react-redux' // Para encapusular todo o projeto
import { BrowserRouter } from 'react-router-dom' //para ter o sistema de rota em toda aplicação
import Header from './components/Header'
import { GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
        {/* O Cart fica fora para poder ser acessado qualquer parte da pagina */}
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
