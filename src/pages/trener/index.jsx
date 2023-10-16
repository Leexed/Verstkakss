import React from "react";
import './style.scss';
import { Link } from "react-router-dom";

const TrenerPage = () => (
    <div className={'trener'}>
        <div className={'trener__raspz'}>
            <div>РАСПИСАНИЕ<br/> ЗАНЯТИЙ</div>
        </div>
        <div className={'trener__brnline'}>
            <div className={'trener__brn'}>
                <div>Барнаул</div>
            </div>
            <div className={'trener__line'}>
                <img src={'./assets/imgtren/line.png'} />
            </div>
        </div>
        <div className={'trener__martstr'}>
            <div className={'trener__mart'}>
                <img src={'./assets/imgtren/mart.png'} />
            </div>
            <div className={'trener__str1'}>
                <img src={'./assets/imgtren/str1.png'} />
            </div>
            <div className={'trener__daymounth'}>
                <div className={'trener__blockdate'}>
                    <img src={'./assets/imgtren/blockdate.png'} />
                </div>
                <div className={'trener__date'}>
                    <div>01.03 – 07.03</div>
                </div>
            </div>
            <div className={'trener__str2'}>
                <img src={'./assets/imgtren/str2.png'} />
            </div>
        </div>
        <div className={'trener__strtren'}>
            <div className={'trener__str3'}>
                <Link to={'/raspisanie'}><img src={'./assets/imgtren/str3.png'} /></Link>
            </div>
            <div className={'trener__tren'}>
                <div>ТРЕНЕР</div>
            </div>
        </div>
        <div className={'trener__info'}>
            <div className={'trener__box1'}>
                <div className={'trener__foto'}>
                    <img src={'./assets/imgtren/foto.png'} />
                </div>
                <div className={'trener__name'}>
                    <div>АНАСТАСИЯ<br/> ГОЛОШУБОВА</div>
                </div>
            </div>
            <div className={'trener__box2'}>
                <div className={'trener__card12'}>
                    <div className={'trener__card1'}>
                        <div className={'trener__spec'}>
                            <img src={'./assets/imgtren/specbox.png'} />
                        </div>
                        <div className={'trener__txtspec'}>
                            <div>СПЕЦИАЛИЗАЦИЯ</div>
                        </div>
                        <div className={'trener__punkt1'}>
                            <div className={'trener__dot1'}>
                                <img src={'./assets/imgtren/dot1.png'} />
                            </div>
                            <div className={'trener__text1'}>
                                <div className={'trener__txt1'}>
                                    <div>LES MILLS</div>
                                </div>
                                <div className={'trener__txt2'}>
                                    <div>STEP AEROBICS</div>
                                </div>
                                <div className={'trener__txt3'}>
                                    <div>LOW BODY PUMP</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'trener__card2'}>
                        <div className={'trener__block2'}>
                            <img src={'./assets/imgtren/obrbox.png'} />
                        </div>
                        <div className={'trener__obr'}>
                            <div>ОБРАЗОВАНИЕ</div>
                        </div>
                        <div className={'trener__text2'}>
                            <div>ВРАЧ-ЛЕЧЕБНИК. ВЫСШЕЕ <br/>МЕДИЦИНСКОЕ ОБРАЗОВАНИЕ <br/>(АГМУ 2018)</div>
                        </div>
                    </div>
                </div> 
                <div className={'trener__card3'}>
                    <div className={'trener__block3'}>
                        <img src={'./assets/imgtren/dostbox.png'} />
                    </div>
                    <div className={'trener__txtdost'}>
                        <div>ДОСТИЖЕНИЯ</div>
                    </div>
                    <div className={'trener__punkt3'}>
                        <div className={'trener__stolb1'}>
                            <div className={'trener__dot2'}>
                                <img src={'./assets/imgtren/dot2.png'} />
                            </div>
                            <div className={'trener__text3'}>
                                <div className={'trener__txt4'}>
                                    <div>такой-то такой-то</div>
                                </div>
                                <div className={'trener__txt5'}>
                                    <div>и вот такой</div>
                                </div>
                                <div className={'trener__txt6'}>
                                    <div>и еще вот такой</div>
                                </div>
                                <div className={'trener__txt7'}>
                                    <div>а еще вот такой длинный классный<br/>
                                     распрекрасный</div>
                                </div>
                            </div>
                        </div>
                        <div className={'trener__stolb2'}>
                            <div className={'trener__dot3'}>
                                <img src={'./assets/imgtren/dot3.png'} />
                            </div>
                            <div className={'trener__text4'}>
                                <div className={'trener__txt8'}>
                                    <div>такой-то такой-то</div>
                                </div>
                                <div className={'trener__txt9'}>
                                    <div>и вот такой</div>
                                </div>
                                <div className={'trener__txt10'}>
                                    <div>и еще вот такой</div>
                                </div>
                                <div className={'trener__txt11'}>
                                    <div>а еще вот такой длинный классный<br/>
                                     распрекрасный</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={'trener__present'}>
            <div className={'trener__podari'}>
                <div>ПОДАРИ СВОЕЙ ДЕВУШКЕ СПОРТ</div>
            </div>
            <div className={'trener__skidka'}>
                <div>СКИДКИ <br/> НА 8 МАРТА</div>
            </div>
            <div className={'trener__abonement'}>
                <div>АБОНЕМЕНТЫ ОТ 1500 Р</div>
            </div>
            <div className={'trener__ofblock'}>
                <Link to='/barnaul'><img src={'./assets/images/oformit.png'} /></Link>
            </div>           
        </div>
    </div>
);
export default TrenerPage;