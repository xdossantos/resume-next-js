import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

import Prices from '../components/Prices';

const Index = (props) => (
  <Layout>
    <br/>
    <div class="alert alert-dismissible alert-light">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <strong>Stay Safe! </strong>
      Get your <a href="https://sacoronavirus.co.za/" class="alert-link">coronavirus</a> resources here
    </div>
    <br/>
    <div className="jumbotron">
      <h1 className="display-3">
        Not Your Average Web Developer</h1>
      <p className="lead">Currently looking for work opportunties in the technology sector</p>
      <hr className="my-4"/>
      <p>
        Get ready to turn your ideas into reality.</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="/projects" role="button">View Portfolio</a>
      </p>
    </div>

    <div className="container marketing">
    
      {/* START THE FEATURETTES */}
      <hr className="featurette-divider"/>
      <div className="row featurette text-center align-middle">
        <div className="col-md-6 text-center">
          

          <br/>
          <br/>
          <br/>
          <h2 className="featurette-heading"> Looking to develop your 
            <span className="text-muted"> innovative product idea?</span>
          </h2>

          <p  className="lead">Get in contact with me if you are looking to get your product idea off the ground. Click through the website to see my portfolio of past clients.</p>
        </div>
        <div className="col-md-6">
          <img
            className="featurette-image img-fluid mx-auto"
            data-src="holder.js/500x500/auto"
            alt="500x500"
            style={{
            width: 300,
          }}
            src="/static/xola-dos-santos-robotics.jpg"
            data-holder-rendered="true"/>
        </div>
      </div>
      
    </div>

    <div id="#bitcoingapi">
      
      <p>Check current Bitcoin rate below</p>
      <Prices bpi={props.bpi}/>
    </div>

  </Layout>
);


Index.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  };
}


export default Index;