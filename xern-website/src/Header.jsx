import xernIcon from './assets/fullI_icon_nospace.png';


function Header() {
    return (
        <header>
            <div className='name-conatiner' >
            <h1 className='companyName' >XERN</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
