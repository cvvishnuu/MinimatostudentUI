import React, { Component } from 'react';
import HeaderSearch from '../Header/Header';
import "antd/dist/antd.css";
import FooterPagePro from '../Footer/Footer';
import axios from 'axios';
import { Layout, Menu, Breadcrumb } from "antd";
import CanteenResults from '../CanteenResults/CanteenResults'
import {Link} from 'react-router-dom'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from "@ant-design/icons";
import "./canteenMenu.css"
import UnAuthenticatedHeader from '../UnAuthenticatedHeader/UnAuthenticatedHeader';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const state = {
  type: 'starters',
  starters: [],
  maincourse: [],
  deserts:[],
  drinks:[],
  canteenId: null,
  searchResults: null,
  token: null,
  render: false,
 
}
class NewComponent extends Component {
    constructor(props) {        
        super(props);
        this.state = state
    }


componentDidMount(){
  window.localStorage.setItem('starters','[]')
  window.localStorage.setItem('maincourse','[]')
  window.localStorage.setItem('deserts','[]')
  window.localStorage.setItem('drinks','[]')
  const { item } = this.props.match.params
  const id = (window.location.pathname).split("/")[2]
  const token = JSON.parse(localStorage.getItem('Authorization'))
  axios.get('http://localhost:5000/student/menu',{headers: {id: id}})
  .then(res=>{            
    this.setState({
      starters: res.data.payload.starters,
      maincourse: res.data.payload.maincourse,
      deserts: res.data.payload.deserts,
      drinks: res.data.payload.drinks,      
      token: token,
      canteenId: item
    })
  })
}

// componentDidUpdate(_prevProps, prevState) {
//   if (this.state.canteenId === prevState.canteenId) {
//     // this.setState({
//     //   render: !this.state.render
//     // }
//    this.reload()
//   }
// }

//   reload = () => {
//       //RELOAD COMPONENT
//       this.forceUpdate();
//   };


  changeType = (type) => {
    this.setState({
      type: type
    })
  }

  loadSearchResults = (results) => {
    this.setState({
      searchResults:results
    });
  }
  
  
  onChange = (price, name,type) => {
    if(this.state.token) {
      if(type==="starters") {      
        const startersFood = JSON.parse(localStorage.getItem("starters"));
        startersFood.push({
          'foodName': name,
          'foodPrice': price,
        })
        localStorage.setItem("starters", JSON.stringify(startersFood));
      }
      if(type==="maincourse") {      
        const maincourseFood = JSON.parse(localStorage.getItem("maincourse"));
        maincourseFood.push({
          'foodName': name,
          'foodPrice': price,
        })
        localStorage.setItem("maincourse", JSON.stringify(maincourseFood));
      }
      if(type==="deserts") {      
        const desertsFood = JSON.parse(localStorage.getItem("deserts"));
        desertsFood.push({
          'foodName': name,
          'foodPrice': price,
        })
        localStorage.setItem("deserts", JSON.stringify(desertsFood));
      }
      if(type==="drinks") {      
        const drinksFood = JSON.parse(localStorage.getItem("drinks"));
        drinksFood.push({
          'foodName': name,
          'foodPrice': price,
        })
        localStorage.setItem("drinks", JSON.stringify(drinksFood));
      }
    } else {
      alert('Please login or create an account to place an order')
    } 
  }

