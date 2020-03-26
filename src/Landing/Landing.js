import React from 'react';
import CategoryChooser from './CategoryChooser';
import VideoChatPicker from './VideoChatPicker/VideoChatPicker';
import NetworkImage from './network.svg';


const VIDEOS = [{
    author: "Natur",
    title: "Is you Deleuze on your Guattari"
}, {
    author: "Ori Shochat",
    title: "Juggling for Love"
}, {
    author: "Maor Kern",
    title: "Sex Cam"
}, {
    author: "Gilad Kleinman",
    title: "Let's program together"
}, {
    author: "Ori Perlmuter",
    title: "What's in a last name?"
}];


const Landing = () => {

    const styles = {
        container: {
            backgroundColor: "rgb(23, 32, 42)",
            height: "100%",
            color: "white",
            fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, Ubuntu"
        },
        content: {
            display: "flex",
        },
        categoryChooserContainer: {
            marginLeft: "50px",
            marginTop: "70px",
            marginRight: "15px"
        },
        videoChatPickerContainer: {
            height: "100%",
            marginLeft: "20px",
            marginTop: "70px"
        }
    };

    return (<div style={styles.container}>
        {/* <div style={{height: "60px"}}>
            <NetworkImage />
        </div> */}
        <div style={styles.content}>
        <div style={styles.categoryChooserContainer}>
            <CategoryChooser categories={["Lessons", "Workouts", "Chatting", "Politics", "Games"]} />
        </div>
        <div style={styles.videoChatPickerContainer}>
            <VideoChatPicker videos={VIDEOS}/>
        </div>
    </div>
    </div>)
};

export default Landing;
