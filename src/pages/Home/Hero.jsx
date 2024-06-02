import { Link } from 'react-router-dom'
const Hero = () => {
  return(
    <section className="hero">
      <div className="hero-textbox">
        <h2 className='headline'>
        Innovate Your Future
        </h2>
        <h3 className='sub-headline'>
        Harness the power of Tech and cutting-edge technology to drive your growth forward.


        </h3>
      </div>
      <div className="hero-cta"><Link to="/tracks"> Register</Link>
      </div>
    </section>
  )
}
export default Hero