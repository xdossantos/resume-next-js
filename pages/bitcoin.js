// This is the file using an API as per the task requirements 
import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

import Prices from '../components/Prices';

const BitCoin = (props) => (
  <Layout>
    <br/>
    <div class="alert alert-dismissible alert-light">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <strong>Stay Safe! </strong>
      Get your <a href="https://sacoronavirus.co.za/" class="alert-link">coronavirus</a> resources here
    </div>
    <br/>

    <div id="#bitcoingapi">
      
      <p>Check current Bitcoin rate below</p>
      <Prices bpi={props.bpi}/>
    </div>

  </Layout>
);


BitCoin.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  };
}


export default BitCoin;