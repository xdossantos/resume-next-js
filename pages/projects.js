import Layout from '../components/Layout';

const Projects = () => (
  <Layout>
    <br/>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/">Home</a>
      </li>
      <li class="breadcrumb-item active">Projects</li>
    </ol>
    <br/>
    <div className="jumbotron">
      <h1 className="display-3">GitHub!</h1>
      <p className="lead">All my past projects are hosted on GitHub. </p>
      <hr className="my-4" />
      <p>Access my profile through the button below</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="https://github.com/xdossantos/" role="button">Access GitHub</a>
      </p>
    </div>

  </Layout>
);

export default Projects;