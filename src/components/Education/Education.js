import React from 'react';
import icon1 from '../../icons/iconm1.svg'
import icon2 from '../../icons/iconm2.svg'
import icon3 from '../../icons/iconm3.svg'
import icon4 from '../../icons/iconm4.svg'

const Education = () => {
  return (    
    <div className='container'>
      <div className ='education'>
            <h2>Обучение по продажам на<br/> маркетплейсах от <div class="education__log">stat<span className='education__color'>4</span>market</div></h2>
            <div class="education__opinion">«Увеличение реальной прибыли, конкретика и ключевые инструменты,
                которые дают результат» — на этом тезисе созданы наши курсы
            </div>
            <div className='education__cards'>
                <div class="education__cards_card">
                    <div class="education__cards_card_img"><img src={icon1} alt="icon1"></img></div>
                    <h3>Наше обучение построено очень лаконично и просто</h3>
                    <p>Все занятия короткие по продолжительности для легкого восприятия и понимания. Мы даем в уроках только конкретику, без лишней теории и “воды”.</p>
                </div>
                <div class="education__cards_card">
                <div class="education__cards_card_img"><img src={icon2} alt="icon2"></img></div>
                    <h3>Ко всем урокам есть дополнительные материалы</h3>
                    <p>Презентации, краткие инструкции, чек-листы и памятки по работе с маркетплейсами.</p>
                </div>
                <div class="education__cards_card">
                    <div class="education__cards_card_img"><img src={icon3} alt="icon3"></img></div>
                    <h3>Наше обучение — практико-ориентированное</h3>
                    <p>Поэтому после прохождения уроков ты будешь выполнять задания, которые помогут тебе закрепить полученные знания на практике.</p>
                </div>
                <div class="education__cards_card">
                    <div class="education__cards_card_img"><img src={icon4} alt="icon4"></img></div>
                    <h3>Создатели нашей Академии</h3>
                    <p>Действующие селлеры с большим опытом в продажах на маркетплейсах, эксперты компании stat4market, а также профессиональные лекторы и методологи.</p>
                </div>
            </div>
        </div>
    </div>
  
  );
}
  
export default Education;