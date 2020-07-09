import React  from 'react';
import './Product.css';

function Product(props) {

    return (
        <article>
            <div className="article-contain">
                <div className="article-img">
                    <img src={require(`../../../../assets/images/${props.item.id}.jpg`)} alt="API/img/1.jpg" />
                </div>
                <div className="article-box">
                    <div className="article-box-title">{props.item.name} ({props.item.year})</div>
                    <div className="article-box-property">Жанр фильма: {props.item.genre}</div>
                    <div className="article-box-property">Страна производства: {props.item.country}</div>
                    <div className="article-box-property">Рейтинг: {props.item.rating} %</div>
                </div>
                <div className="article-price">Цена: {props.item.cost} руб.</div>
                <a href="#" className="article-more">Подробнее...</a>
                <a href="#" className="article-basket">В корзину</a>
            </div>
        </article>
    );
}

export default Product;