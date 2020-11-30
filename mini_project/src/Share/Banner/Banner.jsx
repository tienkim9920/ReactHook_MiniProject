import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../Global/Image'
import './Banner.css'

Banner.propTypes = {
    title: PropTypes.string,
    backgroundUrl: PropTypes.string
};

Banner.defaultProps = {
    title: '',
    backgroundUrl: ''
}

function Banner(props) {

    const { title, backgroundUrl } = props

    const bannerStyle = backgroundUrl ? { backgroundImage: `url(${backgroundUrl})`} : {}

    return (
        <div className="Banner" style={bannerStyle}>
            <div className="Banner_title">
                <h1>{title}</h1>
                <p>AVAILABLE NOW</p>
                <a className="link_Shop link_animition">SHOP NOW</a>
            </div>
        </div>
    );
}

export default Banner;