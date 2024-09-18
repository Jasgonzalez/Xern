import xernIcon from './assets/fullI_icon_nospace.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import jason from './assets/jason-photo.jpg'; 
import karan from './assets/karan-photo.jpg';
import abdelilah from './assets/abdelilah-photo.jpg';

function About() {
    return (
        <section className="about-container">
                {/* About Us Section */}
                <div className="title-container">
                    <h1>About Us</h1>
                    <p className="about-text">
                        We are at the forefront of technological innovation, dedicated to driving progress in the 
                        tech industry. Our cutting-edge products and services empower you to connect more deeply with our clients and streamline your business operations.
                    </p>
                </div>
                

                {/* Team Members */}
                
                <div className="our-team">
                        <h1>Our Team</h1>
                    
                <div className="team-container">
                    
                    <div className="team">

                        <img src={jason} alt="Jason" className="team-img" />
                        <h2>Jason</h2>
                        <p>Lead Developer</p>
                    </div>
                    <div className="team">
                        <img src={karan} alt="Karan" className="team-img" />
                        <h2>Karan</h2>
                        <p>Janitor</p>
                    </div>
                    <div className="team">
                        <img src={abdelilah} alt="Abdu" className="team-img" />
                        <h2>Abdu</h2>
                        <p>Janitor assistant</p>
                    </div>
                </div>
                </div>

        </section>
    );
}

export default About;


