import React from "react";
import ReactDom from "react-dom";
import JokesApp from "./JokesApp";
import product from "./map-Product";
import AppOud from "./AppOud";
import AppProject from "./AppProject";
import AppE from "./Class_based_components";
import AppState1 from "./state1";
import AppState2 from "./state2";
import Joke from "./Joke";
import AppProjectMeme from "./AppProjectMeme";
import AppNavbar from "./AppNavbar";
import reportWebVitals from './WeatherApp/reportWebVitals';
import App from './WeatherApp/App';
import ClickOne from "./Exercise/ClickOne";
import TodoApp from "./Exercise/Todo/TodoApp";
import WordDisplayLogInOut from "./Exercise/WordDisplayLogInOut";
import VSchoolApp from "./Exercise/VschoolProduct/VSchoolApp"
import ConditionApp from "./Exercise/ConditionalRendering/ConditionApp";
import Condition2App from "./Exercise/Condition2/Condition2App";
import LogInOutAdvanced from "./Exercise/LoginAdvanced/LogInOutAdvanced";
import FetchData from "./Exercise/FetchData";
import ChangeTitle from "./Exercise/ChangeTitle";
import RemoveItem from "./Exercise/RemoveItem/RemoveItem";
import Object_People from "./Exercise/Object_People";
import SimpleCounter from "./Exercise/SimpleCounter";
import DelayCounter from "./Exercise/DelayCounter";
import UseEffect_Basic from "./Exercise/UseEffect_Basic";
import UseEffect_CleanUp from "./Exercise/UseEffect_CleanUp";
import FetchData_GitHub_users from "./Exercise/FetchData_GitHub_users";
import RouterApp from "./Exercise/RouterCodingAddict/RouterApp";
import RouterReinApp from "./Exercise/RouterRein/RouterReinApp";
import { BrowserRouter as Router } from "react-router-dom";
import TempContextProvider from "./WeatherApp/context/TempProvider";

ReactDom.render(
    <React.StrictMode>
        <TempContextProvider>
            {/*this is only for learning useContext with WeatherApp. */}
            {/*currently it has errors due to this nested layout. but other app should work by */}
            {/*deleting the <TempContextProvider></TempContextProvider>*/}
            <App/>
        </TempContextProvider>
    </React.StrictMode>,

    document.getElementById("root"));