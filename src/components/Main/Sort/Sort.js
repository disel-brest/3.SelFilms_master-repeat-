import React  from 'react';
import './Sort.css';

function Sort() {

    return (
        <div className="form-filter">
            <label>Сортировать по:</label>
            <select className="select-class" id="sort-po" /*value=''*/>
                {/* <option selected disabled value=""></option> */}
                <option value="po_date">По дате выпуска</option>
                <option value="po_date">По рейтингу</option>
                <option value="po_price_deshevle">По цене (дешевле)</option>
                <option value="po_price_doroge">По цене (дороже)</option>
            </select>
        </div>
    );
}

export default Sort;