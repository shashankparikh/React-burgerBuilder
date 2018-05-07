import React,{Component} from 'react';

import Aux from '../../hoc//Aux.js';
import Burger from '../../components/Burger/Burger.js'

import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';
import Modal from '../../components/UI/Modal/Modal.js';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.js';

const ingredients_prices ={
    salad: 0.2,
    bacon:0.4,
    meat:0.8,
    cheese:0.9
}


class BurgerBuilder extends Component{

  
    state = {
        ingredients:{
            salad:1,
            bacon:1,
            cheese:2,
            meat:2
        },
        totalPrice : 4,
        purchasable:false,
        purchasing: false
    }


updatePurchaseState = (ingredients)=>{
    const sum = Object.keys(ingredients).map(igkey=>{
        return ingredients[igkey];
    }).reduce((arr,el)=>{
        return arr + el;
    },0);
    this.setState({purchasable:sum>0});
}

    addIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];  // old count
        console.log(oldCount);
        const updatedCount = oldCount+1; //updated count
        console.log(updatedCount);        // updated count of specific type
        const updatedIngredients = {     // updating the array using spread operator
            ...this.state.ingredients
        }; 
        console.log(updatedIngredients);
        updatedIngredients[type] = updatedCount; 
        console.log( updatedIngredients[type]) // updated count of specific type
        console.log(updatedCount);
        this.setState({ingredients:updatedIngredients});
        console.log(updatedIngredients) // setting the state of final array

        const priceAddition = ingredients_prices[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = priceAddition + oldPrice;
        this.setState({totalPrice:newPrice});

        this.updatePurchaseState(updatedIngredients); // for purchase

    }
    removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];  // old count
        if(oldCount<=0){
            return;
        }
        console.log(oldCount);
        const updatedCount = oldCount-1; //updated count
        console.log(updatedCount);        // updated count of specific type
        const updatedIngredients = {     // updating the array using spread operator
            ...this.state.ingredients
        }; 
        console.log(updatedIngredients);
        updatedIngredients[type] = updatedCount; 
        console.log( updatedIngredients[type]) // updated count of specific type
        console.log(updatedCount);
        this.setState({ingredients:updatedIngredients});
        console.log(updatedIngredients) // setting the state of final array

        const priceReduction = ingredients_prices[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceReduction ;
        this.setState({totalPrice:newPrice});

        this.updatePurchaseState(updatedIngredients); // for purchase

    }

    purchaseHandler =()=>{             //getting modal on oreder now click method
this.setState({purchasing:true});
    }

    cancelPurchaseHandler =()=>{      // cancel the modal and for cancel button
        this.setState({purchasing:false});
    }

    continuePurchaseHandler =()=>{  //for continue button
        alert("continue");
    }

    render(){
        const disabledInfo ={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            console.log(disabledInfo[key])
            
                disabledInfo[key]= disabledInfo[key]<=0;
            
        }
        return(
            <Aux>
              <Modal show={this.state.purchasing} modalClosed={this.cancelPurchaseHandler}>
                    <OrderSummary ingredients = {this.state.ingredients}
                                purchaseCancel = {this.cancelPurchaseHandler}
                                purchaseContinue = {this.continuePurchaseHandler}
                                price={this.state.totalPrice}/>
                </Modal>
              <Burger ingredients={this.state.ingredients}/>
        <BuildControls ingrediantAdded = {this.addIngredientHandler}
                        ingrediantRemoved = {this.removeIngredientHandler}
                       disabled= {disabledInfo}
                       price={this.state.totalPrice}
                       purchasable = {this.state.purchasable}
                       ordered = {this.purchaseHandler}/>     
            </Aux>
        );
    }
}

export default BurgerBuilder;