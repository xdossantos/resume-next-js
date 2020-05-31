import Layout from '../components/Layout';

const Contact = () => (
  <Layout>
    <br/>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/">Home</a>
      </li>
      <li class="breadcrumb-item active">Contact</li>
    </ol>
    <br/>
    <div className="jumbotron">
      <h1 className="display-3">Hello, world!</h1>
      <p className="lead">Discover the innovation that will create value for your organisation. Explore new insights. See tangible outcomes. You can also email us me xola.dossantos@dode.com</p>
      <hr className="my-4" />
      <p>I offer a variety of rates for each design service. I sometimes encounter design projects that have unique design requirements that require high degree of customisation. In such cases we can will negotiate custom rates for design work for the project.</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="mailto:xola.dossantos@xdode.com" role="button">Mail Me</a>
      </p>
    </div>

  </Layout>
);

export default Contact;