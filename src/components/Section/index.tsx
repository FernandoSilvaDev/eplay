import { Container, Title } from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: React.JSX.Element
}
const Section = ({ title, background, children }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      {children}
    </div>
  </Container>
)

export default Section
