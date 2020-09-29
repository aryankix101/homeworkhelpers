import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Footer from './Footer.js'
import MathPage from './curriculums/Math.js'
import ArtPage from './curriculums/Art.js'
import EnglishPage from './curriculums/English.js'
import TechPage from './curriculums/Tech.js'
import SciencePage from './curriculums/Science.js'

class CurriculumPage extends Component {
    state = {  }
    render() { 
        return (
        <Zoom>
        <div className="container" id="curriculum">
            <body>
                <style>{'body { background-color: #A8D0E6; }'}</style>
                <p><h1>Tech</h1></p>
                <li>Web Development</li>
                <li>Video Production</li>
                <li>Scratch</li>
                <li>Python- Basic</li>
                <li>Python- Advanced</li>
                <li>Java- Basic</li>
                <li>Java- Advanced</li>
                <li>Google Tools</li>
                <li>CAD 3D</li>
                <li>App Development</li>
                <p><h1>Science</h1></p>
                <li>Earth Science</li>
                <li>Ecology</li>
                <li>Humans and the Earth</li>
                <li>The Periodic Table</li>
                <li>Genetics</li>
                <li>Astronomy</li>
                <li>Body Anatomy</li>
                <li>Energy Systems</li>
                <p><h1>Math</h1></p>
                <li>PEMDAS</li>
                <li>Multiplication</li>
                <li>Fraction</li>
                <li>Division</li>
                <li>Counting</li>
                <li>And more!</li>
                <p><h1>English</h1></p>
                <li>Vocabulary</li>
                <li>And more!</li>
                <p><h1>Art</h1></p>
                <li>Art</li>
                <li>And more!</li>
                <br/>
            </body>
        </div>
        </Zoom>
        );
    }
}
 
export default CurriculumPage;