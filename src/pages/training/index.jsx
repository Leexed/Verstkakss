import React from "react";
import './style.scss';
import { Link } from "react-router-dom";


const TrainingPage = () => (
    <div className={'training'}>
        <div className={'training__white'}>
            <div className={'training__card'}>
                <div className={'training__konof'}>
                    <div className={'training__kurs'}>
                        <img src={'/assets/imgtr/kurs.png'} />
                    </div>
                    <div className={'training__onof'}>
                        <img src={'/assets/imgtr/onof.png'} />
                    </div>
                </div>
                <div className={'training__strtext'}>

                    <div className={'training__trtext'}>
                    <div className={'training__str'}>
                        <Link to={'/'}><img src={'/assets/imgtr/str.png'} /></Link>
                    </div>
                        <div>Успешный<br/>персональный<br/> тренер</div>
                    </div>
                    <div className={'training__text'}>
                <div>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>
                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br/>
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea<br/>
                       commodo consequat.<br/> <br/>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu<br/>
                     fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt<br/>
                      in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit<br/>
                       amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br/>
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br/>
                         exercitation ullamco laboris nisi ut </div>
            </div>
                </div>
                <div className={'training__knopki'}>
                    <div className={'training__look'}>
                        <img src={'/assets/imgtr/look.png'} />
                    </div>
                    <div className={'training__zapis'}>
                        <img src={'/assets/imgtr/zapis.png'} />
                    </div>

                </div>
            </div>

        </div>
    </div>
);
export default TrainingPage;