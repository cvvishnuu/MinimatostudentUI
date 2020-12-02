import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal }  from "react-responsive-modal";
import EditProfile from '../EditProfile/EditProfile';
import Header from '../Header/Header';
import FooterPagePro from '../Footer/Footer';
import './ViewProfile.css';
import axios from 'axios';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';


const profilePicHandler = () => {
    const image = document.getElementById("profileImageInput");
    image.click();
}



const Viewprofile = () => {
    const [open, setOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState('null');
    const [image, setImage] = useState();
    const userInfo = JSON.parse(localStorage.getItem('User'));
    const { id, name, email, phoneNumber, address, gender } = userInfo;
    const imageInfo = JSON.parse(localStorage.getItem('Image'));
    // const { b64, mimeType } = imageInfo;
    console.log("This is the id "+ id)
    // const [b64, setB64] = useState()
    // const [mimeType, setMimeType] = useState();

    useEffect(() => {
        console.log(id)
        axios.get('http://localhost:5000/student/getImage', {
            headers : {
                id: id
            },
        })
        .then(res => {
            console.log(res.data.payload);
            // setB64(res.data.payload.b64);
            // setMimeType(res.data.payload.mimeType);
            localStorage.setItem("Image", JSON.stringify({
                b64: res.data.payload.b64,
                mimeType: res.data.payload.mimeType
            }))
        })
    }, []);



    const onInputHandler = (event) => {
        console.log(event.target.files)
        setSelectedFile(event.target.files[0])
    }
    
    const onUploadHandler = (event) => {
        const userInfo = JSON.parse(localStorage.getItem('User'));
        const { id } = userInfo;
        const token = JSON.parse(localStorage.getItem('Authorization'))
        const fd = new FormData();
        event.preventDefault();
        fd.append('picture', selectedFile, selectedFile.name);
        fd.append('id',id)                
        axios.post('http://localhost:5000/student/uploadImage', fd)
        .then(res => {
            console.log(res);
        })
        setTimeout(function() {
            // window.location.reload();
            document.location.reload()
        }, 3000)
    }

    return ( 
        <div className = "viewprofile-container">
            <div >
                <Header />
            </div>
            {/* background image for the user  */}
            <div style = {{display:"flex",justifyContent:"center"}}>
                <div  style = {{width:"1150px"}} className="background-picture">
                    <h3 style = {{
                            textAlign: "start", 
                            display: "flex", 
                            height: "200px", 
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
            <div className = "form-wrap theDiv display-container">
                <div className = "profile theDiv">
                    {
                        (imageInfo)?
                        <img 
                            src={`data:${imageInfo.mimeType};base64,${imageInfo.b64}`}
                            alt = "profile-pic" 
                            onClick = {profilePicHandler}       
                            id = "profileImage"                                     
                        />
                        :
                        <Avatar size={120} icon={<UserOutlined />} onClick = {profilePicHandler} id = "antimage"/>
                    }
                    {/* <img 
                        src={`data:${mimeType};base64,${b64}`}
                        alt = "profile-pic" 
                        onClick = {profilePicHandler}       
                        id = "profileImage"                                     
                    /> */}
                    <input 
                        type = 'file' 
                        name = 'picture' 
                        id = "profileImageInput"
                        style = {{display: "none"}}
                        onChange = {onInputHandler}
                    />
                    <button className = "btn btn-success mt-3" onClick = {onUploadHandler}>Upload</button>
                    {/* <h1 className = "vp-header">{`${name}`}</h1> */}
                </div>
                <form className = "vp-form">
                    <div className = "theDiv">
                        <label htmlFor = "name" className = "vp-label">Full Name</label>
                        <input 
                            className = "vp-text"                             
                            placeholder = {`${name}`} 
                            disabled/>
                    </div>
                    <div className = "theDiv">
                        <label htmlFor = "name" className = "vp-label">Email</label>
                        <input 
                            className = "vp-text"                           
                            placeholder = {`${email}`} 
                            disabled/>
                    </div>
                    <div className = "theDiv">
                        <label htmlFor = "name" className = "vp-label">Phone Number</label>
                        <input 
                            className = "vp-text"                          
                            placeholder = {`${phoneNumber}`} 
                            disabled/>
                    </div>
                    <div className = "theDiv">
                        <label htmlFor = "name" className = "vp-label">Gender</label>
                        <input 
                            className = "vp-text" 
                            placeholder = {`${gender}`} 
                            disabled/>
                    </div>
                    <div className = "theDiv">
                        <label htmlFor = "name" className = "vp-label">Address</label>
                        <textarea 
                                style = {{marginTop: "2vh", verticalAlign: "text-top", color: "black",borderStyle:"none",borderRadius:"5px"}} 
                                placeholder = {`${address}`} 
                                className = "vp-text" 
                                value = {`${address}`}
                                disabled
                            >
                        </textarea>
                    </div>
                    <Button 
                        className = "input-space" 
                        style = {{padding: "5px 30px"}} 
                        onClick={() => setOpen(!open)} 
                        variant="danger" 
                    >
                        Edit
                    </Button>
                </form> 
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
            </div>
            <FooterPagePro />
        </div>
    );    
}
 
export default Viewprofile;