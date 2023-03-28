import '/Users/navid/Documents/NavidInc/portfoliov2/src/styles/App.css';
import '/Users/navid/Documents/NavidInc/portfoliov2/src/styles/bounce.css';
// import './contact.css'
import '/Users/navid/Documents/NavidInc/portfoliov2/src/styles/circles.css'
import Sidebar from '/Users/navid/Documents/NavidInc/portfoliov2/src/pages/Navbar.js';
import skate from '/Users/navid/Documents/NavidInc/portfoliov2/src/graphics/skate.gif';
import React, {useEffect, useRef} from 'react';
import Typewriter from "typewriter-effect";
// import "https://unpkg.com/aos@next/dist/aos.css"
// import "aos/dist/aos.css";
import Button from '@mui/material/Button';
import Aos from "aos";
// import "aos/dist/aos.css";
import emailjs from '@emailjs/browser'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// import configData from './config.json';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function App() {
  useEffect(() =>{
    Aos.init(); 
  }, [])

  const form = useRef();
  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const message = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(configData.one, configData.two, form.current, configData.three)
      .then((result) => {
          console.log(result.text);
          firstName.current.value = '';
          lastName.current.value = '';
          email.current.value = '';
          phone.current.value = '';
          message.current.value = '';
      }, (error) => {
          console.log(error.text);
      });
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#b8bbbd',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <div className="App">
      <div class="area" >
        <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
        </ul>
      </div>
    
      <Sidebar/>

      <div id='intro'>
        <div id='name'>
          <div className="bouncing-text">
            <div className="b">H</div>
            <div className="o">i</div>
            <div className="u">,</div>
          </div>
          <div className="bouncing-text">
            <div className="b">I</div>
            <div className="o">'</div>
            <div className="u">m</div>
            <div className="n"></div>
            <div className="c">N</div>
            <div className="e">a</div>
            <div className="f">v</div>
            <div className="g">i</div>
            <div className="h">d</div>
          </div>
        </div>
      </div>

      <div id='aboutMe'>
        <div id='type'> 
          <Typewriter onInit={(typewriter)=> {
                typewriter
                .typeString("Who Am I?")
                .start();
              }
            }
          />
        </div>
        <div id='biography'>
          <div id='biographyText'>
            <h4 data-aos="fade-down " data-aos-delay="100" >Hello and welcome to my portfolio website! My name is Navid and I'm an undergraduate student at NYU, studying Computer Science with a minor in Web Development. </h4>
            <br/>
            <h4 data-aos="fade-down " data-aos-delay="150">As a full stack developer, I have a strong foundation in both front-end and back-end technologies. I also have a deep interest in the rapidly growing fields of machine learning and artificial intelligence and the role that technology can play in the medical field. I'm passionate about applying them to improve health tech.
            </h4> 
            <br/>
            <h4 data-aos="fade-down " data-aos-delay="200">In my free time, I enjoy staying up late to play games, watching shows and anime, and skateboarding. I'm thrilled to share my coding abilities and the projects I've worked on. Thank you for visiting my website!</h4>
          </div>
        </div>
      </div>

      <div id='skills'>
        <div id='type'> 
          <Typewriter onInit={(typewriter)=> {
                typewriter
                .typeString("Some Things I Know")
                .start();
              }
            }
          />
        </div>
      
        <div id='skillsText'>
          <div id='coding'>
            <div data-aos="fade-down " data-aos-delay="300">Python</div> 
            <div data-aos="fade-down" data-aos-delay="400">Java</div>
            <div data-aos="fade-down" data-aos-delay="500">Javascript</div>
            <div data-aos="fade-down" data-aos-delay="600">NodeJS</div>
            <div data-aos="fade-down" data-aos-delay="700">Express</div>
            <div data-aos="fade-down" data-aos-delay="800">React</div>
            <div data-aos="fade-down" data-aos-delay="900">HTML</div>
            <div data-aos="fade-down" data-aos-delay="1000">CSS</div>
            <div data-aos="fade-down" data-aos-delay="1100">Swift</div>
            <div data-aos="fade-down" data-aos-delay="1200">LaTex</div>
          </div>
          <div id='cloud' data-aos="fade-right" >
            <div data-aos="fade-down " data-aos-delay="200">Squarespace</div>
            <div data-aos="fade-down " data-aos-delay="300">AWS:</div>
            <div id='thtt' data-aos="fade-down" data-aos-delay="400">DynamoDB</div>
            <div id='thtt' data-aos="fade-down" data-aos-delay="500">Lambda</div>
            <div id='thtt' data-aos="fade-down" data-aos-delay="600">Cloudwatch</div>
            <div id='thtt' data-aos="fade-down" data-aos-delay="700">S3</div>
            <div id='thtt' data-aos="fade-down" data-aos-delay="800">API Gateway</div>
            <div id='thtt' data-aos="fade-down" data-aos-delay="900">AWS Amplify</div>
            <div id='thtt' data-aos="fade-down" data-aos-delay="1000">EC2</div>
            <div id='thtt' data-aos="fade-down" data-aos-delay="1100">ECR</div>
            <div id='thtt' data-aos="fade-down" data-aos-delay="1100">RDS</div>
          </div>
          <div id='other' data-aos="fade-right" >
            <div data-aos="fade-down " data-aos-delay="200">API Development</div>
            <div data-aos="fade-down " data-aos-delay="300">Automation</div>
            <div data-aos="fade-down " data-aos-delay="400">Web Scraping (Puppeteer, Cheerio)</div>
            <div data-aos="fade-down " data-aos-delay="500">Capture & Analyze Network Traffic</div>
            <div data-aos="fade-down " data-aos-delay="600">Proficient in OpenAI GPT-3 and other NLP models</div>
          </div>
        </div>
      </div>

      <div id='projects'>
        <div id='type'> 
          <Typewriter onInit={(typewriter)=> {
                typewriter
                .typeString("My Projects")
                .start();
              }
            }
          />
        </div>
        <Box sx={{ flexGrow: 7 }} id='box'>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} id="projects">
              <Grid item xs={2} sm={4} md={4}>
                <Item id="projectBox">
                  <h4>iMessage Prompts</h4>
                  <p>Utilizes OpenAI models to generate answers to prompts and produce visually stunning images, all from the convenience of iMessage</p>
                </Item>
                <br/>
                <Item id="projectBox">
                  <h4>iMessage Prompts</h4>
                  <p>Utilizes OpenAI models to generate answers to prompts and produce visually stunning images, all from the convenience of iMessage</p>
                </Item>
                <br/>
                <Item id="projectBox">
                  <h4>iMessage Prompts</h4>
                  <p>Utilizes OpenAI models to generate answers to prompts and produce visually stunning images, all from the convenience of iMessage</p>
                </Item>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Item id="projectBox">
                  <h4>iMessage Prompts</h4>
                  <p>Utilizes OpenAI models to generate answers to prompts and produce visually stunning images, all from the convenience of iMessage</p>
                </Item>
                <br/>
                <Item id="projectBox">
                  <h4>iMessage Prompts</h4>
                  <p>Utilizes OpenAI models to generate answers to prompts and produce visually stunning images, all from the convenience of iMessage</p>
                </Item>
                <br/>
                <Item id="projectBox">
                  <h4>iMessage Prompts</h4>
                  <p>Utilizes OpenAI models to generate answers to prompts and produce visually stunning images, all from the convenience of iMessage</p>
                </Item>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Item id="projectBox">
                  <h4>iMessage Prompts</h4>
                  <p>Utilizes OpenAI models to generate answers to prompts and produce visually stunning images, all from the convenience of iMessage</p>
                </Item>
                <br/>
                <Item id="projectBox">
                  <h4>iMessage Prompts</h4>
                  <p>Utilizes OpenAI models to generate answers to prompts and produce visually stunning images, all from the convenience of iMessage</p>
                </Item>
                <br/>
                <Item id="projectBox">
                  <h4>iMessage Prompts</h4>
                  <p>Utilizes OpenAI models to generate answers to prompts and produce visually stunning images, all from the convenience of iMessage</p>
                </Item>
              </Grid>
          </Grid>
        </Box>
      </div>

      <div id='contact'>
        <div id='type'> 
          <Typewriter onInit={(typewriter)=> {
                typewriter
                .typeString("Contact Me")
                .start();
              }
            }
          />
        </div>
        <div id='contactForm'>
          <form id='form2' ref={form} onSubmit={sendEmail}>
          <div data-aos="fade-down " data-aos-delay="200">
            <input  type='text' id='firstName' ref={firstName} placeholder='First Name' required></input>
          </div>
          <div data-aos="fade-down " data-aos-delay="300">
            <input type='text' id='lastName' ref={lastName} placeholder='Last Name'   required></input>
          </div>
          <div data-aos="fade-down " data-aos-delay="400">
            <input type='email' id='email' ref={email} placeholder='Email'  required></input>
          </div>
          <div data-aos="fade-down " data-aos-delay="500">
            <input type='text' id='phone' ref={phone} placeholder='Phone Number'  required></input>
          </div>
          <div data-aos="fade-down " data-aos-delay="600">
            <textarea id='message' ref={message} placeholder='Message'  required></textarea>
          </div>
          <div data-aos="fade-down " data-aos-delay="700">
            <button id='butt' type='submit' value='send'>Send</button>
          </div>
          </form>
        </div>
      </div>

      <div id='footer'>
        <Button
          variant="link"
          color=""
          startIcon={< LinkedInIcon style={{ fontSize: 40 }}/>}
          href="https://www.linkedin.com/in/navid-c/"
          target="_blank" rel="noopener noreferrer"
        />
        <Button 
          variant="link"
          color=""
          startIcon={< GitHubIcon style={{ fontSize: 40 }}/>}
          href="https://github.com/N-A-V-I-D"
          target="_blank" rel="noopener noreferrer"
        />
      </div>
  </div>
  </>
  );
}

export default App;
