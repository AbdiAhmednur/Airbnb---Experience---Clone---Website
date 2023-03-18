import React from 'react';
import './/Airbnb.css';


function Footer() {
    return (
      <div className='main'>

        <div className='card-1'>
          <img src="https://runnersconnect.net/wp-content/uploads/2019/06/Katie-Zaferes-2-by-Tommy-Zaferes-e1560905773494.jpeg" className='card--img' width="150" height="100"/>
          <div className='card--stats'>
            <span>✨</span>
            <span>5.0</span>
            <span className='gray'>(6) • </span>
            <span className='gray'>USA</span>
          </div>
          <br />
          <p>Life lessons with Katie Zaferes</p>
          <p><strong>from $136</strong>/ person</p>
        </div>

        <div className='card-2'>
          <img src="https://runnersconnect.net/wp-content/uploads/2019/06/Katie-Zaferes-2-by-Tommy-Zaferes-e1560905773494.jpeg" className='card--img' width="150" height="100"/>
          <div className='card--stats'>
            <span>✨</span>
            <span>5.0</span>
            <span className='gray'>(30) • </span>
            <span className='gray'>USA</span>
          </div>
          <br />
          <p>Learning wedding photography</p>
          <p><strong>from $125</strong>/ person</p>
        </div>

        <div className='card-3'>
          <img src="https://runnersconnect.net/wp-content/uploads/2019/06/Katie-Zaferes-2-by-Tommy-Zaferes-e1560905773494.jpeg" className='card--img' width="150" height="100"/>
          <div className='card--stats'>
            <span>✨</span>
            <span>4.8</span>
            <span className='gray'>(2) • </span>
            <span className='gray'>USA</span>
          </div>
          <br />
          <p>Group Mountain Biking</p>
          <p><strong>from $50</strong>/ person</p>
        </div>
      </div>
    );
  }
  
  export default Footer;
  
  


// an example how to write a component with two words below is an example of how to write it 

/*function MyComponent() {
    return (
        <div>
            <small>I am Small </small>
        </div>
    )
}*/


