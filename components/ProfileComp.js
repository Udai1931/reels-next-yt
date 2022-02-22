import React from 'react'
import Navbar from './Navbar'
function ProfileComp() {
    return (
        <div>
            <Navbar/>
            <div>
                <div className='profile_upper'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/reels-next.appspot.com/o/pexels-mohamed-abdelghaffar-771742.jpg?alt=media&token=1e886354-24a7-458d-ba46-203c25eaaa20' style={{height:"8rem",width:"8rem",borderRadius:"50%"}}/>
                    <div style={{flexBasis:"40%"}}>
                        <h1>Name</h1>
                        <h3>Posts : 10</h3>
                    </div>
                </div>
                <hr/>
                <div className='profile_videos'>
                    <video src="https://firebasestorage.googleapis.com/v0/b/reels-next.appspot.com/o/posts%2F9ccfcb74-0c49-4291-94a8-204c519e8ba6?alt=media&token=b0d93373-17f6-4fb5-a043-34db03ba8b59"/>
                    <video src="https://firebasestorage.googleapis.com/v0/b/reels-next.appspot.com/o/posts%2F9ccfcb74-0c49-4291-94a8-204c519e8ba6?alt=media&token=b0d93373-17f6-4fb5-a043-34db03ba8b59"/>
                    <video src="https://firebasestorage.googleapis.com/v0/b/reels-next.appspot.com/o/posts%2F9ccfcb74-0c49-4291-94a8-204c519e8ba6?alt=media&token=b0d93373-17f6-4fb5-a043-34db03ba8b59"/>
                </div>
            </div>
        </div>
    )
}

export default ProfileComp
