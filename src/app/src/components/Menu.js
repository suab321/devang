import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import BurgerMenu from 'react-burger-menu';
import classNames from 'classnames';

class MenuWrap extends Component {
    constructor (props) {
      super(props);
      this.state = {
        hidden: false
      };
    }
  
    componentWillReceiveProps(nextProps) {
      const sideChanged = this.props.children.props.right !== nextProps.children.props.right;
  
      if (sideChanged) {
        this.setState({hidden : true});
  
        setTimeout(() => {
          this.show();
        }, this.props.wait);
      }
    }
  
    show() {
      this.setState({hidden : false});
    }
  
    render() {
      let style;
  
      if (this.state.hidden) {
        style = {display: 'none'};
      }
  
      return (
        <div style={style} className={this.props.side}>
          {this.props.children}
        </div>
      );
    }
  }
  
  class Demo extends Component {
    constructor (props) {
      super(props);
      this.state = {
        currentMenu: 'stack',
        side: 'right'
      };
    }
  
    changeMenu(menu) {
      this.setState({currentMenu: menu});
    }
  
    changeSide(side) {
      this.setState({side});
    }
  
    getItems() {
      let items;
  
      switch (this.props.menus[this.state.currentMenu].items) {
        case 1:
          items = [
            <ul key="0" className="navbar-nav mr-auto">,
                <li key="1" className="nav-item active">
                    <a className="nav-link" href="#">Product <span className="sr-only">(current)</span></a>
                </li>,
                <li key="2" className="nav-item">
                    <a className="nav-link" href="#">How it works</a>
                </li>,
                <li  key="3" className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Templates
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>,
                <li  key="4" className="nav-item">
                    <a className="nav-link " href="#">Login</a>
                </li>,
                <li  key="5" className="nav-item"> 
                    <a className="nav-link " href="#">Sign Up</a>            
                </li>,
            </ul>,    
          ];
          break;
        case 2:
          items = [
            <ul key="0" className="navbar-nav mr-auto">,
                <li key="1" className="nav-item active">
                    <a className="nav-link" href="#">Product <span className="sr-only">(current)</span></a>
                </li>,
                <li key="2" className="nav-item">
                    <a className="nav-link" href="#">How it works</a>
                </li>,
                <li  key="3" className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Templates
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>,
                <li  key="4" className="nav-item">
                    <a className="nav-link dropdown-toggle" href="#">Login</a>
                </li>,
                <li  key="5" className="nav-item"> 
                    <a className="nav-link dropdown-toggle" href="#">Sign Up</a>            
                </li>,
            </ul>,    
          ];
          break;
        default:
          items = [
            <ul key="0" className="navbar-nav mr-auto">,
                <li key="1" className="nav-item active">
                    <a className="nav-link" href="#">Product <span className="sr-only">(current)</span></a>
                </li>,
                <li key="2" className="nav-item">
                    <a className="nav-link" href="#">How it works</a>
                </li>,
                <li  key="3" className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Templates
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>,
                <li  key="4" className="nav-item">
                    <a className="nav-link " href="#">Login</a>
                </li>,
                <li  key="5" className="nav-item"> 
                    <a className="nav-link " href="#">Sign Up</a>            
                </li>,
            </ul>,    
          ];
      }
  
      return items;
    }
  
    getMenu() {
      const Menu = BurgerMenu[this.state.currentMenu];
      const items = this.getItems();
      let jsx;
  
      if (this.state.side === 'right') {
        jsx = (
          <MenuWrap wait={20} side={this.state.side}>
            <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right>
              {items}
            </Menu>
          </MenuWrap>
        );
      } else {
        jsx = (
          <MenuWrap wait={20}>
            <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
              {items}
            </Menu>
          </MenuWrap>
        );
      }
  
      return jsx;
    }
  
    render() {
      const buttons = Object.keys(this.props.menus).map((menu) => {
        return (
          <a key={menu}
            className={classNames({'current-demo': menu === this.state.currentMenu})}
            onClick={this.changeMenu.bind(this, menu)}>
            {this.props.menus[menu].buttonText}
          </a>
        );
      });
  
      return (
        <div id="outer-container" style={{height: '100%'}}>
              {this.getMenu()}  
          <main id="page-wrap">
          </main>
        </div>
      );
    }
  }
  
  const menus = {
    slide: {buttonText: 'Slide', items: 1},
    stack: {buttonText: 'Stack', items: 1},
    elastic: {buttonText: 'Elastic', items: 1},
    bubble: {buttonText: 'Bubble', items: 1},
    push: {buttonText: 'Push', items: 1},
    pushRotate: {buttonText: 'Push Rotate', items: 2},
    scaleDown: {buttonText: 'Scale Down', items: 2},
    scaleRotate: {buttonText: 'Scale Rotate', items: 2},
    fallDown: {buttonText: 'Fall Down', items: 2},
    reveal: {buttonText: 'Reveal', items: 1}
  };
  
  ReactDOM.render(<Demo menus={menus} />, document.getElementById('app'));
  