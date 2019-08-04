import React from 'react'

export function ShopItem(props) {
    return (
        <div className="card" key={props.id}>
            <div className="card-image">
                {/*<img src={item.img} alt={item.title}/>*/}
                <span className="card-title">{props.title}</span>
                <button type="button"
                        onClick={props.onClick}
                        className="btn-floating halfway-fab waves-effect waves-light red">
                    <i className="material-icons">add</i>
                </button>
            </div>

            <div className="card-content">
                <p>{props.desc}</p>
                <p><b>Price: {props.price}$</b></p>
            </div>
        </div>
    )
}