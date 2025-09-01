import { RiseLoader } from 'react-spinners'
import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <RiseLoader color={colors.white} />
  </Container>
)

export default Loader
