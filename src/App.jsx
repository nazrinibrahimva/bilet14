import React from 'react'
import './App.css'

function App() {
  return (
    <div className='box'>
      <nav className='navbar'>
        <div><h2>Tasty</h2></div>
        <div>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Specialties</li>
            <li>Reservation</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        </nav>
        <div className='box2'>
        <center><div><h3>Tasty & Delicious Food</h3></div>
        <div><button>Book a table</button></div></center>
        <div className='container'>
          <div><input type='text' placeholder='Name'></input></div>
          <div><input type='text' placeholder='Phone'></input></div>
          <div><input type='text' placeholder='M/D/YYYY'></input></div>
          <div><input type='text'placeholder='Time'></input></div>
          <div><input type='text' placeholder='Person'></input></div>
          <div><button>Book a table</button></div>
        </div>
        </div>
      <div className='box3'>
        <div className='left'></div>
        <div className='right'>
          <div>
          <p>ABOUT TASTY</p>
          <h2>Our chef cooks the most delicious food for you</h2>
          </div>
          <div><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p></div>
          <div><p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p></div>
        </div>
      </div>
      <div className='box4'>
        <div><p>OUR MENU</p></div>
        <div><h2>Discover Our Exclusive Menu</h2></div>
        <div></div>
        <div className='menu'>
          <div className='bir'>
            <div className='bir_bir'></div>
            <div className='bir_iki'>
              <h3>Grilled Beef with potatoes</h3>
              <p>Meat, Potatoes, Rice, Tomatoe</p>
            </div>
            <div className='bir_uc'>
              <h4>$29</h4>
            </div>
          </div>
          <div className='iki'>
          <div className='iki_bir'></div>
            <div className='iki_iki'><h3>Fruit Vanilla Ice Cream</h3>
              <p>Meat, Potatoes, Rice, Tomatoe</p></div>
            <div className='iki_uc'><h4>$29</h4></div>
          </div>
          
          <div className='uc'>
            <div className='uc_bir'></div>
            <div className='uc_iki'><h3>Asian Hoisin Pork</h3>
              <p>Meat, Potatoes, Rice, Tomatoe</p></div>
            <div className='uc_uc'><h4>$29</h4></div>
          </div>
          <div className='dord'>
            <div className='dord_bir'></div>
            <div className='dord_iki'>
              <h3>Spicy Fried Rice & Bacon</h3>
              <p>Meat, Potatoes, Rice, Tomatoe</p></div>
            <div className='dord_uc'><h4>$29</h4></div>
          </div>
          <div className='bes'>
           <div className='bes_bir'></div>
            <div className='bes_iki'>
            <h3>Mango Chili Chutney</h3>
              <p>Meat, Potatoes, Rice, Tomatoe</p></div>
            </div>
            <div className='bes_uc'><h4>$29</h4></div>
          </div>
          <div className='alti'>
            <div className='alti_bir'></div>
            <div className='alti_iki'>
            <h3>Savory Watercress Chinese Pancakes</h3>
              <p>Meat, Potatoes, Rice, Tomatoe</p>
            </div>
            <div className='alti_uc'><h4>$29</h4></div>
            </div>

          
            <div className='yeddi'>
           <div className='yeddi_bir'></div>
            <div className='yeddi_iki'>
            <h3>Soup With Vegetables And Meat</h3>
              <p>Meat, Potatoes, Rice, Tomatoe</p>
            </div>
            <div className='yeddi_uc'><h4>$29</h4></div>
          </div>
          
          <div className='sekkiz'>
          <div className='sekkiz_bir'></div>
            <div className='sekkiz_iki'>
            <h3>Udon Noodles With Vegetables</h3>
              <p>Meat, Potatoes, Rice, Tomatoe</p>
            </div>
            <div className='sekkiz_uc'><h4>$29</h4></div>
            </div>

          <div className='doqquz'>
           <div className='doqquz_bir'></div>
            <div className='doqquz_iki'>
            <h3>Baked Lobster With A Garnish</h3>
              <p>Meat, Potatoes, Rice, Tomatoe</p>
            </div>
            <div className='doqquz_uc'><h4>$29</h4></div>
          </div>

          <div className='on'>
          <div className='on_bir'></div>
            <div className='on_iki'>
            <h3>Octopus with Vegetables</h3>
              <p>Meat, Potatoes, Rice, Tomatoe</p>
            </div>
            <div className='on_uc'><h4>$29</h4></div>
          </div>
        </div>
        
      </div>
    
  )
}

export default App