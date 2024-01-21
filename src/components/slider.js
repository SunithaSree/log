import './slider.css';
import Carousel from 'react-bootstrap/Carousel';
import jsw from '../assets/jsw.png';
import acc from '../assets/acc.webp';
// import Cement3 from '../assets/cement3.jpg';
// import Cement4 from '../assets/cement4.jpg';
function Slider() {
  return (
        <Carousel data-bs-theme="dark" style={{ maxHeight: '50vh', overflow: 'hidden' }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={jsw}  style={{ objectFit:'cover',minHeight:'50vh'}}    
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>  
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={acc}  style={{objectFit:'cover',minHeight:'50vh'}}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
export default Slider;