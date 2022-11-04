import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShopppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {
	const [{ basket }] = useStateValue();
	return (
		<nav className="header">
			{/* Logo - left */}
			<Link to={'/'}>
				<img
					className="header__logo"
					src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="Logo"
				/>
			</Link>
			{/* searchbar */}
			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>

			{/* 3 - Links */}
			<div className="header__nav">
				<Link to={'/login'} className="header__link">
					<div className="header__option">
						<span className="header__optionLine1">Hello</span>
						<span className="header__optionLine2">Sign In</span>
					</div>
				</Link>
				<Link to={'/login'} className="header__link">
					<div className="header__option">
						<span className="header__optionLine1">Returns</span>
						<span className="header__optionLine2">& orders</span>
					</div>
				</Link>
				<Link to={'/login'} className="header__link">
					<div className="header__option">
						<span className="header__optionLine1">Your</span>
						<span className="header__optionLine2">Prime</span>
					</div>
				</Link>
				<Link to={'/checkout'} className="header__link">
					<div className="header__optionBasket">
						<ShopppingBasketIcon className="header__basketIcon" />
						<span className="header__optionLine2 header__basketCount">
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</nav>
	);
}

export default Header;
