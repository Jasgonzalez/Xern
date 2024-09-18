import xernIcon from './assets/fullI_icon_nospace.png';

function Header() {
    return (
        <section className="nav-container">
            <nav>
                <img className='logo' src={xernIcon} alt="XERN Icon" />
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Work</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default Header;
