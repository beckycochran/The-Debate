//file contains all the reducer logic and actions specifically for the orders
//following walkthrough: https://towardsdev.com/setup-and-use-redux-toolkit-with-next-js-begineers-guide-5ebc32eef31e
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vote: "not-voted"
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //Actions
        //change vote
        changeVote: (state, action) => {
            state.vote = action.payload;
        },
        // addToCart: (state, action) => {
        //     console.log(`State: ${state.items}, Actions: ${action.type}`)
        //     state.items = [...state.items, action.type]
        // },
        // removeFromCart: (state, action) => {
        //     const index = state.items.findIndex(
        //         cartItem => cartItem.id === action.type.id
        //     );
        //     let newCart = [...state.items];
        //     if (index >= 0) {
        //         //the item exists in the order; remove it
        //         newCart.splice(index, 1); //position, number of item to delete
        //     } else {
        //         console.warn(
        //             `can't remove item(id: ${action.type.id}) as it's not in order`
        //         );
        //     }
          //  state.items = newCart;
        //},  any other actions here
    },
});

export const { changeVote } = userSlice.actions;

//Selectors - this is how we pull information from the global store slice
// export const selectItems = (state) => state.cart.items;
// export const selectTotal = (state) => {
//     state.cart.items.reduce(
//         (total, item) => total + item.price * item.quantity,
//         0
//     );

// }

// export default cartSlice.reducer;


export const selectVote = (state) => state.vote;

export default userSlice.reducer