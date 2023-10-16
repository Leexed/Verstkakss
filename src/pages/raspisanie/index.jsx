import React from "react";
import './style.scss';
import { Link } from "react-router-dom";

const RaspisaniePage = () => (
    <div className={'raspis'}>
        <div className={'raspis__raspz'}>
            <div>РАСПИСАНИЕ<br/> ЗАНЯТИЙ</div>
        </div>
        <div className={'raspis__brnline'}>
            <div className={'raspis__brn'}>
                <div>Барнаул</div>
            </div>
            <div className={'raspis__line'}>
                <img src={'./assets/imgras/line.png'} />
            </div>
        </div>
        <div className={'raspis__martstr'}>
            <div className={'raspis__mart'}>
                <img src={'./assets/imgras/mart.png'} />
            </div>
            <div className={'raspis__date'}>
                <div className={'raspis__str1'}>
                    <img src={'./assets/imgras/strel1.svg'} />
                </div>
                    <div>01.03 – 07.03</div>
                    <div className={'raspis__str2'}>
                    <img src={'./assets/imgras/strel2.svg'} />
                </div>
            </div>

        </div>
        <div className={'raspis__strlow'}>
            <div className={'raspis__str3'}>
                <img src={'./assets/imgras/strel3.png'} />
            </div>
            <div className={'raspis__low'}>
                <div>LOW BODY POWER</div>
            </div>
        </div>
        <div className={'raspis__info'}>
            <div className={'raspis__box1'}>
                <div className={'raspis__card1'}>
                    <div className={'raspis__block1'}>
                        <img src={'./assets/imgras/today.png'} />
                    </div>
                    <div className={'raspis__todtext'}>
                        <div>СЕГОДНЯ</div>
                    </div>
                </div>
                <div className={'raspis__card2'}>
                    <div className={'raspis__block2'}>
                        <img src={'./assets/imgras/monday.png'} />
                    </div>
                    <div className={'raspis__monday'}>
                        <div>ПОНЕДЕЛЬНИК</div>
                    </div>
                    <div className={'raspis__0503'}>
                        <div>05.03</div>
                    </div>
                </div>
                <div className={'raspis__card3'}>
                    <div className={'raspis__block3'}>
                        <img src={'./assets/imgras/time.png'} />
                    </div>
                    <div className={'raspis__timetext'}>
                        <div>22:00 –<br/> 23:00</div>
                    </div>
                </div>
                <div className={'raspis__card4'}>
                    <div className={'raspis__block4'}>
                        <img src={'./assets/imgras/trener.png'} />
                    </div>
                    <div className={'raspis__trener'}>
                        <div className={'raspis__chel'}>
                            <div className={'raspis__foto'}>
                                <img src={'./assets/imgras/nastya.png'} />
                            </div>
                            <div className={'raspis__name'}>
                                <div>АНАСТАСИЯ<br/> ГОЛОШУБОВА</div>
                            </div>
                        </div>
                        <div className={'raspis__trenstr'}>
                            <div className={'raspis__ftren'}>
                                <div>Фитнес-тренер</div>
                            </div>
                            <div className={'raspis__str4'}>
                                <Link to={'/trener'}><img src={'./assets/imgras/strel4.png'} /></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={'raspis__box2'}>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim<br/> 
                 ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br/>
                  aliquip ex ea commodo consequat. Duis aute irure dolor in<br/>
                   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla<br/>
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in<br/> 
                    culpa qui officia deserunt mollit anim id est laborum</div>
            </div>
        </div>
        <div className={'raspis__present'}>
            <div className={'raspis__podari'}>
                <div>ПОДАРИ СВОЕЙ ДЕВУШКЕ СПОРТ</div>
            </div>
            <div className={'raspis__skidka'}>
                <div>СКИДКИ <br/> НА 8 МАРТА</div>
            </div>
            <div className={'raspis__abonement'}>
                <div>АБОНЕМЕНТЫ ОТ 1500 Р</div>
            </div>
            <div className={'raspis__ofblock'}>
                <Link to='/barnaul'><img src={'./assets/images/oformit.png'} /></Link>
            </div>           
        </div>
    </div>
);
export default RaspisaniePage;