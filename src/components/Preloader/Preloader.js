import React from 'react'
import './preloader.css'

const Preloader = ({isLoading}) => {
    return (
        <div className={isLoading ? "preloader preloader_active" : "preloader"}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
