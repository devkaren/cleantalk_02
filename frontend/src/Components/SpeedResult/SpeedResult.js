import React from 'react';
import './SpeedResult.scss';

function SpeedResult(props) {
    const { isShow, isLoading, time } = props;

    return (
        <div className={`${isShow ? 'fade-in' : 'fade-out'} speed-result-block`}>
            <div className="speed-result-content">
                <p>Время обработки: </p>
                { isLoading &&
                    <>
                        <div className="speed-result skeleton is-loading">
                            <p className="custom"></p>
                        </div>
                    </>
                }
                { !isLoading && time &&
                    <>
                        <div className="speed-result text-center">
                            <p>{ time }</p>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default SpeedResult;