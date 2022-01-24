import './App.css'
{/* import the zodiac array */}
import Header from './Header/Header.js'
import Main from './Main/Main.js'
import Footer from './Footer/Footer.js'


function App({ zodiac }) {
  return (
    <div className="App"> 
      {/* import and use the Header. Main, and Footer components here */}

      {/* the Header component needs a string passed in as the `name` prop */}
      <Header name='Sam Melius' />
      {/* the Footer component needs a year passed in as the `year` prop */}
      <Footer year='2022' />
      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
      <Main zodiac={zodiac} />
    </div>
  )
}

export default App
