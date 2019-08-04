import React from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'
import { ShopItem } from '../components/ShopItem'

function Home(props) {
    return (
        <div className="container">
            <h3 className="center">Our items</h3>
            <div className="box">
                {props.items.map(item =>
                    <ShopItem key={item.id}
                              {...item}
                              onClick={() => handleClick(props, item.id)}/>)}
            </div>
        </div>
    )
}

const handleClick = (props, id) => props.addToCart(id)
const mapStateToProps = (state) => ({ items: state.items })
const mapDispatchToProps = (dispatch) => ({ addToCart: (id) => {dispatch(addToCart(id))} })

// export default connect(mapStateToProps)(Home)
export default connect(mapStateToProps, mapDispatchToProps)(Home)