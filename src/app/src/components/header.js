import React, { Component } from 'react';

import { MenuWrap } from './Menu';

import '../styles/menu.css';

class Header extends Component{
    render(){
        return(
            <div className="App">
                <h2>Super Squad </h2>
                <div className="col-md-6">
                    <CharacterList />
                </div>
                <div className="col-md-6">
                    <HeroList />
                </div>                
            </div>    
        )
    }
}

export default App;