import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';

import MyCard from '../components/myCard';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/intro';
import Epilogue from '../components/epilogue';
import Gears from '../svgs/gearsIcon.svg';
import Lighthouse from '../svgs/lighthouse.svg';
import Pipes from '../svgs/pipes.svg';
import Windmill from '../svgs/windmill.svg';

const IndexPage = () => (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" keywords={[`cafjs`]} />
      <Intro heading="Caf.js Framework" intro="Co-design cloud assistants with your web app and IoT devices."/>
      <Container>
        <div className="docs-overview py-5">
          <Row className="justify-content-center">
            <Col md="12" lg="6" className="py-3">
              <MyCard title="Permanent" description="Give a permanent presence to your devices and apps with <span class=&quot;font-weight-bold&quot;>Reverse Service Workers</span>. Interact with them safely at any time from anywhere. Share them by simply exchanging a URL." linkDescription="Integrate them with VR/AR → " nextPage="/permanent"><Lighthouse width="35" height="35"/></MyCard>
            </Col>
            <Col md="12" lg="6" className="py-3">
              <MyCard title="Autonomous" description="Launch year-long activities in the Cloud. Use <span class=&quot;font-weight-bold&quot;>Proactive Server Side Rendering</span> to make them feel local. Complement a request-response model with events from these activities." linkDescription="Learn more about cloud-based multitasking → "  nextPage="/autonomous"><Windmill width="40" height="40"/></MyCard>
            </Col>
            <Col md="12" lg="6" className="py-3">
              <MyCard title="Orchestration" description="Simplify the integration of services with reliable sequencing, safe management of API credentials, and consistent caching of dynamic content."  linkDescription="Dynamic Jamstack made easier → " nextPage="/orchestration"><Gears className="py-0" width="40" height="40"/></MyCard>
            </Col>
            <Col md="12" lg="6" className="py-3">
              <MyCard title="Collaborative" description="Start your app with collaborative multi-tenancy built-in. Mediate interactions with a <span class=&quot;font-weight-bold&quot;>Trusted Bus</span>, which handles authentication and access control. Scale with high-level communication services." linkDescription="Combine video, audio, and devices with the WAB architecture → "  nextPage="/collaborative"><Pipes width="45" height="35"/></MyCard>
            </Col>
          </Row>
        </div>
      </Container>
      <Epilogue heading="Host your app with us" intro="Fully managed backend that delivers predictable performance, and profit per customer, with a baseline cost of less than $6 per year." nextPage="/hosting"/>
    </Layout>
);

export default IndexPage;
