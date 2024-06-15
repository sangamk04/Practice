import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn3'>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((section, index) => (
            <div className="footer-section" key={index}>
              <h3>{section.title}</h3>
              <ul>
                {section.text.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.url}>{item.list}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2021 RentUP. Designd By sangam.</span>
      </div>
    </>
  )
}

export default Footer
