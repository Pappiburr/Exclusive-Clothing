import { useContext } from 'react';
import { CategoriesContext } from '../contexts/categories.context';
import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const Directory = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  
  return (
    <div className="directory-container">
      {categoriesMap && 
        Object.entries(categoriesMap).map(([title, items]) => (
          <DirectoryItem 
            key={title} 
            title={title} 
            imageUrl={items[0]?.imageUrl} 
          />
        ))
      }
    </div>
  );
};
export default Directory;