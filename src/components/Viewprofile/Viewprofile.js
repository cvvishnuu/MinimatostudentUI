import React, { useState } from 'react';
// import ProtectedNav from '../Protectednav/ProtectedNav';
// import SearchBar from '../SearchBar/SearchBar';
import ProfileHeader from './Header';
import Button from 'react-bootstrap/Button';
import { Modal }  from "react-responsive-modal";
import EditProfile from '../EditProfile/EditProfile';
import FooterPagePro from '../Footer/Footer';
import './ViewProfile.css';


const Viewprofile = () => {
    const [open, setOpen] = useState(false);
    const userInfo = JSON.parse(localStorage.getItem('User'));
    const { name, email, phoneNumber, address, gender } = userInfo;
    return ( 
        <div className = "viewprofile-container">
            <div >
                {/* <ProtectedNav name = {name} />
                <SearchBar />  */}
                <ProfileHeader />
            </div>
            {/* background image for the user  */}
            <div style = {{display:"flex",justifyContent:"center"}}>
                <div  style = {{width:"1150px"}} className="background-picture">
                    <h3 style = {{
                            textAlign: "start", 
                            display: "flex", 
                            height: "300px", 
                            marginLeft: "90px", 
                            color: "white", 
                            flexDirection: "column", 
                            alignContent: "center", 
                            justifyContent: "center"
                        }}
                    >
                        {`${name}`}
                    </h3>
                    
                </div>

            </div>
            {/* Here the profile pic and background-image component will be loaded and users name and image will be 
                    passed as props to the component  */}
            <div className = "display-container">
                <div className = "display-details-cont">
                    <h3>Personal Details</h3>
                    <div className = "input-space">
                        <label style = {{marginRight: "61px"}}>Full Name</label>
                        <input 
                            style = {{borderStyle:"none",textAlign:"center",borderRadius:"5px"}} 
                            className = "input-field" 
                            placeholder = {`${name}`} 
                            disabled
                        />
                    </div>
                    <div className = "input-space">
                        <label style={{marginRight:"94px"}}>Email</label>
                        <input  
                            style = {{borderStyle:"none",textAlign:"center",borderRadius:"5px"}} 
                            placeholder = {`${email}`} 
                            className = "input-field" 
                            disabled
                        />
                    </div>
                    <div className = "input-space">
                        <label style={{marginRight:"24px"}}>Phone Number</label>
                        <input 
                            style = {{borderStyle:"none",textAlign:"center",borderRadius:"5px"}} 
                            placeholder = {`${phoneNumber}`} 
                            className = "input-field" 
                            disabled
                        />
                    </div>
                    <div className = "input-space">
                        <label style={{marginRight:"78px"}}>Gender</label>
                        <input 
                            style = {{borderStyle:"none",textAlign:"center",borderRadius:"5px"}} 
                            placeholder = {`${gender}`} 
                            className = "input-field" 
                            disabled
                         />
                    </div>
                    <div className = "input-space">
                        <label style={{marginRight:"72px"}}>Address</label>
                        <div>
                            <textarea 
                                style = {{marginTop: "2vh", verticalAlign: "text-top", color: "black",borderStyle:"none",borderRadius:"5px"}} 
                                placeholder = {`${address}`} 
                                className = "address-field" 
                                value = {`${address}`}
                                disabled
                            >
                            </textarea>
                        </div>
                    </div>
                    <Button 
                        className = "input-space" 
                        style = {{padding: "5px 30px"}} 
                        onClick={() => setOpen(!open)} 
                        variant="danger" 
                    >
                        Edit
                    </Button>
                </div>
            </div>
            <Modal open = {open} onClose = {() => setOpen(!open)} center
                    styles={{
                    modal: {
                        animation: `${ open ? 'customEnterAnimation' : 'customLeaveAnimation'
                        } 500ms`,
                    }}}
                    classNames={{
                        modal: 'customModalViewProfile'
                    }}
                >
                    <EditProfile />
            </Modal>
            <FooterPagePro />
        </div>
    );    
}
 
export default Viewprofile;