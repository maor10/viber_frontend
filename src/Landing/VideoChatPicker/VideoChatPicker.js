import React from 'react';
import VideoChatCard from './VideoChatCard';
import './VideoChatPicker.css'

const VideoChatPicker = ({ videos }) => {
    
    const styles = {
        videosContainer: {
            display: "flex",
            flexWrap: "wrap",
            overflowY: "scroll"
        },
        videoChatCardContainer: {
            margin: "15px"
        },
        searchInput: {
            backgroundColor: "transparent",
            borderRadius: "25px",
            padding: "10px",
            fontSize: "12pt",
            height: "17px",
            paddingLeft: "30px",
            width: "200px",
            border: "1px solid white",
            color: "white",
        },
    }
    return (<div style={styles.container}>
        <div style={{justifyContent: "space-between", marginRight: "50px", display: "flex", marginBottom: "13px", marginLeft: "8px"}}>
            <div>
            <input style={styles.searchInput} placeholder="Search for a group..." />
            </div>
            <div>
                <button className="createButton">Create Group Chat</button>
            </div>
        </div>
        <div style={styles.videosContainer}>
            {
                videos.map(video => <div style={styles.videoChatCardContainer}><VideoChatCard video={video} /></div>)
            }
        </div>
    </div>);
};

export default VideoChatPicker;