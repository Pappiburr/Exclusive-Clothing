import { useContext } from 'react';
import { CategoriesContext } from '../contexts/categories.context';
import DirectoryItem from '../directory-item/directory-item.component';
import {DirectoryContainer} from'./directory.styles.jsx';

const Directory = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  
  return (
    <DirectoryContainer>
      {categoriesMap && 
        Object.entries(categoriesMap).map(([title, items]) => (
          <DirectoryItem 
            key={title} 
            title={title} 
            imageUrl={items[0]?.imageUrl} 
          />
        ))
      }
    </DirectoryContainer>
  );
};
export default Directory;