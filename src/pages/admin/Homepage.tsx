import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../../store/reducers"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ReactDOM from "react-dom";
 
// layouts
import Adminpage from '../../layouts/Admin'





const Homepage = () => {
    return (
        <>
        <Adminpage/>
        </>
    )
}

export default Homepage