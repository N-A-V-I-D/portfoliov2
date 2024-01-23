import '/Users/navid/Documents/NavidInc/portfoliov2/src/styles/App.css';
import '/Users/navid/Documents/NavidInc/portfoliov2/src/styles/bounce.css';
// import '/Users/navid/Documents/NavidInc/portfoliov2/src/styles/contact.css'
// import './contact.css'
import '/Users/navid/Documents/NavidInc/portfoliov2/src/styles/circles.css'
import Sidebar from '/Users/navid/Documents/NavidInc/portfoliov2/src/pages/Navbar.js';
import skate from '/Users/navid/Documents/NavidInc/portfoliov2/src/graphics/skate.gif';
import React, {useEffect, useRef, useState} from 'react';
import Typewriter from "typewriter-effect";
// import "https://unpkg.com/aos@next/dist/aos.css"
// import "aos/dist/aos.css";
import Button from '@mui/material/Button';
// import { makeStyles } from '@mui/styles';
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
import Animation from './CodingAnimation';
import GamingAnimation from './GamingAnimation';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function App() {
  useEffect(() =>{
    Aos.init(); 
  }, [])

  const form = useRef();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#b8bbbd',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
  )
  );

  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            '@media (max-height: 600px) and (max-width: 600px)': {
              fontSize: '10',
              height: '10', // Appropriate height value here
            },
          },
        },
      },
    },
  });

  const sendEmail = async (e) =>{
    e.preventDefault()
    const form = new FormData(e.target)
    const data = {
      "name": form.get('name'),
      "email": form.get('email'),
      "message": form.get('message')
    }
    // console.log(data)
    const response = fetch('http://localhost:3001/',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data)
    });
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div style={{backgroundColor: "#5154e660"}}>
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
    
      {/* <Sidebar/> */}

      <div className='intro'>
        <div className='name'>
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
          <div className='links'>
            <div data-aos="fade-right " data-aos-delay="100"><a href='#aboutMeAnchor'>About Me</a></div>
            <div data-aos="fade-right " data-aos-delay="200"><a href='#skillsAnchor'>My Skills</a></div> 
            <div data-aos="fade-right " data-aos-delay="300"><a href='#contactAnchor'>Contact Me</a></div>
          </div>
        </div>
       
      </div>

      <div className='aboutMe' id="aboutMeAnchor">

          <div className='flex-container'>
            <div className='top-row'>
              <h4 data-aos="fade-down " data-aos-delay="100">Hello and thank you for visiting! My name is Navid and I'm a senior at NYU, studying Computer Science with a minor in Web Development. I have experience in full stack development, automation, and developing cloud infrastructures.</h4>
              <div className="animation-container">
                <Animation/>
              </div>
            </div>
            <div className='bottom-row'>
              <div className="animation-container">
                <GamingAnimation/>
              </div>
              <h4 data-aos="fade-down " data-aos-delay="100">In my spare time I enjoy playing games(on PC of course), watching anime and crime shows, reading mystery books, and listening to music. If I'm not at home or school I'm most likely either walking around aimlessly at Barnes & Nobles or eating out for the 10th time that week</h4>

            </div>  

          </div>
        
      </div>

      <div className='skills' id="skillsAnchor">
        <h3>Some Things I Know</h3>
        <div id='skillsText'>
          <div id='coding'>
            <div data-aos="fade-down " data-aos-delay="300">Python</div> 
            <div data-aos="fade-down" data-aos-delay="400">Java</div>
            <div data-aos="fade-down" data-aos-delay="500">Javascript</div>
            <div data-aos="fade-down" data-aos-delay="600">C</div>
            <div data-aos="fade-down" data-aos-delay="700">NodeJS</div>
            <div data-aos="fade-down" data-aos-delay="800">Express</div>
            <div data-aos="fade-down" data-aos-delay="900">React</div>
            <div data-aos="fade-down" data-aos-delay="1000">HTML</div>
            <div data-aos="fade-down" data-aos-delay="1100">CSS</div>
            <div data-aos="fade-down" data-aos-delay="1200">Swift</div>
            <div data-aos="fade-down" data-aos-delay="1300">LaTex</div>
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
          </div>
        </div>
      </div>

      {/* <div id='projects'>
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
      </div> */}

      {/* <div className='contact'>
        <div id='type'> 
          <Typewriter onInit={(typewriter)=> {
                typewriter
                .typeString("Contact Me")
                .start();
              }
            }
          />
        </div>
        <div className='contactForm'>
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
      </div> */}

      {/* <div className='contact' id="contactAnchor">
        <div class="background">
          <div class="container">
            <div class="screen">
              <div class="screen-body">
                <div class="screen-body-item left">
                  <div class="app-title">
                    <span>CONTACT</span>
                    <span>ME</span>
                  </div>
                </div>
                <div class="screen-body-item">
                  <div class="app-form">
                    <div class="app-form-group">
                      <input class="app-form-control" placeholder="NAME"></input>
                    </div>
                    <div class="app-form-group">
                      <input class="app-form-control" placeholder="EMAIL"></input>
                    </div>
                    <div class="app-form-group">
                      <input class="app-form-control" placeholder="CONTACT NO"></input>
                    </div>
                    <div class="app-form-group message">
                      <input class="app-form-control" placeholder="MESSAGE"></input>
                    </div>
                    <div class="app-form-group buttons">
                      <button class="app-form-button">CANCEL</button>
                      <button class="app-form-button">SEND</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

      </div> */}

      <div className='contact'>
        <h3>Contact Me</h3>
        <form ref={form} onSubmit={sendEmail}> 
          <input name = "name" placeholder='Name' value={name} onChange={(event) => setName(event.target.value)}/>
          <input name = "email" placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)}/>
          <textarea name = "message" placeholder='Message' resize = 'none' value={message} onChange={(event) => setMessage(event.target.value)}/>
          <button type="submit">Submit</button>
        </form>
      </div>
      
      <div className='footer'>
      <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </div>
  </div>
  </div>
  );
}

export default App;
//change colors of bubbles as they scroll down or change abckgrounds as they scroll down
//maybe include spotify plugin?
//maybe include 2048 game
//
//an explanation of full stack development
//what is a fsd? an fsd knows xyz, and ik abc. but i also like doing that aren't just coding (ik shocking), i skate i play games listen to msuic watch anime eat out (too much)
// https://codepen.io/l-e-e/pen/MWogXNb
//https://codepen.io/wifi/pen/DGYLPw
//https://codepen.io/stivaliserna/pen/vYEWvwd
//389138
//https://codepen.io/krisantuswanandi/pen/KxrgeZ


/*
  •fix fonts 
  •fix cancel submmit button
  •responsive design
  •
*/
/*

 "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
*/