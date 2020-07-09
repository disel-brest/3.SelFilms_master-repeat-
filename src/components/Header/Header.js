import React, { Component } from 'react';
import '../Header/Header.css';
import logo from '../../assets/images/logo.svg'

function Header() {

    return (
        <header>
			<div className="logo">
				<img src={logo}/>
				<div className="title">Продажа фильмов</div>
				<div className="title-small">Фильмы</div>
				<div className="title-small">Доставка</div>
				<div className="title-small">Корзина</div>
			</div>
			<a href="#" className="add-button" id="open-popup">Войти</a>
		</header>
    );
}

export default Header;