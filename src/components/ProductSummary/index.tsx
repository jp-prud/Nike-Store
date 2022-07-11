import { Container, Details, Description } from './styles';

export default function ProductSummary() {
  return (
    <Container>
      <Details>
        <span>SNEAKER</span>
        <h1>Air Jordan</h1>
        <h4>RETRO 6 MINT</h4>
      </Details>

      <Description>
        Wmns Air Jordan 6 “Mint Foam” O AJ6 se destaca por ter sido o primeiro
        sneaker de campeonato usado por Michael Jordan. Com uma mistura de tons
        suaves, o modelo apresenta as cores branco e cinza claro que se alternam
        na parte superior de couro, combinando os outros detalhes. A sola
        apresenta base branca gelada e tons de menta para contrastar.
      </Description>
    </Container>
  );
}
