import React from 'react';

function Refresh() {

    function refreshPage() {
        window.location.reload();
    }
    return (
        <button onClick={refreshPage}>Refresh Page</button>
    )
}

export default Refresh