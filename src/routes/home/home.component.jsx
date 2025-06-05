import Directory from '../../components/directory/directory.component';
import { StyledContent, DealSection  } from './home.styles';
import { useState } from 'react';

const Home = () => {
  const [categories, setCategories] = useState([]);

  const handleCategoriesLoad = (loadedCategories) => {
    setCategories(loadedCategories);
  };

  return (
    <StyledContent>
      <Directory onCategoriesLoad={handleCategoriesLoad} />
      <DealSection>
        Here is some text
      </DealSection>
    </StyledContent>

    
  );
};

export default Home;
