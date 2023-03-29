import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
	return (
		<nav>
			<ul>
				<li>
					<NavLink exact activeClassName="active" to="/">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/even-odd">
						Even / Odd
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/dedupe">
						Dedupe
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
