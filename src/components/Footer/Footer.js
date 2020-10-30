import React from "react";


const FooterPagePro = () => {
  return (    
        <footer style={{ backgroundColor:"#1C2331", marginTop: "20vh"}} className = "page-footer font-small mdb-color pt-4">
          <div className = "container text-center text-md-left"   >
            <div className = "row text-center text-md-left mt-3 pb-3" style={{ color:"white"}}>
              <div className = "col-md-3 col-lg-3 col-xl-3 mx-auto mt-3" >
                <h6 className = "text-uppercase mb-4 font-weight-bold">MiniMato</h6>
                <p >
                  MiniMato is an online food ordering application which is built using reactJS in the front-end UI and
                  nodeJS in the back-end server. 
                </p>
              </div>
              <hr className = "w-100 clearfix d-md-none"/>
              <div className = "col-md-2 col-lg-2 col-xl-2 mx-auto mt-3" >
                <h6 className = "text-uppercase mb-4 font-weight-bold">Frameworks</h6>
                <p>
                  <a style={{ color:"white"}} href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a>
                </p>
                <p>
                  <a style={{ color:"white"}} href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">React Bootstrap</a>
                </p>
                <p>
                  <a  style={{ color:"white"}} href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">NodeJS</a>
                </p>
                <p>
                  <a style={{ color:"white"}} href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">ExpessJS</a>
                </p>
              </div>
              <hr className = "w-100 clearfix d-md-none"/>
              <div className = "col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className = "text-uppercase mb-4 font-weight-bold">Developers</h6>
                <p>
                  <a style={{ color:"white"}} href="https://github.com/vssanjay" target="_blank" rel="noopener noreferrer">Sanjay Vasudevan</a>
                </p>
                <p>
                  <a style={{ color:"white"}} href="https://github.com/cvvishnuu" target="_blank" rel="noopener noreferrer">Vishnuu C.V</a>
                </p>
                <p>
                  <a style={{ color:"white"}} href="https://github.com/ajay311517104001/"  target="_blank" rel="noopener noreferrer">AJAY.B</a>
                </p>
                
              </div>
              <hr className = "w-100 clearfix d-md-none"/>
              <div className = "col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className = "text-uppercase mb-2 font-weight-bold">Contact</h6>
                <p>
                  <i className = "fas fa-home mr-1"></i> India, Chennai</p>
                <p>
                  <i className = "fas fa-home mr-1"></i> vssanjay.sanju@gmail.com</p>
                <p>
                  <i className = "fas fa-envelope mr-1"></i> cvvishnuu01@gmail.com</p>
                <p>
                  <i className = "fas fa-envelope mr-1"></i> ajaysaimageshwaran1999@gmail.com</p>
              </div>
            </div>
            <hr style = {{backgroundColor: "white"}}/>
            <div className = "row d-flex align-items-center">
              <div className = "col-md-7 col-lg-8">
                <p style = {{color: "white"}} className = "text-center text-md-left">© 2020 Copyright:
                  <a href="https://mdbootstrap.com/">
                    <strong> MiniMato.com</strong>
                  </a>
                </p>
              </div>
              <div className = "col-md-5 col-lg-4 ml-lg-0">
                <div className = "text-center text-md-right">
                  <ul className = "list-unstyled list-inline">
                    <li className = "list-inline-item">
                      <a href = "#!" className = "btn-floating btn-sm rgba-white-slight mx-1">
                        <i className = "fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className = "list-inline-item">
                      <a href = "#!" className = "btn-floating btn-sm rgba-white-slight mx-1">
                        <i className = "fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className = "list-inline-item">
                      <a href = "#!" className = "btn-floating btn-sm rgba-white-slight mx-1">
                        <i className = "fab fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li className = "list-inline-item">
                      <a href = "#!" className = "btn-floating btn-sm rgba-white-slight mx-1">
                        <i className = "fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
    );
}

export default FooterPagePro;