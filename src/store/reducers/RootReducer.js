import {combineReducers} from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonMultipleReducer from "./PokemonMultipleReducer";
import AuthReducer from "./authReducer";
import UserReducer from "./userReducer";

const RootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonMultipleReducer,
  Auth: AuthReducer,
  User: UserReducer
});

export default RootReducer;