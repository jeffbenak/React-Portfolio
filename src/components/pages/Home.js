import React from 'react';
import img from '../images/myself.JPG';
import Footer from '../Footer/Footer';

export default function Home() {
  return (
    <>
    <div class="info">
      <h1 className='about'>About me</h1>

      <img src={img} alt='Self' width='500' className='self' height='350'></img>

      <div className='aboutinfo'>
      <p className='aboutme'>
        Hi my name is Jeffrey Benak. I am an apprentice full stack web developer and one of my goals with coding is to make my own video game. 
        I was born on March 14, 1998 and grew up in the southern Chicago suburb called Tinley Park. I went to Andrew Highschool and graduated in 
        2016, and after highschool went to Moraine Valley in 2017. I got my associates degree in science in 2020, and I am pursuing a career in 
        computer science.
      </p>
      <p className='aboutmyself'>
        Some hobbies that I enjoy are video games, longboarding/ skateboarding, and running. I also try to keep weight lifting as part of my 
        weekly routine as well. I really enjoy trying out new things too, and I am a big fan of traveling. I eventually want to visit every state, 
        and from there start traveling to other countries.
        The main reason I got into coding is because I became very interested at how games and websites were built, and the idea that I could 
        make something of my own really motivated me and still does.     
      </p>

      </div>
     
      </div>

      <Footer></Footer>

      </>
  );  
}
