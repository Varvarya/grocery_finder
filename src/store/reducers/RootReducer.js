import {combineReducers} from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonMultipleReducer from "./PokemonMultipleReducer";
import AuthReducer from "./authReducer";
import UserReducer from "./userReducer";
import GroceryStoreReducer from "./groceryStoreReducer";
import ProductReducer from "./productReducer";

const RootReducer = combineReducers({
  Auth: AuthReducer,
  User: UserReducer,
  GroceryStore: GroceryStoreReducer,
  Product: ProductReducer
});

export default RootReducer;