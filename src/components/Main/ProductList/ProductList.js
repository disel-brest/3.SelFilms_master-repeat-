import React, {Component}  from 'react';
import './ProductList.css';
import Product from './Product';

import { connect } from 'react-redux';
import { actionAllFilms } from '../../../actions';

class ProductList extends Component {

    componentDidMount(){
        fetch('http://localhost:7000/api/games', {     //fetch  импортировать не надо
            method : 'GET'
        })
        .then(data => data.json())    // метод json() внутри себя преобр. данные(объект respons) что-то типа data.JSON.parse и возвращаем promis с объектом
		.then(data => {
            console.log(data);  
            this.props.propsFetchFilms(data.response)    //.then(users)        получили массив 
        })
    }

    render() {
        return (
            <div className="all-article" id="all-article">
                {this.props.allFilmsProps.map((item, index) => {
                    return <Product key={index} item={item} />
                })}
            </div>
        );
    }
}

const mapStateToProps = (state)=>{         //глобальный state=store
    return {
        allFilmsProps: state.reducerProducts     //приходит только то что надо
    };
}

export default connect(mapStateToProps, {propsFetchFilms: actionAllFilms} )(ProductList);