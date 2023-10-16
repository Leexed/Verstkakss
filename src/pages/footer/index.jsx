import React from "react";
import './style.scss'
import { Link } from "react-router-dom";

export const FooterPage = () => {
    return <div className={'footer'}>
        <div className={'footer__info'}>
            <div className={'footer__block1'}>
                <div className={'footer__logo'}>
                    <div><Link to='/'><img src={'/assets/logo.svg'} /></Link></div>
                </div>
                <div className={'footer__text'}>
                    <div>OOO «УК НЭФ»</div>
                </div>
            </div>
            <div className={'footer__menu'}>
                <div className={'footer__row1'}>
                    <div className={'footer__clubs'}>
                        <div>Клубы</div>
                    </div>
                    <div className={'footer__akcii'}>
                        <div>Акции</div>
                    </div>
                    <div className={'footer__rasp'}>
                        <div> <Link to={'/raspisanie'}>Расписание</Link></div>
                    </div>
                </div>
                <div className={'footer__row2'}>
                    <div className={'footer__train'}>
                        <div> <Link to={'/training'}>Обучение</Link></div>
                    </div>
                    <div className={'footer__onas'}>
                        <div>О нас</div>
                    </div>
                </div>
            </div>
            <div className={'footer__block2'}>
                <div className={'footer__numer'}>
                    <div>8-800-511-51-20</div>
                </div>
                <div className={'footer__zvonok'}>
                    <div>ЗВОНОК БЕСПЛАТНЫЙ</div>
                </div>
                <div className={'footer__dogovor'}>
                    <div>Договор об оказании образовательных услуг</div>
                </div>
                <div className={'footer__politika'}>
                    <div>Политика обработки персональных данных</div>
                </div>
            </div>
        </div>
        <div className={'footer__line'}>
            <img src={'/assets/images/Line16.png'} />
        </div>
        <div className={'footer__last'}>
            <div className={'footer__nef'}>
                <div>NEW ERA OF FITNESS</div>
            </div>
            <div className={'footer__time'}>
                <div>2019 – 2021</div>
            </div>
            <div className={'footer__icons'}>
                <div className={'footer__insta'}>
                    <img src={'/assets/images/insta2.png'} />
                </div>
                <div className={'footer__tg'}>
                    <img src={'/assets/images/tg.png'} />
                </div>
                <div className={'footer__whapp'}>
                    <img src={'/assets/images/whatsapp.png'} />
                </div>
            </div>
        </div>
    </div>
}