import { Link } from 'react-router-dom';

function Home()
{
  window.onscroll = function() {myFunction()};

  function myFunction()
  {
    if(document.documentElement.scrollTop > 50)
    {
      document.querySelector('header').className = "test";
    }
    else
    {
      document.querySelector('header').className = "";
    }
  }
  return (
      <>
      <header>
        <div className='logo'>
          <h1>QuickCV</h1>
        </div>
        <div className='link'>
          <li><a href='#about2'>About</a></li>
          <li><a href='#feature'>Features</a></li>
        </div>
        <div className='button'>
          <button id='btn'>Contact</button>
        </div>
      </header>
      <section className='main'>
        <div id='title'>
          <h1>Make your own CV quicker</h1>
          <p>we understand that applying for jobs can be a daunting process. Our platform is designed to simplify and enhance your CV application experience, providing you with the tools you need to stand out to potential employers.</p>
          <div id='button'>
            <button id='btn'>Start for free</button>
          </div>
        </div>
        <div id='image'></div>
      </section>
      <section className='cv'>
        <h1>Why we need cv application?</h1>
        <div id='container'>
          <div id='item1'>
            <h2>Showcasing Skills and Experience</h2>
            <p>It provides a structured way to present your education, work experience, skills and accomplishments to potential employers.</p>
          </div>
          <div id='item2'>
          <h2>First Impression</h2>
          <p>A well-crafted CV can make a strong first impression, helping you stand out in a competitive job market.</p>
          </div>
          <div id='item3'>
            <h2>Networking</h2>
            <p>A CV can be useful in networking situations, providing a quick reference for your qualifications and experiences</p>
          </div>
          <div id='item4'>
            <h2>Career Progression</h2>
            <p>Keeping your CV updated allows you to track your career development and prepares you for future opportunities</p>
          </div>
        </div>
      </section>
      <section id='about2' className='about'>
        <div id='about'>
          <div id='title2'><h3>About</h3></div>
          <h3>
          we believe that a standout CV is the key to unlocking your career potential. Our intuitive platform allows you to design, customize, and generate a professional CV in minutes. With a variety of templates tailored for different industries, you can showcase your skills and experience in a way that resonates with potential employers.
          </h3>
        </div>
        <div id='image2'></div>
      </section>
      <section id='feature' className='features'>
      <div id='title2'><h3>Feature</h3></div>
        <div id='container'>
        <div id='item'>
          <div id='title'>
          <h2>User-Friendly Interface</h2>
          <p>Simple navigation ensures anyone can create a stunning CV, regardless of technical skills.</p>
          </div>
        </div>
        <div id='item'>
          <div id='title'>
          <h2>Customizable Templates</h2>
          <p>Choose from a diverse range of designs to match your personal style and profession.</p>
          </div>
        </div>
        <div id='item'>
          <div id='title'>
          <h2>Expert Tips</h2>
          <p>Access resources and advice on how to write compelling CV content and avoid common pitfalls.</p>
          </div>
        </div>
        <div id='item'>
          <div id='title'>
          <h2>Download Options</h2>
          <p>Easily download your CV in multiple formats, including PDF and Word.</p>
          </div>
        </div>
        </div>
      </section>
      <Footer />
      </>
  );
}
export default Home;
