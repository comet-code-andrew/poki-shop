import {useNavigate} from "react-router-dom";

import {BackgroundImage, Body, DirectoryItemContainer} from './directory-item.styles'

const DirectoryItem = ({ category }) => {

  const { imageUrl, title, route } = category;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}/>
      <Body className="body">
        <h2>{category.title}</h2>
        <p>{category.subtitle}</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem