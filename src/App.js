import logo from './logo.svg';
import circle from './circle.jpg';
import './App.css';
function App() {
  return (
    <div >
      <header>
        <div className="container">
          <a href="#"> Start Bootstrap</a>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </header>
      <section id="homeSection">
        <div className="container">
          <img src={circle} alt="" />
          <h1> Full width Pics</h1>
          <p> Landing Page Template</p>
        </div>
      </section>
      <section id="text">
        <div className="containerMini">
          <h1>Full Width Backgrounds
          </h1>
          <p>A single, lightweight helper class allows you to add engaging, full width background images to sections of your page.</p>
          <p>The universe is almost 14 billion years old, and, wow! Life had no problem starting here on Earth! I think it would be inexcusably egocentric of us to suggest that we're alone in the universe.
          </p>
        </div>
      </section>
      <section className='imageSection imageSection1'>
      </section>
      <section id="text">
        <div className="containerMini">
          <h1>Full Width Backgrounds
          </h1>
          <p>A single, lightweight helper class allows you to add engaging, full width background images to sections of your page.</p>
          <p>The universe is almost 14 billion years old, and, wow! Life had no problem starting here on Earth! I think it would be inexcusably egocentric of us to suggest that we're alone in the universe.
          </p>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>            Copyright © Your Website 2023          </p>
        </div>
      </footer>
    </div>
  );}
export default App;
