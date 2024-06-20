import {combineReducers} from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonMultipleReducer from "./PokemonMultipleReducer";
import AuthReducer from "./authReducer";
import UserReducer from "./userReducer";
import GroceryStoreReducer from "./groceryStoreReducer";
import ProductReducer from "./productReducer";
import PriceUpdateReducer from "./priceUpdateReducer";
import UserAllergiesReducer from "./userAllergyReducer";

const RootReducer = combineReducers({
  Auth: AuthReducer,
  User: UserReducer,
  GroceryStore: GroceryStoreReducer,
  Product: ProductReducer,
  PriceUpdate: PriceUpdateReducer,
  UserAllergies: UserAllergiesReducer
});

export default RootReducer;