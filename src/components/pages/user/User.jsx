import { PermIdentity,CalendarToday,PhoneAndroid,MailOutline,LocationSearching, Publish  } from '@material-ui/icons'
import './user.scss'

export const User = () => {
  return (
    <>
        <div className='user'>
            <div className="userTitleContainer">
                <div className="userTitle">Edit User</div>
                <button className="userAddButton">Create</button>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Micheal Khol</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowButton">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">mickhol78</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">+92 345 663 65</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">mickhol78@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder='mickhol78' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Date of birth</label>
                                <input type="text" placeholder='10.12.1999' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Contact Number</label>
                                <input type="text" placeholder='+92 345 663 65' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder='mickhol78@gmail.com' className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Location</label>
                                <input type="text" placeholder='New York | USA' className='userUpdateInput' />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='userUpdateImg' />
                                <label htmlFor="file">
                                    <Publish/>
                                </label>
                                <input type="file" style={{display: "none"}} />
                            </div>
                            <div className="userUpdateButton">
                                <button className="userUpdateButtonIcon">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
