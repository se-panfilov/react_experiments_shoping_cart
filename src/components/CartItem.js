import { Link } from 'react-router-dom'
import React from 'react'

export function CartItem(props) {
    return (
        <li className="collection-item avatar" key={props.id}>
            <div className="item-img">
                {/*<img src={props.img} alt={props.img} className=""/>*/}
            </div>

            <div className="item-desc">
                <span className="title">{props.title}</span>
                <p>{props.desc}</p>
                <p><b>Price: {props.price}$</b></p>
                <p>
                    <b>Quantity: {props.quantity}</b>
                </p>
                <div className="add-remove">
                    <Link to="/cart"><i className="material-icons">arrow_drop_up</i></Link>
                    <Link to="/cart"><i className="material-icons">arrow_drop_down</i></Link>
                </div>
                <button type="button"
                        className="waves-effect waves-light btn pink remove"
                        onClick={props.onRemoveClick}>
                    Remove
                </button>
            </div>

        </li>
    )
}