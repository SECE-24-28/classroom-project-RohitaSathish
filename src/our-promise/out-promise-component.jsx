import React from "react";
import {OurPromiseStyle}from "./our-promise-style"
const OurPromiseComponent = ()=>{
    return(
    
        <OurPromiseStyle>
        <div>
        <h1 className="heading">Our Promise</h1>
        <h4 className="subheading">As part of our high quality service , we'd like to offer somethingextra too.</h4>
        </div>
        <div className="parent">
        <div className="child1">
            <span className="topic">Top Code Quality</span>
            <br></br>
            <span className="content">Our commitment goes beyond mere code - it encompasses providing solutions. You receive W3C fully compliant markup, without any compromise on quality.</span>
        </div>
        <div classname="child2"> 
            <span className="topic">Responsive</span>
            <br></br>
            <span className="content">We understand the value of a positive attitude, timely responsiveness, and adaptability. We're dedicated to attentively listening and leveraging our utmost capabilities to serve you.</span>
        </div>
        <div className="child3">
            <span className="topic">Rockstar Team</span>
            <br></br>
            <span className="content">Our expertise is our unique selling proposition. You'll have access to an all-star team of experienced professionals fully dedicated to serving you, armed with coding skills that are truly exceptional.</span>
        </div>
        <div className="child4">
            <span className="topic">Fast Turn-arounds</span>
            <br></br>
            <span className="content">The importance of speed is on par with quality for us. We are swift, nimble, and capable of providing high-quality code within a timeframe that suits your preferences.</span>
        </div>
        <div className="child5">
            <span className="topic">Life-Time support</span>
            <br></br>
            <span className="content">Our commitment to code quality is exemplified by our enduring support. If any bugs happen to emerge in the future, feel free to reach out to us for assistance.</span>
        </div>
        <div className="child6">
            <span className="topic">Secured Agreement</span>
            <br></br>
            <span className="content">The creative work you receive is entirely your own, and we unequivocally respect that. We assure you of our commitment and readiness to formalize this with a Non-Disclosure Agreement (NDA).</span>
        </div>
        </div>
        </OurPromiseStyle>
        
    )
}
export default OurPromiseComponent;