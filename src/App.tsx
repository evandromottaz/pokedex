import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import HomePage from './components/Home';
import GlobalStyles, { theme } from './styles/GlobalStyles';

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
