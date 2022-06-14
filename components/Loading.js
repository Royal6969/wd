import Image from "next/image";
// import { Circle } from 'better-react-spinkit'; // error: Could not find a declaration file for module 'better-react-spinkit'
import '../node_modules/spinkit/spinkit.min.css';

function Loading() {
    return (
        <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
            <div>
                <Image
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
                    alt=""
                    style={{ marginBottom: 10 }} //Image with src "http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" is using unsupported "style" property. Please use the "className" property instead. ... it would be better set a class for it
                    height={200}
                    width={200} //next needs set width and height, or set layout=fill
                />
                {/* npm install better-react-spinkit */}
                {/* <Circle color="3CBC28" size={60} />  */} {/* Prop `style` did not match. */}
                
                {/* npm install spinkit */}
                {<div className="sk-circle">
                    <div className="sk-circle-dot"></div>
                    <div className="sk-circle-dot"></div>
                    <div className="sk-circle-dot"></div>
                    <div className="sk-circle-dot"></div>
                    <div className="sk-circle-dot"></div>
                    <div className="sk-circle-dot"></div>
                    <div className="sk-circle-dot"></div>
                    <div className="sk-circle-dot"></div>
                    <div className="sk-circle-dot"></div>
                    <div className="sk-circle-dot"></div>
                    <div className="sk-circle-dot"></div>
                    <div className="sk-circle-dot"></div>
                </div>} 
            </div>
        </center>
    );
}

export default Loading;