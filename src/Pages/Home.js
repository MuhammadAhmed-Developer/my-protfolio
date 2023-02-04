import React,{useState} from 'react'
import '../Components/Header/Navbar'
import profile from '../assects/images/285.jpg'
import certificate from '../assects/images/certifcate.jpg'
import protfolio from '../assects/images/prot 1.png'
import protfolio2 from '../assects/images/Boootcapm.png'
import agency from '../assects/images/egency.png'
import cal from '../assects/images/calculater.png'
import todo from '../assects/images/todo.png'


const initialState = {
  name:'',
  email:'',
  message:''
}

export default function Home() {
 
  const [state, setState] = useState(initialState)
  
  const handleChange = e =>{
  setState({...state,[e.target.name]:e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    const {name,email,message} = state
    if(name.length < 3){
      alert('Type Correctly')
      return
    }
    if(email.length < 3){
      alert('Type Correctly')
      return
    }
    if(message.length < 10){
      alert('Type at least 10 characters in message box!')
      return
    }
    console.log(state)
  }

  return (
    <>
      <div id='Home' className="container-fluid name-lab">
        <div className="row">
          <div className="col text-white text-center colum">
            <h1 className='name'>I'm Muhammad Ahmed</h1>
            <h1>Frontend Developer</h1>
            <a href='#Contact' className='btn btn-warning my-4 btn-lg p-3 text-white fs-5 fw-bold rounded-5 project-btn'>HAVE A PROJECT</a>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>

      {/* <div className='text-start'>
          <button className='btn btn-outline-warning '><a href=""><i className="bi bi-github text-primary"></i></a></button>
          <p className='text'>Lorem ipsum dolor sit amet.</p>
          </div> */}





      {/* /* ABout *------------------------------------------------------------------/ */}

      <section id='About'>
        <div className="container card about bg-white about " >
          <div className="row p-3 p-lg-5 g-0 ">
            <div className="col-lg-6 col-md-6 col-sm-12 data ">
              <img src={profile} alt="profile" className='image-fluid w-50 rounded-5 border border-warning border-3 zoom-img' />
              <div className='p-4'>
                <p className='text-start'><b><i className="bi bi-arrow-right-square-fill text-warning fs-5"></i> Name :</b> Muhammad Ahmed</p>
                <p><b> <i className="bi bi-person-square text-warning fs-5"></i> Profile :</b> I am a Frontend React Developer</p>
                <p><b><i className="bi bi-envelope-at text-warning fs-5"></i> Email :</b> <a href="https://mail.google.com/mail/u/1/#inbox" target='_blank'>muhammadahmedite@gmail.com</a></p>
                <p><b> <i className="bi bi-telephone-outbound-fill text-warning fs-5"></i> Phone / WhatsApp :</b> <a href="tel:03190230242">+923190230242</a></p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 text-start">
              <h2 className='fw-bold m-3'>Skills</h2>
              <h6 className='text-end'>HTML5</h6>
              <div className="progress" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bar-1  bg-danger">95%</div>
              </div>
              <br />
              <br />
              <h6 className='text-end'>CSS3</h6>
              <div className="progress" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bar-2 bg-primary">90%</div>
              </div>
              <br />
              <br />
              <h6 className='text-end'>SCSS / SASS</h6>
              <div className="progress" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bar-3 bg-warning" >85%</div>
              </div>
              <br />
              <br />
              <h6 className='text-end'>JAVASCRIPT (E6S+)</h6>
              <div className="progress" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bar-4 bg-secondary" >70%</div>
              </div>
              <br />
              <br />
              <h6 className='text-end'>REACT</h6>
              <div className="progress" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bar-5 bg-success" >80%</div>
              </div>

            </div>
            <div className="row">
              <div className="col m-lg-0 my-3">
                <h3 className='fw-bold '>About :</h3>
                <p>My name is Muhammad Ahmed and I am a front-end developer with experience in HTML, CSS, JavaScript, React, and Firebase. I am passionate about delivering high-quality and user-friendly digital experiences.</p>
                <p>In addition, I am a natural motivator and enjoy sharing my knowledge and expertise with others. I believe that by working together and sharing our experiences, we can all grow and become better developers. I am eager to bring my passion for learning, motivation, and skill-building to new challenges and opportunities.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <br />

      {/* Certification---------------------------------------------------------------------------- */}

      <section id='certification'>
        <div className="container py-5">
          <div className="row">
            <div className="col text-center">
              <h1 className='fw-bold'> 🎉 CERTIFICATION 🎉</h1>
              <img src={certificate} alt="certifcate" className='zoom-img img-fluid w-50 mt-4  border border-5 border-light' />
            </div>
          </div>
        </div>
      </section>

      {/* protfolios------------------------------------------------------------------ */}

      <section id='protfolio'>
        <div className="container py-5 text-center">
          <div className="row text-center">
            <h1 className='fw-bold'>PORTFOLIO 👨‍🎓</h1>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card card-1 zoom-img mt-5">
                <img src={protfolio} className="card-img-top image-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title fw-bold text-start col-12">RESTAURANT</h5>
                  <div className='row'>

                    <p className="card-text text-start col-5">A website build on HTML5, CSS3, Bootstrap5
                    </p>
                    <a href="http://myhotel.surge.sh/#" target='_blank' className="text-end col-7"><i className="bi bi-tv text-warning mx-5" style={{ fontSize: 50 }}></i></a>
                  </div>
                </div>
              </div>
            </div>
            {/* card2----------------------------------------------------------------------------- */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card card-2 zoom-img mt-5">
                <img src={protfolio2} className="card-img-top image-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title fw-bold text-start col-12">BOOTCAMP</h5>
                  <div className='row'>

                    <p className="card-text text-start col-5">A website build on HTML5, CSS3, Bootstrap5
                    </p>
                    <a href="https://completeboot.surge.sh/#learn" target='_blank' className="text-end col-7"><i className="bi bi-tv text-warning mx-5" style={{ fontSize: 50 }}></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* card3----------------------------------------------------------------------------------- */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card card-3 zoom-img mt-5">
                <img src={agency} className="card-img-top image-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title fw-bold text-start col-12">Agency</h5>
                  <div className='row'>

                    <p className="card-text text-start col-5">A website build on HTML5, CSS3, Bootstrap5
                    </p>
                    <a href="https://dreamhouses.surge.sh/" target='_blank' className="text-end col-7"><i className="bi bi-tv text-warning mx-5" style={{ fontSize: 50 }}></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card4----------------------------------------------------------------------------- */}
          <div className='text-center d-flex justify-content-center row'>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card card-4 zoom-img mt-5">
                <img src={cal} className="card-img-top image-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title fw-bold text-start col-12">CALCULATER</h5>
                  <div className='row'>

                    <p className="card-text text-start col-5">A website build on HTML5, CSS3, Bootstrap5 and JavaScript
                    </p>
                    <a href="https://mycalculater.surge.sh/" target='_blank' className="text-end col-7"><i className="bi bi-tv text-warning mx-5" style={{ fontSize: 50 }}></i></a>
                  </div>
                </div>
              </div>
            </div>
            {/* card 5----------------------------------------------------------------------------- */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card card-5 zoom-img mt-5">
                <img src={todo} className="card-img-top image-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title fw-bold text-start col-12">TODO APP</h5>
                  <div className='row'>

                    <p className="card-text text-start col-5">A website build on HTML5, CSS3, Bootstrap5 and JavaScript
                    </p>
                    <a href="http://ahtodo.surge.sh/" target='_blank' className="text-end col-7"><i className="bi bi-tv text-warning mx-5" style={{ fontSize: 50 }}></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      {/* Contact-------------------------------------------------------------------- */}

      <section id='Contact'>
        <div className="row bg-light container-fluid text-center p-5 mb-5">
          <h1 className='fs-1 fw-bolder'>CONTACT ME</h1>
          <p>If you have any query, please feel free to contact me.</p>
        </div>
        <div className="container bg-light p-5">

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <h1 className='mb-5 msg p-2'>Send Message Me</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" name='name' onChange={handleChange} />
                </div>
                <div className="mb-5">
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email" name='email' onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Message' name='message' onChange={handleChange}></textarea>
                </div>
                <button className='btn btn-warning mt-3 btn-lg rounded-5'>Send Message</button>
              </form>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1 className='mb-5 msg p-2 mt-3 mt-lg-0'>Get In Touch</h1>
              <p><i className="bi bi-geo-alt-fill text-warning"></i> Faisalabad, Punjab, Pakistan. 38000</p>
              <p><i className="bi bi-telephone-fill text-warning"></i> <a href="tel: 03190230242"> +923190230242</a></p>
              <br />
              <ul className='d-flex flex-wrap list-unstyled '>
                <li className='mb-4 mb-lg-0'> <a href="https://api.whatsapp.com/send/?phone=923190230242&text&type=phone_number&app_absent=0" target='_blank' className='m-2'><i className="bi bi-whatsapp icon fs-2 border p-2 border-2 border-warning" style={{ borderRadius: 160 }}></i></a></li>
                <li className='mb-4 mb-lg-0'> <a href="https://www.facebook.com/MuhammadAhmedjee" target='_blank' className='m-2'><i className="bi bi-facebook icon fs-2 border p-2 border-2 border-warning" style={{ borderRadius: 160 }}></i></a></li>
                <li className='mb-4 mb-lg-0'>  <a href="https://www.instagram.com/muhammad_ahmed0011/" target='_blank' className='m-2'><i className="bi bi-instagram icon fs-2 border p-2 border-2 border-warning" style={{ borderRadius: 160 }}></i></a></li>
                <li className='mb-4 mb-lg-0'> <a href="https://twitter.com/Muhammad__1122" target='_blank' className='m-2'><i className="bi bi-twitter icon fs-2 border p-2 border-2 border-warning" style={{ borderRadius: 160 }}></i></a></li>
                <li className='mb-4 mb-lg-0'>
                  <a href="https://github.com/MuhammadAhmed-Developer" target='_blank' className='m-2'><i className="bi bi-github icon fs-2 border p-2 border-2 border-warning" style={{ borderRadius: 160 }}></i></a>
                </li>
                <li className='mb-4 mb-lg-0'> <a href="https://www.linkedin.com/in/muhammad-ahmed-359ab2263/" target='_blank' className='m-2'><i className="bi bi-linkedin icon fs-2 border p-2 border-2 border-warning" style={{ borderRadius: 160 }}></i></a></li>
                <li className='mb-4 mb-lg-0'>
                  <a href="https://www.youtube.com/channel/UCaLHw5befr8haWH_XQQVOvA" target='_blank' className='m-2'><i className="bi bi-youtube icon fs-2 border p-2 border-2 border-warning" style={{ borderRadius: 160 }}></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


















    </>
  )
}
