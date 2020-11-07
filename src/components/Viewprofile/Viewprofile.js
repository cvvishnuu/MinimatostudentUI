import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal }  from "react-responsive-modal";
import EditProfile from '../EditProfile/EditProfile';
import ProfileHeader from '../Header/Header';
import FooterPagePro from '../Footer/Footer';
import './ViewProfile.css';


const Viewprofile = () => {
    const [open, setOpen] = useState(false);
    const userInfo = JSON.parse(localStorage.getItem('User'));
    const { name, email, phoneNumber, address, gender } = userInfo;
    return ( 
        <div className = "viewprofile-container">
            <div >
                <ProfileHeader />
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
            <div className = "form-wrap">
                <div className = "profile">
                    <img src="https://html5book.ru/wp-content/uploads/2016/10/profile-image.png" alt ="uma"/>
                    <h1>Регистрация</h1>
                </div>
                <form>
                    <div>
                        <label for="name">Имя</label>
                        <input type="text" name="name" required/>
                    </div>
                    <div className = "radio">
                        <span>Пол</span>
                        <label>
                            <input type="radio" name="sex" value="мужской"/>мужской
                            <div className = "radio-control male"></div>
                        </label>
                        <label>
                            <input type="radio" name="sex" value="женский"/>женский
                            <div className = "radio-control female"></div>
                        </label>
                    </div>
                    <div>
                        <label for="email">E-mail</label>
                        <input type="email" name="email" required/>
                    </div>
                    <div>
                        <label for="country">Страна</label>
                        <select name="country">
                            <option>Выберите страну проживания</option>
                            <option value="Россия">Россия</option> 
                            <option value="Украина">Украина</option> 
                            <option value="Беларусь">Беларусь</option> 
                        </select> 
                        <div className = "select-arrow"></div> 
                    </div> 
                    <button type="submit">Отправить</button> 
                </form> 
            </div>
            <FooterPagePro />
        </div>
    );    
}
 
export default Viewprofile;