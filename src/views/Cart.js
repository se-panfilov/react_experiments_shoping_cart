import React from 'react';
import { connect } from 'react-redux'
import { CartItem } from '../components/CartItem'
import { removeFromCart } from '../store/actions/cartActions'

function Cart(props) {
    return (
        <div className="container">
            <div className="cart">
                <h5>You have ordered:</h5>
                <ul className="collection">
                    {props.items.length ?
                        props.items.map(item =>
                            <CartItem key={item.id}
                                      {...item}
                                      onRemoveClick={() => onRemoveClick(props, item.id)}/>)
                        :
                        (
                            <span>Nothing so far</span>
                        )}
                </ul>
            </div>
        </div>
    )

}

const onRemoveClick = (props, id) => {
    console.info(12321)
    props.removeFromCart(id)
}

const mapStateToProps = (state) => ({ items: state.addedItems })
const mapDispatchToProps = (dispatch) => ({ removeFromCart: (id) => {dispatch(removeFromCart(id))} })


export default connect(mapStateToProps, mapDispatchToProps)(Cart)