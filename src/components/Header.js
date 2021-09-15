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
      load: false,
      error: false
    };
  }

  onSearchSub = (e) => {
    e.preventDefault();
    this.setState({load: true})
      getData(this.state.query)
      .then(data=>{
        this.setState({load: false})
    if(data === undefined){
          console.log('data is un');
        this.setState({error:true})
      }else{
          this.setState({data:''})
        this.setState({error: false})
        this.setState({data:data})
        }
      }).catch(err=>{
        this.setState({error:true})
        console.log('error from catch api')
      })
  };

  getQuery = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <>
      <nav className=   {this.state.data !== undefined  &&  this.state.data.length > 0 || this.state.error ?  'wrapper_nav top'  :'wrapper_nav'}>
          <div className="bowl_Serach">
            <form className='form_Search'>
              <div className='bowl_svg_Search'>
                <Search onClick={this.onSearchSub}></Search>
              </div>
                <input type="text" onChange={this.getQuery}  placeholder='search about ant vword Aa..'/>
                <button
                  className="btn_sub_serch_hid"
                  type="submit"
                  onClick={this.onSearchSub}></button>
            </form>
          </div>
        </nav>
        <main className='wrapper_main'>
          <Main cardsData={this.state.data?this.state.data:[]} load={this.state.load} foundErr={this.state.error}/>
        </main>
      </>
    );
  }
}
export default Header;
