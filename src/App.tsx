import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import HomePage from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';

const theme = {
  container: {
    margin: '2rem auto 4rem',
    width: '95vw',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route index element={<HomePage />} />
          <Route path=":number" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
