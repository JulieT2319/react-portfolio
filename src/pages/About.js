import React from 'react'
import Headshot from "../img/julie.jpg";


export default function About() {

  return (
    <div className="container teal lighten-4 rounded">
      <div className="row">
        <h2 className="center cyan rounded-top darken-3 white-text font-xstitch">
          About Me
      </h2>
        <div className="col s12 m4">
          <img src={Headshot} className="responsive-img rounded" alt="Julie Theriault head shot" />
        </div>
        <div className="col s12 m8">
          <p>
            I graduated from Brigham Young University in 2011. After
            graduation I took a job at a local market research firm, where I
            was quickly promoted to Lead Programmer. While there I have
            learned the ins and outs of working in a small business. My roll
            as lead programmer has involved extensively using survey specific
            software programming and scripting packages - including Survox,
            Qualtrics and Sawtooth.
        </p>
          <p>
            I have always loved puzzles and problem solving, particularly
            logic based puzzles. My hobbies are reading, cross stitching, and
            gaming of all kinds. Currently my favorite author is Brandon
            Sanderson. My current favorite downtime activity is listening to
            an audio book while cross stitching or playing Minecraft.
        </p>
          <p>
            Coding and programming have been interests of mine since my teens.
            My first project was customizing a myspace page in all the glory
            that was early 2000s teen html knowledge. Since then I have
            pursued learning how to use many different programming languages
            and platforms as a hobby.
        </p>
        </div>
      </div>
    </div>
  )
}