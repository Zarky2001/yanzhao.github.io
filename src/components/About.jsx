import React from "react";
import "../css/All.css";

function About() {
    return (
        <div className="about" id="about">
            <div className="intro-text">
                Hi, I&apos;m <strong>Zarky (Yan Zhao / 赵妍)</strong>. I am currently a Ph.D. student
                in <strong>Computer Science and Technology</strong> at Hefei University of Technology,
                advised by Prof. Xueliang Liu.
                <br /><br />
                I received my academic master&apos;s degree in <strong>Computer Application Technology</strong>{" "}
                from Minnan Normal University, where I was advised by <a
    href="https://fhqxa.github.io/"
    target="_blank"
    rel="noopener noreferrer"
>
    Prof. Hong Zhao
</a>, and my bachelor&apos;s
                degree in <strong>Software Engineering</strong> from the School of Information Engineering,
                Hangzhou Dianzi University.
                <br /><br />
                <div className="callout">
                    My research interests include chain-of-thought reasoning, multimodal reasoning, and long-tailed image classification.
                </div>
            </div>
        </div>
    );
}

export default About;
