import './categories.styles.scss'
import DirectoryItem from "../directory-item/directory-item.component";

const categories = [
  {
    id: 1,
    title: "Kodis pokis",
    subtitle: 'Gotta catch em all!',
    imageUrl: 'https://ik.imagekit.io/qfqsr7s9y/kodis-pokis.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675994134567',
    route: 'shop/hats'

  },
  {
    id: 2,
    title: "Los's rootin tootin cowboy hides",
    subtitle: 'YEEEHAWWW!',
    imageUrl: 'https://ik.imagekit.io/qfqsr7s9y/los-cowboy-booys.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675993887308',
    route: 'shop/jackets'

  },
  {
    id: 3,
    title: 'Tavios Gambling Wares',
    subtitle: 'Theres no better form of addiction',
    imageUrl: 'https://ik.imagekit.io/qfqsr7s9y/tavio-gambling.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675993150035',
    route: 'shop/sneakers'

  },
  {
    id: 4,
    title: 'Kevins Ninja Arsenal',
    subtitle: 'One with the blade.',
    imageUrl: 'https://ik.imagekit.io/qfqsr7s9y/kevins-ninja.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675993887005',
    route: 'shop/jackets'


  },
  {
    id: 5,
    title: 'Juans Marvel Comics',
    subtitle: 'Gotta catch em all!',
    imageUrl: 'https://ik.imagekit.io/qfqsr7s9y/juans-comics.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675993887367'
  }
]

const Categories = () => {

  return(
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category}/>
      ))}
    </div>
  )
}

export default Categories

