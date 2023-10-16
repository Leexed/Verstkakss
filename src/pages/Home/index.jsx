import React from "react";
import './style.scss';
import { Link } from "react-router-dom";
import { YMaps, Map } from '@pbe/react-yandex-maps';

const HomePage = () => (
    <div className={'home'}>
        <div className={'home__present'}>
            <div className={'home__present__podari'}>
                <div>ПОДАРИ СВОЕЙ ДЕВУШКЕ СПОРТ</div>
            </div>
            <div className={'home__present__skidka'}>
                <div>СКИДКИ <br/> НА 8 МАРТА</div>
            </div>
            <div className={'home__present__abonement'}>
                <div>АБОНЕМЕНТЫ ОТ 1500 Р</div>
            </div>
            <div className={'home__present__block'}>
                <Link to='/barnaul'><img src={'./assets/images/oformit.png'} /></Link>
            </div>           
        </div>
        <div className={'home__whitefon'}>
            <div className={'home__whitefon__club'}>
                <div>КЛУБЫ</div>
            </div>
            <div className={'home__clubtext'}>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit.<br/> Integer tincidunt est eu mollis finibus.</div>
            </div>
        </div>
        <div className={'home__box1'}>
            <div className={'home__card1'}>
                <img src={'/assets/images/card1.png'} />
            </div>
            <div className={'home__nefbrn'}>
                <div>NEF БАРНАУЛ</div>
            </div>
            <div className={'home__cardadress'}>
                <div>ТАКОЙ ТО<br/> АДРЕС, 23</div>
            </div>
            <div className={'home__strelka'}>
                <Link to={'/barnaul'}><img src={'/assets/images/ellipsestr.png'} /></Link>
            </div>
        </div>
        <div className={'home__training'}>
            <div>ОБУЧЕНИЕ</div>
        </div>
        <div className={'home__trainingtext'}>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Integer tincidunt est eu mollis finibus.</div>
        </div>
        <div className={'home__twocards'}>
            <div className={'home__card2'}>
                <div className={'home__box2'}>
                <img src={'/assets/images/box2.png'} />
                </div>
                <div className={'home__kurs1'}>
                <img src={'/assets/images/kurs1.png'} />
                </div>
                <div className={'home__onof1'}>
                <img src={'/assets/images/onof1.png'} />
                </div>
                <div className={'home__uspptr'}>
                    <div>УСПЕШНЫЙ <br/>ПЕРСОНАЛЬНЫЙ<br/> ТРЕНЕР</div>
                </div>
                <div className={'home__strelcard'}>
                    <Link to={'/training'}><img src={'/assets/images/ellipsestr2.png'} /></Link>
                </div>
            </div>
            <div className={'home__card3'}>
                <div className={'home__box3'}>
                <img src={'/assets/images/box3.png'} />
                </div>
                <div className={'home__kurs2'}>
                <img src={'/assets/images/kurs2.png'} />
                </div>
                <div className={'home__onof2'}>
                <img src={'/assets/images/onof2.png'} />
                </div>
                <div className={'home__uspptr2'}>
                <div>УСПЕШНЫЙ <br/>ПЕРСОНАЛЬНЫЙ<br/> ТРЕНЕР</div>
                </div>
                <div className={'home__textcard'}>
                <div>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.</div>
                </div>
                <div className={'home__strelcard2'}>
                    <Link to={'/training'}><img src={'/assets/images/ellipsestr.png'} /></Link>
                </div>
                <div className={'home__chel1'}>
                    <img src={'/assets/images/Mask.png'} />
                </div>
                <div className={'home__chel2'}>
                    <img src={'/assets/images/Mask1.png'} />
                </div>
                <div className={'home__chel3'}>
                    <img src={'/assets/images/Mask2.png'} />
                </div>
            </div>
        </div>
        <div className={'home__redwe'}>
            <div className={'home__wenahod'}>
                <div>МЫ НАХОДИМСЯ</div>
            </div>
            <div className={'home__line1'}>
                <img src={'/assets/images/line 1.png'} />
            </div>
            <div className={'home__barnaul'}>
                <div>Барнаул</div>
            </div>
            <div className={'home__line2'}>
                <img src={'/assets/images/line2.png'} />
            </div>
        </div>
        <div className={'home__info'}>
            <div className={'home__adresname'}>
                <div className={'home__adres'}>
                    <div>Адрес</div>
                </div>
                <div className={'home__prospekt'}>
                    <div>ПРОСПЕКТ <br/>МАРШАЛА<br/> ЖУКОВА 4/1</div>
                </div>
            </div>
            <div className={'home__otdelres'}>
                <div className={'home__kontakt'}>
                <div>Контакты</div>
                </div>
                <div className={'home__otdelpr'}>
                <div>Отдел продаж</div>
                </div>
                <div className={'home__strtime1'}>
                    <div className={'home__znak1'}>
                        <img src={'/assets/images/znaktime.png'} />
                    </div>
                    <div className={'home__time1'}>
                        <div>9:00 – 22:00</div>
                    </div>
                </div>
                <div className={'home__resepshen'}>
                    <div>Ресепшен</div>
                </div>
                <div className={'home__strtime2'}>
                    <div className={'home__znak2'}>
                        <img src={'/assets/images/znaktime.png'} />
                    </div>
                    <div className={'home__time2'}>
                        <div>9:00 – 22:00</div>
                    </div>
                </div>
            </div>
            <div className={'home__numers'}>
                <div className={'home__num1'}>
                    <div>8-919-483-51-51</div>
                </div>
                <div className={'home__num2'}>
                    <div>8-919-483-51-51</div>
                </div>
                <div className={'home__num3'}>
                    <div>8-919-483-51-51</div>
                </div>
                <div className={'home__num4'}>
                    <div>8-919-483-51-51</div>
                </div>
            </div>
            <div className={'home__socreg'}>
                <div className={'home__socseti'}>
                    <div>Социальные сети</div>
                </div>
                <div className={'home__icons1'}>
                    <div className={'home__insta1'}>
                        <img src={'/assets/images/insta1.png'} />
                    </div>
                    <div className={'home__tgwa'}>
                        <img src={'/assets/images/tgwa.png'} />
                    </div>
                </div>
                <div className={'home__regim'}>
                    <div>Режим работы</div>
                </div>
                <div className={'home__pn-pt'}>
                    <div className={'home__pn'}>
                        <img src={'/assets/images/pn.png'} />
                    </div>
                    <div className={'home__vt'}>
                        <img src={'/assets/images/vt.png'} />
                    </div>
                    <div className={'home__sr'}>
                        <img src={'/assets/images/sr.png'} />
                    </div>
                    <div className={'home__cht'}>
                        <img src={'/assets/images/cht.png'} />
                    </div>
                    <div className={'home__pt'}>
                        <img src={'/assets/images/pt.png'} />
                    </div>
                </div>
                <div className={'home__time3'}>
                    <div>8:00 – 22:00</div>
                </div>
            </div>
            <div className={'home__linevert'}>
                    <img src={'/assets/images/linevert.png'} />
            </div>
            <div className={'home__last'}>
                <div className={'home__sb-vs'}>
                    <div className={'home__sb'}>
                        <img src={'/assets/images/sb.png'} />
                    </div>
                    <div className={'home__vs'}>
                        <img src={'/assets/images/vs.png'} />
                    </div>
                </div>
                <div className={'home__time4'}>
                    <div>10:00 – 22:00</div>
                </div>
            </div>
        </div>

        <YMaps>
          <div className='map' >
          <Map  width='900px' height='400px' defaultState={{ center: [53.331634, 83.682075], zoom: 17 }} />
          </div>
        </YMaps>
    </div>
);
export default HomePage;