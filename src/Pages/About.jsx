import Spacement from '../Components/Spacement' 
import Navbar from"../Components/Navbar"
import Banner from '../Components/Banner'
import Footer from"../Components/Footer"

const About = () => {
    return (
        <div className="About"> 
             <Spacement>
            <Navbar />
            <Banner>
                    <div className="banner2 banner-commun"></div>
                </Banner>
                </Spacement>
            <Footer />
        </div>
    );
} 
 export default About; 