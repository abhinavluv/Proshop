import { Container } from 'react-bootstrap';
import Footer from './components/Footer.component';
import Header from './components/Header.component';

const App = () => {
    return (
        <>
            <Header />
            <main className='py-3'>
                <Container>
                    <h1>Welcome to Proshop</h1>
                </Container>
            </main>
            <Footer />
        </>
    );
};

export default App;