  onDelete=(food, type)=>{
      if(type === 'starters'){
        const startersFood = JSON.parse(localStorage.getItem("starters"));
        for(let i=0; i<startersFood.length;i++){
          if(startersFood[i].foodName === food){
            startersFood.splice(i, 1);
            localStorage.setItem("starters", JSON.stringify(startersFood));
            break;
          }
        }
      }
       
      if(type === 'maincourse'){
        const mainCourseFood = JSON.parse(localStorage.getItem("maincourse"));
        for(let i=0; i<mainCourseFood.length;i++){
          if(mainCourseFood[i].foodName === food){
            mainCourseFood.splice(i, 1);
            localStorage.setItem("maincourse", JSON.stringify(mainCourseFood));
            break;
          }
        }
      }
       
      if(type === 'deserts'){
        const desertsFood = JSON.parse(localStorage.getItem("deserts"));
        for(let i=0; i<desertsFood.length;i++){
          if(desertsFood[i].foodName === food){
            desertsFood.splice(i, 1);
            localStorage.setItem("deserts", JSON.stringify(desertsFood));
            break;
          }
        }
      }
           
      if(type === 'drinks'){
        const drinksFood = JSON.parse(localStorage.getItem("drinks"));
        for(let i=0; i<drinksFood.length;i++){
          if(drinksFood[i].foodName === food){
            drinksFood.splice(i, 1);
            localStorage.setItem("drinks", JSON.stringify(drinksFood));
            break;
          }
        }
      }
    
  }
    render() { 
      const canteenInfo = JSON.parse(localStorage.getItem('canteenDetails'));      
      const project = () => {
        switch(this.state.type) {
          case "starters":  return this.state.starters;
          case "maincourse": return this.state.maincourse;
          case "deserts": return this.state.deserts;
          case "drinks":  return this.state.drinks;
        }
      }
        return (          
          <>
          { 
            this.state.token === null ?
            this.state.searchResults?
              <>
                <header >                  
                    <nav className="navbar navbar-expand-lg navbar-light bg-white ">
                      <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                          <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarExample01">
                        {/* ---------------------------------------------------------------place for header----------------------------------------------------------------------- */}
                        <UnAuthenticatedHeader loadSearchResults = {this.loadSearchResults}/> 
                        </div>
                      </div>
                    </nav>                  
                </header>
                <div className = "mt-5">
                  <CanteenResults canteenDetails = {this.state.searchResults} />
                </div>                
                <FooterPagePro/>    
              </>
            :
                <>
                  <header>
                      {/* Navbar */}
                      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                        <div className="container-fluid">
                          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars" />
                          </button>
                          <div className="collapse navbar-collapse" id="navbarExample01">
                          {/* ---------------------------------------------------------------place for header----------------------------------------------------------------------- */}
                            <UnAuthenticatedHeader loadSearchResults = {this.loadSearchResults}/> 
                          </div>
                        </div>
                      </nav>
                      {/* Navbar */}
                      {/* Background image */}
                      <div className="p-5 mb-4  text-center bg-image" style={{backgroundImage: 'url("https://mdbootstrap.com/img/new/slides/041.jpg")', height: 400, marginTop: 58}}>
                        <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                          <div className="d-flex justify-content-center align-items-center h-100">                  
                          </div>
                        </div>
                      </div>
                      {/* Background image */}
                  </header>
                  <Layout className = "mr-5 ml-5">
                    <Layout>
                      <Sider width={200} className="site-layout-background">
                        <Menu
                          mode="inline"
                          defaultSelectedKeys={["1"]}
                          defaultOpenKeys={["sub1"]}
                          style={{ height: "100%", borderRight: 0 }}
                        >
                          <Menu.Item key="1" onClick={()=>{this.changeType('starters')}}>STARTERS</Menu.Item>
                          <Menu.Item key="2" onClick={()=>{this.changeType('maincourse')}}>MAIN COURSE</Menu.Item>
                          <Menu.Item key="3" onClick={()=>{this.changeType('deserts')}}>DESERTS</Menu.Item>
                          <Menu.Item key="4" onClick={()=>{this.changeType('drinks')}}>DRINKS</Menu.Item>
                        </Menu>
                      </Sider>
                      <Layout style={{ padding: "0 24px 24px" }}>
                        <Breadcrumb style={{ margin: "16px 0" }}>
                        {/*Section: Block Content*/}
                        <section>
                        {/*Grid row*/}
                            <div className="row">
                              {/*Grid column*/}
                              <div className="col-lg-8">
                                {/* Card */}
                                <div className="mb-3">
                                  <div className="pt-4 wish-list">
                                  {/* we need to insert the appropriate  */}
                                    <h5 className="mb-4"></h5>
                                  {                                                                                                                     
                                      project().map((item, i) => { 
                                      return(
                                        <>
                                          <div className="row mb-4">
                                            <div className="col-md-5 col-lg-2 col-xl-2">
                                              <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                                <img className="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample" />
                                                <a href="#!">
                                                  <div className="mask">
                                                    <img className="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" />
                                                    <div className="mask rgba-black-slight" />
                                                  </div>  
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col-md-7 col-lg-9 col-xl-9">
                                              <div>
                                                <div className="d-flex justify-content-between">
                                                  <div>
                                                    <h5>{item.food_name}</h5>                                
                                                  </div>
                                                  <div>
                                                    {/* <div className="def-number-input number-input safari_only mb-0 w-100">
                                                      <button onClick="this.parentNode.querySelector('input[type=number]').stepDown()" className="minus decrease  " />
                                                      <input className="quantity" min={0} name="quantity" defaultValue={1} type="number" />
                                                      <button onClick="this.parentNode.querySelector('input[type=number]').stepUp()" className="plus increase" />
                                                    </div>  */}
                                                    {/*                                                             
                                                    <div className="qty mt-5">
                                                                  <span className="minus bg-dark">-</span>
                                                                  <input type="number" className="count" name="qty" value="1" />
                                                                  <span className="plus bg-dark">+</span>
                                                              </div>
                                                        */}
                                                  </div>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                
                                                  <p className="mb-0"><span><strong id="summary">{`$${item.price}`}</strong></span></p>
                                                  <button className = "btn btn-success" id = "addButt" onClick={()=>{this.onChange(item.price, item.food_name, this.state.type)}}>Add</button>
                                                  <button className = "btn btn-danger" onClick={()=>{this.onDelete(item.food_name,this.state.type)}}> Remove</button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <hr className="mb-4" />
                                        </>
                                      )                          
                                      })
                                                                                                                  
                                    }
                                    <div style = {{display:"flex", justifyContent:"flex-end"}}>
                                      <Link to = {{pathname:'/protected/viewcart'}}>
                                        <button className = "btn btn-primary">View Cart</button>
                                      </Link>
                                    </div>  
                                                              
                                    <p className="text-primary mb-0"><i className="fas fa-info-circle mr-1" /> Do not delay the purchase, adding
                                      items to your cart does not mean booking them.</p>
                                  </div>
                                </div>                              
                              </div>                                
                            </div>                    
                      </section>                                          
                  </Breadcrumb>
                </Layout>
              </Layout>
            </Layout>,
            <FooterPagePro/>                                  
          </>
            :      
            this.state.searchResults?
              <>
                <header >                  
                    <nav className="navbar navbar-expand-lg navbar-light bg-white ">
                      <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                          <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarExample01">
                        {/* ---------------------------------------------------------------place for header----------------------------------------------------------------------- */}
                      <HeaderSearch loadSearchResults = {this.loadSearchResults}/>
                        </div>
                      </div>
                    </nav>                  
                </header>
                <div className = "mt-5">
                  <CanteenResults canteenDetails = {this.state.searchResults} />
                </div>                
                <FooterPagePro/>    
              </>
            :
                <>
                  <header>
                      {/* Navbar */}
                      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                        <div className="container-fluid">
                          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars" />
                          </button>
                          <div className="collapse navbar-collapse" id="navbarExample01">
                          {/* ---------------------------------------------------------------place for header----------------------------------------------------------------------- */}
                        <HeaderSearch loadSearchResults = {this.loadSearchResults}/>
                          </div>
                        </div>
                      </nav>
                      {/* Navbar */}
                      {/* Background image */}
                      <div className="p-5 mb-4  text-center bg-image" style={{backgroundImage: 'url("https://mdbootstrap.com/img/new/slides/041.jpg")', height: 400, marginTop: 58}}>
                        <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                          <div className="d-flex justify-content-center align-items-center h-100">                  
                          </div>
                        </div>
                      </div>
                      {/* Background image */}
                  </header>
                  <Layout className = "mr-5 ml-5">
                    <Layout>
                      <Sider width={200} className="site-layout-background">
                        <Menu
                          mode="inline"
                          defaultSelectedKeys={["1"]}
                          defaultOpenKeys={["sub1"]}
                          style={{ height: "100%", borderRight: 0 }}
                        >
                          <Menu.Item key="1" onClick={()=>{this.changeType('starters')}}>STARTERS</Menu.Item>
                          <Menu.Item key="2" onClick={()=>{this.changeType('maincourse')}}>MAIN COURSE</Menu.Item>
                          <Menu.Item key="3" onClick={()=>{this.changeType('deserts')}}>DESERTS</Menu.Item>
                          <Menu.Item key="4" onClick={()=>{this.changeType('drinks')}}>DRINKS</Menu.Item>
                        </Menu>
                      </Sider>
                      <Layout style={{ padding: "0 24px 24px" }}>
                        <Breadcrumb style={{ margin: "16px 0" }}>
                        {/*Section: Block Content*/}
                        <section>
                        {/*Grid row*/}
                            <div className="row">
                              {/*Grid column*/}
                              <div className="col-lg-8">
                                {/* Card */}
                                <div className="mb-3">
                                  <div className="pt-4 wish-list">
                                  {/* we need to insert the appropriate  */}
                                    <h5 className="mb-4"></h5>
                                  {                                                                                                                     
                                      project().map((item, i) => { 
                                      return(
                                        <>
                                          <div className="row mb-4">
                                            <div className="col-md-5 col-lg-2 col-xl-2">
                                              <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                                <img className="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample" />
                                                <a href="#!">
                                                  <div className="mask">
                                                    <img className="img-fluid w-100"  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" />
                                                    <div className="mask rgba-black-slight" />
                                                  </div>  
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col-md-7 col-lg-9 col-xl-9">
                                              <div>
                                                <div className="d-flex justify-content-between">
                                                  <div>
                                                    <h5>{item.food_name}</h5>                                
                                                  </div>
                                                  <div>
                                                    {/* <div className="def-number-input number-input safari_only mb-0 w-100">
                                                      <button onClick="this.parentNode.querySelector('input[type=number]').stepDown()" className="minus decrease  " />
                                                      <input className="quantity" min={0} name="quantity" defaultValue={1} type="number" />
                                                      <button onClick="this.parentNode.querySelector('input[type=number]').stepUp()" className="plus increase" />
                                                    </div>  */}
                                                    {/*                                                             
                                                    <div className="qty mt-5">
                                                                  <span className="minus bg-dark">-</span>
                                                                  <input type="number" className="count" name="qty" value="1" />
                                                                  <span className="plus bg-dark">+</span>
                                                              </div>
                                                    */}
                                                  </div>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                               
                                                  <p className="mb-0" value={item.price}><span><strong id="summary" >{`$${item.price}`}</strong></span></p>
                                                  <button className = "btn btn-success" onClick={()=>{this.onChange(item.price, item.food_name,this.state.type)}}> Add</button>
                                                  <button className = "btn btn-danger" onClick={()=>{this.onDelete(item.food_name,this.state.type)}}> Remove</button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <hr className="mb-4" />
                                        </>
                                      )                          
                                      })                                                                                                                                                        
                                    } 
                                    <div style = {{display:"flex", justifyContent:"flex-end"}}>
                                      <Link to = {{pathname:`/protected/viewcart/${this.props.match.params.item}`}}>
                                          <button className = "btn btn-primary">View Cart</button>
                                      </Link>
                                    </div>
                                    <p className="text-primary mb-0"><i className="fas fa-info-circle mr-1" /> Do not delay the purchase, adding
                                      items to your cart does not mean booking them.</p>
                                  </div>
                                </div>                              
                              </div>                                
                            </div>                    
                      </section>                                          
                  </Breadcrumb>
                </Layout>
              </Layout>
            </Layout>,
            <FooterPagePro/>                                  
          </> 
          }
          </>
        );
    }
}
 
export default NewComponent ;