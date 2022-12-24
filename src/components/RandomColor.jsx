import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const RandomColor = ({ color, user }) => {
    const { name, picture, email, phone,  location} = user;
    const { first, last, title} = name;
    const { large, medium, thumbnail} = picture;
    const { city, country, state} =location;
    document.body.style.backgroundColor = color;

    return (
        <div
        className="random-color-card"
        style={{ color : color }}>
            
            <div className="nameCss">
                {title} {first} {last}
            </div>

            <div><img className="imagePhoto" src={large} alt="Logo" />
            </div>

            <div className="emailCss">
                <EmailIcon></EmailIcon>
                {email}
            </div>

            <div className="phoneCss">
                <LocalPhoneIcon></LocalPhoneIcon>
                {phone}
            </div>
            
            <div className="locationCss">
                <LocationOnIcon></LocationOnIcon>
                {country} {city} {state}
            </div>
            
        </div>
    )
}

export default RandomColor
