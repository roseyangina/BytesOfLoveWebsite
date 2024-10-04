import { useState, useRef } from 'react'; // Removed useEffect since it's not needed
import Navbar from "../Navbar/Navbar"; // Import the Navbar
import "./GetInvolved.css"; // Styles specific to this page
import "../Home/Home.css"; // Import shared styles

const GetInvolved = () => {
    const [isMuted, setIsMuted] = useState(false); // Initialize as muted 
    const audioRef = useRef(null); // Ref for the audio element

    

    return (
        <div className="get-involved-page-container">
            <Navbar /> 
            <div className="get-involved-title">
                Get <span className="animated-involved">Involved</span><span className="static">|</span>
                <span className="animated-open-source"> OpenSource</span><span className="static">!</span>
            </div>
            <div className="get-involved-description">
                Open Source Club is a great community to further your learnings.
            </div>
            <div className="get-involved-join">
                Become a part of our community and learn more about us by joining our 
                <a href="https://discord.gg/9hz7xYzv" target="_blank" rel="noopener noreferrer">
                    {' '}Discord
                </a>
            </div>
        </div>
    );
};

export default GetInvolved;