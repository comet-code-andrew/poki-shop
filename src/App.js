import './categories.styles.scss'

const App = () => {

  const categories = [
    {
      id: 1,
      title: "Chris's Plushies",
      subtitle: 'Gotta catch em all!'
    },
    {
      id: 2,
      title: "Los's rootin tootin cowboy hides",
      subtitle: 'Gotta catch em all!'
    },
    {
      id: 3,
      title: 'Tavios Gambling Wares',
      subtitle: 'Gotta catch em all!'
    },
    {
      id: 4,
      title: 'Kevins Ninja Arsenal',
      subtitle: 'Gotta catch em all!'
    },
    {
      id: 5,
      title: 'Juans Marvel Comics',
      subtitle: 'Gotta catch em all!'
    }
  ]

  return (
    <>

      <div className="categories-container">
        {categories.map((category) => (
          <div key={category.id} className="category-container">
            {/*img*/}
            <div className="category-body-container">
              <h2>{category.title}</h2>
              <p>{category.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

    </>
  );
}

export default App;
