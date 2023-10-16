import React from "react";
import './style.scss'
import { Link } from "react-router-dom";
import classNames from 'classnames'


export const HeaderPage = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <React.Fragment>
         <div className={'header'}>
        <div className={'header__logo'}>
            <Link to='/'><img src={'/assets/logo.svg'} /></Link>
        </div>
        <div className={'header__menu'}>
            <div> <Link to={'/trener'}>Тренер</Link></div>
            <div> <Link to={'/barnaul'}>Барнаул</Link></div>
            <div> <Link to={'/raspisanie'}>Расписание</Link></div>
            <div> <Link to={'/training'}>Обучение</Link></div>
        </div>
        <div className={'header__icons'}>
            <img src={'/assets/headtgwa.png'} />
        </div>
        </div>

        <div className={'header-mobile'}>
        <div className={'header-mobile__menu'}>
        <div className={'header__logoo'}>
            <Link to='/'><img src={'/assets/logo.svg'} /></Link>
        </div>
          <div onClick={() => setIsOpen(!isOpen)}>
            <img src={'/assets/burger.svg'} />
          </div>
        </div>
        <div
          className={classNames('header-mobile__block', {
            'header-mobile__block-open': isOpen,
          })}
        >
          {isOpen && (
            <>
              <div>
                <Link to={'/trener'}>Тренер</Link>
              </div>
              <div>
                <Link to={'/barnaul'}>Барнаул</Link>
              </div>
              <div>
                <Link to={'/raspisanie'}>Расписание</Link>
              </div>
              <div>
                <Link to={'/training'}>Обучение</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </React.Fragment>
    )
}