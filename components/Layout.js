import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
  <div>
    {/* TODO: Import custom bootstrap here  */}
    <Head>
      <title>Resumé | Xola dos Santos</title>
      <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/lumen/bootstrap.min.css" rel="stylesheet" integrity="sha384-VMuWne6iwiifi8iEWNZMw8sDatgb6ntBpBIr67q0rZAyOQwfu/VKpnFntQrjxB5W" crossorigin="anonymous"/>
    </Head>
    <Navbar/>
    {/* The main content of our website will go here  */}
    <div className="container">
      {props.children}
    </div>

   <div>
  
</div>


<footer  className="pt-4 my-md-5 pt-md-5 border-top">
  <div className="row">
    <div className="col-12 col-md">
      
    </div>
    <div className="col-6 col-md">
      <h5>About Xola dos Santos</h5>
      <ul className="list-unstyled text-small">
        <li><a className="text-muted" href="/projects">Projects</a></li>
        <li><a className="text-muted" href="http://xdode.com/insights/">Blog</a></li>
        <li><a className="text-muted" href="/about#education">Education</a></li>
        <li><a className="text-muted" href="/about#experience">Experience</a></li>

      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>Awesome Resources</h5>
      <ul className="list-unstyled text-small">
        <li><a className="text-muted" href="http://xdode.exchange">xdode.exchange</a></li>
     
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>Contact</h5>
      <ul className="list-unstyled text-small">
        <li><a className="text-muted" href="http://xdode.com/subscribe">Join Newsletter</a></li>
     
      </ul>
    </div>
  </div>
</footer>


    {/* TODO: Add analytics here  */}



  </div>
);

export default Layout;