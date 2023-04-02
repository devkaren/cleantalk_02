import React from 'react';

function UserBlockSkeleton() {
    return (
        <div className="user-info-block skeleton is-loading">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    );
}

export default UserBlockSkeleton;