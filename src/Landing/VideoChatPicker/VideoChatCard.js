import React from 'react';
import classes from './VideoChatCard.css'


const VideoChatCard = ({ video }) => {

    const styles = {
        innerContainer: {
            backgroundColor: "black",
            minWidth: "500px",
            minHeight: "400px"
        }
    }

    return <div className={"container"}>
        <div style={styles.innerContainer}>

        </div>
        <div style={{marginTop: "4px"}}>
            <div style={{fontWeight: "800", fontSize: "15pt", marginBottom: "6px"}}>
                {video.title}
            </div>
            <div style={{fontWeight: "100pt", fontSize: "10pt"}}>
                {video.author}
            </div>
        </div>
    </div>
};

export default VideoChatCard;