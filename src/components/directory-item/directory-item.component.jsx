import './directory-item.styles.scss';
import {Link} from 'react-router-dom';
const DirectoryItem = ({ title, imageUrl }) => (
    <div className="directory-item-container">
        <div 
            className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        />
        <div className="directory-item-body">
            <h2>{title}</h2>
            <Link to={`/shop/${title.toLowerCase()}`}>Shop Now</Link>
        </div>
    </div>  
);



export default DirectoryItem