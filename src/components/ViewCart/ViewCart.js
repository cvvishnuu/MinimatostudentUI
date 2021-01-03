import React, { Component } from 'react';
import axios from 'axios';
require('./ViewCart.css')


class Viewcart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            order:[],
            total: 0
         }
    }

    componentDidMount() {
        const startersFood = JSON.parse(localStorage.getItem("starters"));
        const maincourseFood = JSON.parse(localStorage.getItem("maincourse"));
        const desertsFood = JSON.parse(localStorage.getItem("deserts"));
        const drinksFood = JSON.parse(localStorage.getItem("drinks"));
        const arr = startersFood.concat(maincourseFood,desertsFood,drinksFood)
        const cost = 
        this.setState({
            order:arr,
        
        })
    }

    onPlaceOrder = (event) => {
        event.preventDefault();
        const token = JSON.parse(localStorage.getItem('Authorization'))        
        try {            
            axios({
                method: 'post',
                url: 'http://localhost:5000/student/order', 
                data: {
                    order:this.state.order,
                    canteenId: this.props.match.params.id
                },
                headers: { 
                    'Authorization': token                    
                }
            })
            .then(res =>{console.log(res.data.message) })
        } catch (error) {
            alert('We are Sorry we cant place the order now !')
        }        
    }

    render() {                 
        return ( 
            <>                
                <div className="shopping-cart">
                    {/* Title */}
                    <div className="titles">
                        Viewcart
                    </div>
                    {/* Product #1 */}
                    {
                        this.state.order.map((item, i)=> { 
                            return (
                                <div className="item">
                                    <div className="buttons">
                                        <span />
                                        <span />                                     
                                    </div>
                                    <div className="image">
                                        {/* <img src="item-1.png" alt /> */}
                                    </div>
                                    
                                    <div className="description">
                                        <span>{item.foodName}</span>
                                        <span></span>
                                        <span></span>                                
                                    </div>
                                    <div className="quantity">
                                        {/* <button className="plus-btn mainButton" type="button" name="button">
                                            <img src="plus.svg" alt />
                                        </button>
                                        <input type="text" name="name" defaultValue={1} /> */}
                                        {/* <button className="minus-btn mainButton" type="button" name="button">
                                            <img src="minus.svg" alt />
                                        </button> */}
                                    </div>
                                    <div className="total-price">$ {item.foodPrice}</div>
                                </div>
                            )}
                        )}
                        {/* <div>
                            Total = 
                        </div>                */}
                        <button className = "btn btn-success" onClick={this.onPlaceOrder}>Place Order</button>
                    
                </div>
            </>
        );
    }
}
 
export default Viewcart ;