import React, { Component } from 'react'
import { ReactComponent as Search } from '../assets/search.svg';

 class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            query: ''
        }
    }

    onSearchSub = e =>{
        e.preventDefault()
        console.log(this.state.query);

    }

    getQuery = (e)=>{
        this.setState({query: e.target.value})
    }

    render() {
        return (
          <>
            <nav>
                <div className="bowl_Serach">
                    <form>
                        <Search  onClick={this.onSearchSub}></Search>
                        <input type="text" onChange={this.getQuery}  />
                        <button className='btn_sub_serch_hid' type='submit' onClick={this.onSearchSub}></button>
                    </form>
                </div>
            </nav>
          </>
        )
    }
}

export default Header
