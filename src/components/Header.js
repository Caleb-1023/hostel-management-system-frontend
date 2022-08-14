import React from 'react';
//eslint-disable-next-line
import {Link} from "react-router-dom";

const Header = ({title}) => {
	return (

		<div className="header position-sticky top-0 start-0 bg-dark py-2" style={{paddingLeft: '250px',zIndex:'10'}}>
			<div className="header-content">
				<nav className="navbar navbar-expand">
					<div className="collapse navbar-collapse justify-content-between">
						<div className="header-left d-flex justify-content-between w-100 pe-5">
							<div className="dashboard_bar text-white fs-4 fw-bold">
								{title}
							</div>
							<div className="dashboard_bar text-white fs-4 fw-bold">
								<img src="./images/test.JPG" style={{width: '50px', borderRadius: '10rem'}} alt="" />
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>

	);
};

export default Header;