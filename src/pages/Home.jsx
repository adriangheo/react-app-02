import React from "react";
import HomeCategory from "../components/HomeCategory";
import Layout from "../components/Layout";

class Home extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return (
      <div>
        <Layout>
        
          <div className="container">
            <div className="row">
              <HomeCategory
                image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-running-shoes-lead-1576249557.jpg"
                title="Pantofi"
                descrition="Cei mai tari pantofi"
              />
              <HomeCategory/>
              <HomeCategory/>
              <HomeCategory/>
            </div>
          </div>
        </Layout> 
      </div>
    )
  }

}


export default Home;
