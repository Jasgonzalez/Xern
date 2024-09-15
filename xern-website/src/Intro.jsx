import fullXernIcon from './assets/FullLogo_Transparent_NoBuffer.png'
import xernIcon from './assets/fullI_icon_nospace.png';


function Intro(){
    
    return ( 
    
            <div className="intro-container">
                <div className="intro">
                    <img className='Full-logo' src={fullXernIcon} alt="Full-logo" />
                </div>
                <div className="button">
                <button><a href="">Contact Us</a></button>
            </div>
            </div>
           
            
       
    );
}

export default Intro;