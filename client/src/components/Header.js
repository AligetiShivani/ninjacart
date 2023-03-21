import React from 'react'
import "./header.css";
// import headerimg2 from './images/headerimg.png';
import iconimg from './images/iconimg.png';

const Header = () => {
    return (
        <>
            {/* Include Bootstrap CSS */}
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            />
            {/* Optional theme */}
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
            />
            {/* Include jQuery */}
            {/* Include Bootstrap JavaScript */}
            <link rel="stylesheet" href="styles.css" />
            {/*Including the Bootstrap CSS and JavaScript files*/}
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            />

            <div style={{
                fontWeight: 600,
                fontSize: "3rem",
                paddingLeft: 10,
                color: "black",
                // backgroundImage: `url(${headerimg2})`,
                height: "13vh",
                margin: 0,
                display: 'block',
                backgroundRepeat: "repeat-x"
            }} className="d-flex align-items-center w-100 ninja">&nbsp;<img style={{ height: "4rem" }} src={iconimg} alt="logo" />
                &nbsp;<p>ninja Kirana</p>
            </div>

        </>
    );
}

export default Header