import React, { useState, useEffect } from 'react';
import UserBlock from '@components/UserBlock/UserBlock';
import SpeedResult from '@components/SpeedResult/SpeedResult';
import SettingsIcon from '@components/SettingsIcon/SettingsIcon';
import { secondsToTime } from '@utils/Helper';
import './App.scss';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isShowSpeedInfo, setIsShowSpeedInfo] = useState(false);
    const [isActiveSettings, setIsActiveSettings] = useState(false);
    const [resultTime, setResultTime] = useState(null);
    const title = `${!isActiveSettings ? 'Показать' : 'Скрыть'} панель времени обработки результатов`;

    const handleTime = (time) => {
        if (time) {
            setResultTime(secondsToTime(time.toFixed(2)))
        }
    };

    const handleSettingsClick = () => {
        setIsLoading(false);
        setIsShowSpeedInfo(isShow => !isShow);
        setIsActiveSettings(isActive => !isActive);
    };

    useEffect(() => {
        document.title = 'Тестовое задание Web программиста 02';
    }, []);

    return (
        <div>
            <div className="container">
                <h4 className="fade-in">Тестовое задание Web программиста 02</h4>
                <SettingsIcon handleClick={handleSettingsClick} title={title} />
            </div>

            <div className="details fade-in">
                <div className="details-container">
                    <UserBlock handleTime={handleTime} handleLoading={(isLoading) => setIsLoading(isLoading)}/>
                </div>
            </div>

            { isActiveSettings && <SpeedResult isShow={isShowSpeedInfo} isLoading={isLoading} time={resultTime}/> }
        </div>
    );
}

export default App;
