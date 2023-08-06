import React from 'react';

import Logo from './Logo';

interface HeaderProps {
	children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
	return (
		<header className="flex items-center gap-x-8 mx-auto max-w-7xl">
			<Logo />

			{children}
		</header>
	);
};

export default Header;
