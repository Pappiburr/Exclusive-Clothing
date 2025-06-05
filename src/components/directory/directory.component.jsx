import {useSelector} from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector.js';
import DirectoryItem from '../directory-item/directory-item.component';
import {DirectoryContainer} from'./directory.styles.jsx';
import { useEffect } from 'react';

const Directory = ({ onCategoriesLoad }) => {
  const categoriesMap = useSelector(selectCategoriesMap);
  
  useEffect(() => {
    if (categoriesMap && onCategoriesLoad) {
      const categories = Object.entries(categoriesMap).map(([title, items]) => ({
        id: title.toLowerCase(),
        title: title,
        imageUrl: items[0]?.imageUrl
      }));
      onCategoriesLoad(categories);
    }
  }, [categoriesMap, onCategoriesLoad]);

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