import React from 'react';
import book from '../../img/Illustration.png'
import book1 from '../../img/Illustration2.png'


const Course = () => {
    return (    
      <div className='container'>
        <div className ='course'>
            <h2>Небольшая предыстория о том,<br/> почему нам можно доверять</h2>            
            <div className='course__wrapper'>
                <img className='course__book1' src={book} alt="book"></img>
                <div>
                    Свой путь в бизнесе мы начали в 2016 г. У нас были свои островные магазины в крупных ТЦ Москвы («Европейский», «Метрополис», «Мега» и др.), а также свой интернет-магазин. Мы накопили большой опыт в продвижении своих товаров за счет многочисленных запусков разных рекламных каналов и работы с блогерами.               
                </div>
            </div>
            <div className='course__wrapper'>                
                <div>
                Летом 2019 года мы вышли на маркетплейсы и после работы с ними в течение 2 месяцев приняли решение развивать только это направление. И не прогадали. Весь накопленный опыт мы направили на улучшение и продвижение наших брендов.
                <br/>Пришло время поделится знаниями и лайфхаками, которые будут собраны и доступны в нашей Академии stat4market.               
                </div>
                <img className='course__book2' src={book1} alt="book"></img>
            </div>
                    
        </div>
      </div>
    
    );
  }
    
  export default Course;