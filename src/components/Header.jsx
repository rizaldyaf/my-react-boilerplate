import React, { Component } from 'react'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

class Header extends Component {
    render() {
        let arr = ["my", "react", "boilerplate"]
        return (
            <AppBar>
                <Toolbar>
                    {arr.map(text=>(text+" "))}
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header 