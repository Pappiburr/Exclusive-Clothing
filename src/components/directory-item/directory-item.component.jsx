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
            <h2>{title}</h2>
            <Link to={`/shop/${title.toLowerCase()}`}>Shop Now</Link>
        </DirectoryItemBody>
    </DirectoryItemContainer>  
);



export default DirectoryItem