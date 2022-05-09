import React from 'react';
import pay from '../../icons/pay.svg'
import superman from '../../img/Superman.png'

const History = () => {
  return (    
    <div className='container'>
      <div className='menu'><a href="http://mail.ru">Главная</a>-<a href="http://mail.ru">Обучение</a></div>
      <div className ='history'>
        <div className='history__wrapper'>
          <h1><span>Обучающие курсы</span> для поставщиков на маркетплейсы</h1>
          <div className='history__price'>
            <img className='history__price_img' src={pay} alt="pay"></img>
            <div>от <span>19 900</span> ₽</div>
          </div>
          <div className='history__content'>
            Обучающие курсы по работе и продвижению на маркетплейсах от практикующих селлеров
            <br/>Добро пожаловать в Академию. Это место для эффективного обучения, где мы рассказываем, как работают маркетплейсы и никогда не вдаемся 
          в теорию, которая не понадобится на практике.
          <br/>Наши уроки помогут понять логику работы площадок и взять управление продажами в свои руки, а не действовать наугад. Становись экспертом в работе с маркетплейсами и увеличивай свою прибыль.
          </div>
        </div>
        <div className='history__man'><img className='history__man_img' src={superman} alt="superman"></img></div>
        
      </div>
    </div>
  
  );
}
  
export default History;