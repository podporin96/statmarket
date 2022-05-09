import React from 'react';
import four from '../../icons/four.svg';
import tel from '../../icons/tel.svg';
import arrow from '../../icons/arrow_button.svg';
// import { NavDropdown } from 'react-bootstrap';

const Navbar = () => {
    return (
      <div className='container'>
        <div className='navbar'>
          <img className='navbar__logo' src={four} alt="four"></img>
          <a className='navbar__name' href="http://mail.ru">          
            stat<span>4</span>market
          </a>
          <div className='navbar__arrow'></div>
          <div className='navbar__analytic'>Надежный сервис<br/>аналитики для поставщиков<br/>на маркетплейсы</div>
          <div class="navbar__analytics">
              Аналитика
          </div>

          {/* <div>
          <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Dropdown"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
          </div> */}


          <div class="navbar__study">
              Обучение
          </div>
          <div class="navbar__contacts">
            <img src={tel} alt="four"></img>
            <a href="tel:+79960404017" class="navbar__phone">+7 (499) 450-31-41</a>          
          </div>
          <button data-modal="entrance">
            <img src={arrow} alt="arrow"></img>
            <div className='text_btn'>Войти</div>
          </button>
        </div>
        
      </div>
    
    );
  }
  
  export default Navbar;