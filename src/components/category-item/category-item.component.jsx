import './category-item.styles.scss'

const CategoryItem = ({ category }) => {

  const { imageUrl, title, subtitle, id } = category;

  return (
    <div className="category-container">

      <div className="background-image" style={{
        backgroundImage: `url(${category.imageUrl})`
      }}/>

      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>{category.subtitle}</p>
      </div>
    </div>
  )
}

export default CategoryItem