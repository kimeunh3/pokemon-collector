import React from 'react';

function ScrollUpButton() {
    return (
        <button
            type="button"
            id="go-top"
            onClick={() => 
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }
            )}
            style={{
                position: 'fixed',
                right: '30px',
                bottom: '30px',
                outline: 0,
                border: 'solid 4px',
                borderRadius: '5px',
                background: 'transparent',
                cursor: 'pointer',
                zIndex: '1100',
                color: 'black',
            }}
        ><span className="material-symbols-outlined">arrow_upward</span>
        </button>
    )
}

export default ScrollUpButton;