import ProductCard from "../../components/product-card/product-card.component";
import {useContext, useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import {CategoriesContext} from "../../contexts/categories.context";

import './category.styles.scss'
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/categories/category.selector";

const Category = () => {
  console.log('render/re-rendering category component')
  const categoriesMap = useSelector(selectCategoriesMap)
  // const { categoriesMap } = useContext(CategoriesContext);
  const { category } = useParams();
  const [ products, setProducts ] = useState(categoriesMap[category])

  useEffect(() => {
    console.log('effect fired calling setProducts')
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category])

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className='category-container'>
          {products && products.map((product) => <ProductCard key={product.id} product={product}/>)}
      </div>
    </>
  )

}

export default Category;
