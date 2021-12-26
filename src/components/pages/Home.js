import React from 'react';
import img from '../images/myself.JPG'

export default function Home() {
  return (
    <div>
    <div class="info">
      <p id='about'>About me</p>
      <img src={img} alt='Me' width='500' id='me' height='350'></img>
      <p className='aboutme'>
        Hi my name is Jeffrey Benak. I am an apprentice full stack web developer and one of my goals with coding is to make my own video game. 
        I was born on March 14, 1998 and grew up in the southern Chicago suburb called Tinley Park. I went to Andrew Highschool and graduated in 
        2016, and after highschool went to Moraine Valley in 2017. I got my associates degree in science in 2020, and I am pursuing a career in 
        computer science.
      </p>
      <p className='aboutme'>Some hobbies that I enjoy are video games, longboarding/ skateboarding, and running. I also try to keep weight lifting as part of my 
        weekly routine as well. I really enjoy trying out new things too, and I am a big fan of traveling. I eventually want to visit every state, 
        and from there start traveling to other countries.
        The main reason I got into coding is because I became very interested at how games and websites were built, and the idea that I could 
        make something of my own really motivated me and still does.
        
      </p>
      </div>
      <footer>
      <div>
        <a href="https://github.com/jeffbenak" title="Github">
      <i id="gitfoot" className="fab fa-github fa-2x"></i>
      </a>
      <a href="https://www.linkedin.com/in/jeff-benak-620bb51b5/" title="LinkedIn">
      <i className="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="mailto: jeff.benak@yahoo.com" title="Email Me">
      <i id='emailfoot' className="fas fa-envelope-square fa-2x"></i>
      </a>
      </div>
      </footer>
      </div>
  );  
}
