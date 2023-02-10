import Link from 'next/link';
import React from 'react';
import '../styles.scss';

function Header() {
	return (
		<header className="theHeader">
			<Link
				href="/"
				className="mr-2 px-2 py-1 bg-white text-blue-500 rounded-lg"
			>
				Home
			</Link>
			<Link
				href="/nouns"
				className="mr-2 px-2 py-1 bg-white text-blue-500 rounded-lg"
			>
				Nouns
			</Link>
		</header>
	);
}

export default Header;
