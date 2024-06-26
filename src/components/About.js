import { useRef } from "react";
import styled from "styled-components"
import { BiRightArrow } from "react-icons/bi";
import { motion, useScroll, useMotionValueEvent, useAnimation } from "framer-motion";

import { Title } from "./Title";

export const About = () => {
  
  const ref = useRef();
  const control = useAnimation();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["100px end", "75% start"]
  });

  useMotionValueEvent(scrollYProgress, "change", (val) => {
    if(val>0 && val<1){
        document.querySelector('.about-me').classList.add('is-active');
        control.start('visible');
    } else {
        document.querySelector('.about-me').classList.remove('is-active');
        control.start('hidden');
    }
  });

  return (
    <Container 
        as={motion.div} 
        variants={{
            visible: {opacity: 1, transition: {duration: .25, ease: "easeInOut"}},
            hidden: {opacity: 0, transition: {duration: .1, ease: "easeInOut"}}
        }}
        animate={control}
        initial={{opacity: 0}} 
        ref={ref} 
        className='container'
        id='about-me'
    >
        <Title title='Who am I?'/>
        <div className="details">
            <div className="image">
                <img
                    src={'https://drive.google.com/uc?export=view&id=1yogCABx38B_-YxNz_B5q-0vuDdkinIKk'}
                    alt={'profile'}
                />
            </div>
            <div className="about">
                <p>
                    I am <span style={{
                        color:"red",
                        opacity: "1",
                        fontWeight: "bold"
                        
                        }}>Hash</span>, and I am currently pursuing a degree in Computer Science (almost complete 🙂). 
                    I have a keen interest in Problem Solving, Web Development, and Software Development, and have been learning about these topics for the past four years.
                    Although I am not yet an expert, I have gained a solid foundation in various areas of computer science, 
                    starting from my first program in 2019 to more advanced topics like Machine Learning.
                </p>
                
                <p>
                    As part of my final year project, I am currently exploring RealTime communication using WebRTC and adding a compiler functionality, 
                    and I am also working on personal projects to further enhance my skills. 
                    I am committed to continuous learning and improvement, 
                    and am excited to see where my journey in the field of computer science will take me.
                </p>
                
                <p> Here is my educational background: </p>
                
                <ul className="education">
                    <li className="education-li">
                        <h4>Computer Science & Engineering</h4>
                        <span>Maharaj Vijayaram Gajapathi Raj College of Engineering| (2020 - 2024)</span>
                        <ul>
                            <li><BiRightArrow className="bullet"/> Studied Computer fundamentals like programming, DBMS, OS, etc.</li>
                            <li><BiRightArrow className="bullet"/> Got 8.01 CGPA out of 10.</li>
                            {/* <li><BiRightArrow className="bullet"/> Got Merit Cum Means(MCM) Scholarship.</li> */}
                        </ul>
                    </li>
                    <li className="education-li">
                        <h4>Higher Secondary Eduction</h4>
                        <span>Narayana Jr College | (2018 - 2020)</span>
                        <ul>
                            <li><BiRightArrow className="bullet"/> Studied Physics, Maths and Chemistry.</li>
                            <li><BiRightArrow className="bullet"/> Scored 85% in the CBSE board examination.</li>
                            {/* <li><BiRightArrow className="bullet"/> Got the 1st Rank in Aravalli District.</li> */}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </Container>
  )
}


const Container = styled.div`
    .about{
        font-size: 1.175em;
        letter-spacing: normal;
        width: 55%;
        opacity: .7;
        p{margin-bottom: .75em;}
        display: inline-block;

        @media (max-width: 960px) {
            width: 100%;
        }

        @media (max-width: 500px) {
           text-align: justify;
           font-size: .9em;
        }
    }

    .education{
        h4{
            font-weight: 500;
            color: #76b687;
        }

        @media (max-width: 960px) {
            margin-left: 1.75em;
        }

        @media (max-width: 600px) {
            margin-left: 0;
        }

        @media (max-width: 500px) {
            text-align: left;
            font-size: .8em;
        }

        span{ 
            font-size: 0.85em; 
            @media screen {
                font-size: .75em;
            }

        }
        .education-li{ 
            margin-bottom: 1em; 
            ul{ margin-top: .5em; }
        }
    }

    .details{
        padding: 1em;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .image{
        border-radius: 10px;
        margin-top: 2.5em;
        margin-left: 2em;
        contain: content;
        height: 225px;

        @media (max-width: 960px) {
            display: block;
            margin-bottom: 2em;
            margin-inline: auto;
            margin-top: 1em;
        }
    }
`;