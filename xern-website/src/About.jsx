import xernIcon from './assets/fullI_icon_nospace.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import jason from './assets/jason-photo.jpg'; 
import karan from './assets/karan-photo.jpg';
import abdelilah from './assets/abdelilah-photo.jpg';

function About(){

    const teamMembers = [
        {
            name: "Jason Gonzalez",
            image: jason,
            description: "CEO/Lead Developer", 
            socials: [
                { platform: "LinkedIn", url: "https://linkedin.com/in/jason" },
                { platform: "Twitter", url: "https://twitter.com/jason" },
            ],
        },
        {
            name: "Karan Patel",
            image: karan,
            description: "Janitor",
            socials: [
                { platform: "LinkedIn", url: "https://linkedin.com/in/karan" },
                { platform: "Instagram", url: "https://instagram.com/karan" },
            ],
        },
        {
            name: "Abdelilah Hanim",
            image: abdelilah,
            description: "Janitor Assistant",
            socials: [
                { platform: "LinkedIn", url: "https://linkedin.com/in/abdelilah" },
                { platform: "Facebook", url: "https://facebook.com/abdelilah" },
            ],
        }
    ];
    return(

        <div className="about-conatiner">
            <div className="about">
            
            <div className="about-conatiner2">
            <h1>Who Are  We</h1>

                <div className='about' >
                <h2><span className='xern' >XERN,</span> based in Richmond, VA, is at the forefront of technological innovation, 
                dedicated to driving progress in the tech industry. Our cutting-edge products and services empower you to connect more deeply with your audience and streamline your business operations, paving the way for a more dynamic and efficient future.
                </h2>
            </div>
            <section className="team-container">
            <h1>Meet Our Team</h1>
            <Carousel fade interval={3000} controls={true} indicators={true}>
                {teamMembers.map((member, index) => (
                    <Carousel.Item key={index}>
                        <div className="carousel-slide">
                            <div className="carousel-image-wrapper">
                                <img
                                    className="d-block"
                                    src={member.image}
                                    alt={member.name}
                                />
                                <div className="carousel-overlay"></div>
                            </div>
                            <div className="carousel-description">
                                <h3>{member.name}</h3>
                                <p>{member.description}</p>
                                <div className="social-links">
                                    {member.socials.map((social, i) => (
                                        <a href={social.url} key={i} target="_blank" rel="noopener noreferrer">
                                            {social.platform}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
            </div>
        </div>
        </div>

    );
}

export default About;