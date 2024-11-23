import React from 'react';
import {useParams} from "react-router-dom";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = ()=>{
    const {roomId} = useParams();
    const myMeeting = async (element) =>{
        const appID = 1500281923;
        const serverSecret = "ff1fdd1c0f76583ab6e85538c32696b4";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Bhuvanesh"
        );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({

            container: element,
            sharedLinks:[
                {
                    name:'Copy Link',
                    url: `http://localhost:3000/room/${roomId}`
                }
            ],
            scenario:{
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: false,
        })
    }
    return (<div>
        <div ref= {myMeeting} />
    </div>);
}

export default RoomPage