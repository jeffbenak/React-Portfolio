import React from 'react';
import Footer from '../Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Portfolio() {
  // const projects = [
  //   {
  //     title: '',
  //     image: '',
  //     github: '',
  //     liveLink: ''
  //   }
  // ];

  return (
    <div className='projectspage'>
      <h1>Projects</h1>

      <div className='portcontainer'>

      <Container className='projects'>

        <Row>
          <Col>
          <div className='p1'>
            <h4>
              Work Day Scheduler
            </h4>
            <p>Javascript</p>
          </div>
          </Col>
          <Col>
          <div className='p2'>
            <h4>
              Space App
            </h4>
            <p>Node.js</p>
          </div>
          </Col>
          </Row>
          <Row>
          <Col>
          <div className='p3'>
            <h4>
              Online/Offline Budget Tracker
            </h4>
            <p>Mongoose</p>
          </div>
          </Col>
          <Col>
          <div className='p4'>
            <h4>
              Note Taker
            </h4>
            <p>Express.js</p>
          </div>
          </Col>
        </Row>

      </Container>


      </div>


 {/* <div className="portcontainer">
  <div className='flexible'>
  <div className="hover">
    <h4>Work Day Scheduler</h4>
   
  </div>

  
  <div className='nodecont'>
  <h4>Space App</h4>

  </div>
  </div>

  <div className='flexible'>
  <div className='expressjs'>
  <h4>Note Taker</h4>

  </div>

  <div className='codecont'>
  <h4>Online/ Offline Budget Tracker</h4>

  </div>

  </div>

  </div>  */}

  {/* <a href='https://github.com/jeffbenak/Work-Day-Scheduler'>
    <i id='wds' className="fab fa-github-square fa-3x"></i>
    </a>
    <div className="text">Javascript</div> */}
    {/* <a href='https://github.com/jeffbenak/Online-Offline-Budget-Tracker'>
  <i id='bt' className="fab fa-github-square fa-3x"></i>
  </a>
  <div id='codejs'>Mongoose</div> */}
    {/* <a href='https://github.com/jeffbenak/Express.js-Note-Taker'>
  <i id='nt' className="fab fa-github-square fa-3x"></i>
  </a>
  <div id='exjs'>Express.js</div> */}
    {/* <a href='https://github.com/krysmit/space-app'>
  <i id='sa' className="fab fa-github-square fa-3x"></i>
  </a>
  <div id='njs'>Node.js</div> */}
  <Footer></Footer>
</div>
  );
}
