import React from "react";
import HomeCategory from "../components/HomeCategory";
import Layout from "../components/Layout";

function Home(props) {
  console.log(props);

  return (
    <div>
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col">
              <HomeCategory />
            </div>
            <div className="col">
              <HomeCategory />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <HomeCategory />
            </div>
            <div className="col">
              <HomeCategory />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
