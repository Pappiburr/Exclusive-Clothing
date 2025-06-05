import { DirectoryItemContainer,BackgroundImage, DirectoryItemBody } from'./directory-item.styles.jsx';
import {Link} from 'react-router-dom';
const DirectoryItem = ({ title, imageUrl }) => (
    <DirectoryItemContainer>
        < BackgroundImage
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        />
        <DirectoryItemBody>
            <h2>{`${title.toUpperCase()}`}</h2>
            <p><Link to={`/shop/${title.toLowerCase()}`}>Shop Now</Link></p>
        </DirectoryItemBody>
    </DirectoryItemContainer>  
);



export default DirectoryItem