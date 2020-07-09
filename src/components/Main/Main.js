import React, { Component } from 'react';
import './Main.css';
import Filter from './Filter';
import Sort from './Sort';
import ProductList from './ProductList';

function Main() {
    return (
        <>
            <Filter />
            <main id="main">
                <h2>Список фильмов</h2>
                <Sort />
                <ProductList />
            </main>
        </>
    );
}

export default Main;