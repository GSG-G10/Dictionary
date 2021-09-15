import React, { Component } from "react";
import { ReactComponent as Search } from "../assets/search.svg";
import getData from "../utils/getData";
import Main from './Main';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data:[],
    };
  }
  onSearchSub = (e) => {
    e.preventDefault();
    getData(this.state.query)
    .then(data=>{
      this.setState({data:data})
    })
   
    
  };

  getQuery = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <>
        <nav>
          <div className="bowl_Serach">
            <form>
              <Search onClick={this.onSearchSub}></Search>
              <input type="text" onChange={this.getQuery} />
              <button
                className="btn_sub_serch_hid"
                type="submit"
                onClick={this.onSearchSub}
              ></button>
            </form>
          </div>
        </nav>
        <Main cardsData={this.state.data?this.state.data:[]}/>
      </>
    );
  }
}

export default Header;
