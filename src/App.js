import React from 'react';
import './App.css';





function App() {
  return (
    < >
    
   
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE-edge" />
    <meta name="viewport" content="width-devide-width, initial-scale-1.0" />
    <title>Portfolio</title>
    <link rel="stylesheet" href="stylesheet.css" />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
     
    
  </head>
  <body>
    <header class="header">
      <a href="Facebook" class="logo">Portfolio</a>
      <nav class="navbar">
        <a href="#home"  className="active">Home</a>
        <a href="#about" >About</a>
        <a href="#skills" >Skills</a>
        <a href="Facebook" >Portfolio</a>
        <a href="Facebook" >Contect Me</a>
      </nav>
    </header>
    <section class="home" id='home'>
      <div class="home-content">
        
        <h3>Hello, It's Me</h3>
        <h1>Jisanahmad Malek</h1>
        <h3>
          And I'm a
         
        </h3>
        <p>
          I'm web designer with extensive experience for over 3 years. <br />
          Expertise is to create and website design,Frontend design , and many
          more ....
        </p>
        <div class="home-sci">
          <a href="Facebook" ><i class="bx bxl-facebook"></i></a>
          <a href="Facebook" ><i class="bx bxl-instagram"></i></a>
          <a href="Facebook" ><i class="bx bxl-whatsapp"></i></a>
          <a href="Facebook" ><i class="bx bxl-linkedin"></i></a>
        </div>
        <a href="Facebook" id="about" class="btn-box">More About Me.</a>
      </div>
    </section>

    <section class="about" >
      <div class="about-img">
        
      </div>
      <div class="about-text">
        <h2>About<span>Me</span></h2>
        <h4>ReactJs Developer</h4>
        <p>fkdajflkdasjfkasdfkjasdhggjkhasdgghadkghadkhggka</p>
        <a href="Facebook" class="btn-box">More About Me</a>
      </div>
    </section>
    <section class="services" id="MyEducation">
      <div class="container">
        <h1 class="sub-title">
          My<span style={{color: '#0fb'}}>&nbsp;Education</span>
        </h1>
        <div class="services-list">
          <div>
            <i class='bx bxs-graduation' style={{color: '#00eeff'}}></i>
            <h2>12th Genral</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
              eum atque laudantium debitis nostrum a voluptate quae quo numquam
              nisi recusandae fugiat quam error non itaque, quasi maiores vitae
              suscipit.
            </p>
            <a href="Facebook" class="read">Learn More</a>
          </div>
          <div>
            <i class="bx bxs-graduation" style={{color: '#00eeff'}}></i>
            <h2>BCA</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
              eum atque laudantium debitis nostrum a voluptate quae quo numquam
              nisi recusandae fugiat quam error non itaque, quasi maiores vitae
              suscipit.
            </p>
            <a href="Facebook" class="read">Learn More</a>
          </div>
          <div>
            <i class="bx bxs-graduation" style={{color: '#00eeff'}}></i>
            <h2>MCA </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
              eum atque laudantium debitis nostrum a voluptate quae quo numquam
              nisi recusandae fugiat quam error non itaque, quasi maiores vitae
              suscipit.
            </p>
            <a href="Facebook" class="read">Learn More</a>
          </div>
        </div>
      </div>
    </section>
    <h1 class="sub-title" id='skills'>My<span>Skills</span></h1>
    <section>
      <div class="container1" id="skills">
        <h1 class="heading1">Technical Skills</h1>
        <div class="Technical-bars" > 
          <div class="bar" id='tbar'>
            <i style={{color: '#c95d2e'}} class="bx bxl-html5"></i>
            <div class="info">
              <span>HTML</span>
            </div>
            <div class="progress-line html">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <i style={{color: '#147bbc'}} class="bx bxl-css3"></i>
            <div class="info">
              <span>CSS</span>
            </div>
            <div class="progress-line css">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <i style={{color: '#b0bc1e'}} class="bx bxl-javascript"></i>
            <div class="info">
              <span>Javascript</span>
            </div>
            <div class="progress-line javascript">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <i style={{color: '#69bcbc'}} class="bx bxl-react"></i>
            <div class="info">
              <span>ReactJs</span>
            </div>
            <div class="progress-line ReactJs">
              <span></span>
            </div>
          </div>
          <div class="bar">
            <i style={{color: '#c32ec9'}} class="bx bxl-python"></i>
            <div class="info">
              <span>Python</span>
            </div>
            <div class="progress-line python">
              <span></span>
            </div>
          </div>
        </div>
      </div>
     
    </section>
    

    <script src="main.js"></script>
  </body>
</html>

    </>
  );
}

export default App;
