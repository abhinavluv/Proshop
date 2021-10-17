import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/Footer.component';
import Header from './components/Header.component';
import HomeScreen from './screens/HomeScreen.component';
import ProductScreen from './screens/ProductScreen.component';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <main className='py-3'>
                <Container>
                    <Route path='/' component={HomeScreen} exact />
                    <Route
                        path='/product/:productId'
                        component={ProductScreen}
                        exact
                    />
                </Container>
            </main>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
