import React  from 'react';
import './Filter.css';

function Filter() {

    return (
        <nav>
            <div className="nameFilter">Фильтр</div>
            <div className="content-filter">
                <form id="filter_form">
                    <div className="filter-box">
                        <span className="bold fs14">Цена</span>
                        <div className="filter-box_wrap-input">
                            <div className="box-input">
                                <span>от</span>
                                <input type="text" name="" id="pr-price-ot" />
                            </div>
                            <div className="box-input">
                                <span>до</span>
                                <input type="text" name="" id="pr-price-do" />
                            </div>
                        </div>
                    </div>
                    <div className="filter-box" id="filter_form_oplaty">
                        <span className="bold fs14">Форма оплаты</span>
                        <div className="filter-box_wrap-check">
                            <div className="box-check-area">
                                <span className="box-ch"><input type="checkbox" id="nal" name="brand" value="нал" /></span>
                                <label htmlFor="nal">нал</label>
                            </div>
                            <div className="box-check-area">
                                <span className="box-ch"><input type="checkbox" id="beznal" name="brand" value="безнал" /></span>
                                <label htmlFor="beznal">безнал</label>
                            </div>
                        </div>
                    </div>
                    <div className="filter-box" id="film-genre">
                        <span className="bold fs14">Жанр фильма</span>
                        <div className="filter-box_wrap-check">
                            <div className="box-check-area">
                                <span className="box-ch"><input type="checkbox" id="boevik" name="" value="Боевик" /></span>
                                <label htmlFor="boevik">Боевик</label>
                            </div>
                            <div className="box-check-area">
                                <span className="box-ch"><input type="checkbox" id="comedy" name="" value="Комедия" /></span>
                                <label htmlFor="comedy">Комедия</label>
                            </div>
                            <div className="box-check-area">
                                <span className="box-ch"><input type="checkbox" id="horror" name="" value="Ужасы" /></span>
                                <label htmlFor="horror">Ужасы</label>
                            </div>
                            <div className="box-check-area">
                                <span className="box-ch"><input type="checkbox" id="fantastic" name="" value="Фантастика" /></span>
                                <label htmlFor="fantastic">Фантастика</label>
                            </div>
                            <div className="box-check-area">
                                <span className="box-ch"><input type="checkbox" id="mult" name="" value="Мультфильм" /></span>
                                <label htmlFor="mult">Мультфильм</label>
                            </div>
                        </div>
                    </div>
                    <div className="filter-box" id="film-country">
                        <span className="bold fs14">Страна производства</span>
                        <div className="filter-box_wrap-check">
                            <div className="box-check-area">
                                <span className="box-ch"><input type="checkbox" id="rus" name="" value="Русские" /></span>
                                <label htmlFor="rus">Русские</label>
                            </div>
                            <div className="box-check-area">
                                <span className="box-ch"><input type="checkbox" id="foreign" name="" value="Зарубежные" /></span>
                                <label htmlFor="foreign">Зарубежные</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </nav>
    );
}

export default Filter;