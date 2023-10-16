import React from "react";
import './style.scss';
import { Link } from "react-router-dom";


const BarnaulPage = () => (
    <div className={'barnaul'}>
        <div className={'barnaul__brnblock'}>
            <img src={'./assets/imgbrn/brnblock.png'} />
        </div>
        <div className={'barnaul__present'}>
            <div className={'barnaul__podari'}>
                <div>ПОДАРИ СВОЕЙ ДЕВУШКЕ СПОРТ</div>
            </div>
            <div className={'barnaul__skidka'}>
                <div>СКИДКИ <br/> НА 8 МАРТА</div>
            </div>
            <div className={'barnaul__abonement'}>
                <div>АБОНЕМЕНТЫ ОТ 1500 Р</div>
            </div>
            <div className={'barnaul__block'}>
                <Link to='/raspisanie'><img src={'./assets/images/oformit.png'} /></Link>
            </div>           
        </div>
        <div className={'barnaul__gostvizit'}>
            <div className={'barnaul__gvbox'}>
                <div className={'barnaul__zapgv'}>
                    <div>ЗАПИСАТЬСЯ<br/> НА ГОСТЕВОЙ<br/> ВИЗИТ</div>
                </div>
                <div className={'barnaul__gvtxt'}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Integer tincidunt est eu mollis finibus.</div>
                </div>
            </div>
            <div className="forma">
            <form>
            <div>
                <label htmlFor="Ваше имя">Ваше имя</label>
                <input id="Ваше имя" type="text" />
            </div>
            <div>
                <label htmlFor="Email">Email</label>
                <input id="Email" type="email" />
            </div>
            <div>
                <label htmlFor="message">Телефон</label>
                <textarea id="message" />
            </div>
            <button type="submit">Отправить</button>
            </form>
    </div>

            
        </div>
        <div className={'barnaul__line'}>
                <div className={'barnaul__line1'}>
                    <img src={'./assets/imgbrn/line1.png'} />
                </div>
                <div className={'barnaul__line2'}>
                    <img src={'./assets/imgbrn/line2.png'} />
                </div>
        </div>
        <div className={'barnaul__kkstrel'}>
            <div className={'barnaul__kk'}>
                <div className={'barnaul__kkcard'}>
                    <div>КЛУБНЫЕ КАРТЫ</div>
                </div>
                <div className={'barnaul__kktext'}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Integer tincidunt est eu mollis finibus.</div>
                </div>
            </div>
            <div className={'barnaul__strelki'}>
                <div className={'barnaul__strel12'}>
                    <img src={'./assets/imgbrn/strel12.png'} />
                </div>
                <div className={'barnaul__strel34'}>
                    <img src={'./assets/imgbrn/strel34.png'} />
                </div>
            </div>
        </div>
        <div className={'barnaul__boxcards'}>
            <div className={'barnaul__card1'}>
                <div className={'barnaul__c1'}>
                    <img src={'./assets/imgbrn/c1.png'} />
                </div>
                <div className={'barnaul__dnevname'}>
                        <div>ДНЕВНАЯ<br/> КАРТА</div>
                </div>
                <div className={'barnaul__dnevtext'}>
                        <div>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</div>
                </div>
                <div className={'barnaul__do5'}>
                        <div>ПОСЕЩЕНИЕ ДО 17:00</div>
                </div>
                <div className={'barnaul__oform1'}>
                        <img src={'./assets/imgbrn/oform1.png'} />
                </div>
            </div>
            <div className={'barnaul__card2'}>
                <div className={'barnaul__c2'}>
                    <img src={'./assets/imgbrn/c2.png'} />
                </div>
                <div className={'barnaul__polnname'}>
                        <div>КАРТА<br/> ПОЛНОГО<br/> ДНЯ</div>
                </div>
                <div className={'barnaul__polntext'}>
                        <div>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</div>
                </div>
                <div className={'barnaul__poln'}>
                        <div>ПОСЕЩЕНИЕ В ЛЮБОЕ ВРЕМЯ<br/> РАБОТЫ КЛУБА</div>
                </div>
                <div className={'barnaul__oform2'}>
                        <img src={'./assets/imgbrn/oform2.png'} />
                </div>
            </div>
            <div className={'barnaul__card3'}>
                <div className={'barnaul__c3'}>
                    <img src={'./assets/imgbrn/c3.png'} />
                </div>
                <div className={'barnaul__childname'}>
                        <div>ДЕТСКАЯ<br/> КАРТА</div>
                </div>
                <div className={'barnaul__childtext'}>
                        <div>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</div>
                </div>
                <div className={'barnaul__poschild'}>
                        <div>ПОСЕЩЕНИЕ В ЛЮБОЕ ВРЕМЯ<br/> РАБОТЫ КЛУБА ДЛЯ ДЕТЕЙ</div>
                </div>
                <div className={'barnaul__oform3'}>
                        <img src={'./assets/imgbrn/oform3.png'} />
                </div>
            </div>
        </div>
    </div>
);
export default BarnaulPage;