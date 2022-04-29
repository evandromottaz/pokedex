import { Container, Logo } from './styles/Header.styled';
import logo from './assets/logo.png';

const Header = () => {
  function randomBg() {
    const random = [];
    for (let i = 0; i <= 6; i++) {
      let mathRandom = (Math.random() * (255 - 0) + 0).toFixed();
      random.push(mathRandom);
    }
    const rgb1 = `rgb(${random[0]},${random[1]},${random[2]})`;
    const rgb2 = `rgb(${random[3]},${random[4]},${random[5]})`;
    return `linear-gradient(${rgb1}, ${rgb2})`;
  }
  randomBg();
  return (
    <Container backG={randomBg()}>
      <Logo>
        <img src={logo} alt="Pokemon logo" />
      </Logo>
    </Container>
  );
};

export default Header;
