import React, { useState } from 'react';
import UserBlockSkeleton from './UserBlockSkeleton';
import './UserBlock.scss';
import { getUserInfo } from '@api/UserAPI';
import Dropdown from '@components/Dropdown/Dropdown';

function UserBlock(props) {
    const [isValid, setIsValid] = useState(false);
    const [filter, setFilter] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const options = [
        { value: 'name', label: 'Имя' },
        { value: 'tariff', label: 'Тариф' },
        { value: 'organization_info', label: 'Информация о организации ' },
    ];

    const handleClick = () => {
        setIsLoading(true);
        props.handleLoading(true);
        setUserInfo(null);

        getUserInfo(filter).then((data) => {
            if (data.result && data.result.success) {
                setUserInfo(data.result.success);
            }

            props.handleTime(data.time);
            setIsLoading(false);
            props.handleLoading(false);
        })
    };

    const handleChange = (selectedFilter) => {
        setIsValid(!!Object.keys(selectedFilter).length);
        setFilter(selectedFilter.value);
    }

    return (
        <div className="user-block">
            <p>Пожалуйста выберите какую информацию хотите получить для пользователя.</p>
            <div className="form-select">
                <Dropdown
                    isSearchable
                    placeHolder="Выбрать..."
                    options={options}
                    onChange={handleChange}
                />
                <button className="ct-button" onClick={handleClick} disabled={!isValid}>Получить</button>
            </div>

            { !isLoading &&
                <div className="user-info-block">
                    { userInfo && userInfo.name && <p>Имя пользователя: <b>{ userInfo.name }</b> </p> }
                    { userInfo && userInfo.tariff && <p>Тариф пользователя: <b>{ userInfo.tariff }</b> </p> }
                    { userInfo && userInfo.organization_name &&
                        <>
                            <p>Имя организации: <b>{ userInfo.organization_name }</b></p>
                            <p>Баланс организации: <b>{ userInfo.balance }</b></p>
                        </>
                    }
                </div>
            }

            { isLoading && <UserBlockSkeleton /> }
        </div>
    );
}

export default UserBlock;