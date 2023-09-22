import Navbar from"../Components/Navbar"
import Spacement from '../Components/Spacement' 
import Banner from '../Components/Banner'
import Footer from"../Components/Footer"
import Cards from '../Components/Cards'


const Home = () => {
    return (
        <div className="Home"> 
            <Spacement>
            <Navbar />
            <Banner>
                    <div className="banner banner-commun">
                        <h1>Chez vous, partout et ailleurs</h1>
                    </div>
                </Banner>
                <Cards />
                </Spacement>
            <Footer />
            
        </div>
    );
} 
 export default Home; 