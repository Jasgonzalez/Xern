import Carousel from 'react-bootstrap/Carousel';
import jason from './assets/jason-photo.jpg'; // Replace with actual paths
import karan from './assets/karan-photo.jpg';
import abdelilah from './assets/abdelilah-photo.jpg';

function Team() {
    const teamMembers = [
        {
            name: "Jason Gonzalez",
            image: jason,
            description: "Lead Developer", 
            socials: [
                { platform: "LinkedIn", url: "https://linkedin.com/in/jason" },
                { platform: "Twitter", url: "https://twitter.com/jason" },
            ],
        },
        {
            name: "Karan Patel",
            image: karan,
            description: "UI/UX Designer",
            socials: [
                { platform: "LinkedIn", url: "https://linkedin.com/in/karan" },
                { platform: "Instagram", url: "https://instagram.com/karan" },
            ],
        },
        {
            name: "Abdelilah Hanim",
            image: abdelilah,
            description: "Project Manager",
            socials: [
                { platform: "LinkedIn", url: "https://linkedin.com/in/abdelilah" },
                { platform: "Facebook", url: "https://facebook.com/abdelilah" },
            ],
        }
    ];

    return (
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
    );
}

export default Team;
