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
              <MyCard title="Permanent" description="Provide a permanent presence to your devices and apps with <span class=&quot;font-weight-bold&quot;>Reverse Service Workers</span>. Interact with them safely at any time from anywhere. Share them by simply exchanging a URL." nextPage="/permanent"><Lighthouse width="35" height="35"/></MyCard>
            </Col>
            <Col md="12" lg="6" className="py-3">
              <MyCard title="Autonomous" description="Launch year-long activities in the Cloud. Use <span class=&quot;font-weight-bold&quot;>Proactive Server Side Rendering</span> to make them feel local. Complement a request-response model with events from these activities." nextPage="/autonomous"><Windmill width="40" height="40"/></MyCard>
            </Col>
            <Col md="12" lg="6" className="py-3">
              <MyCard title="Orchestration" description="<span class=&quot;font-weight-bold&quot;>Transactional Actors</span> gracefully recover from failures while calling APIs on dependent web services. They protect API credentials by following least privileged principles. They also improve latency by replacing chatty protocols with one atomic update." nextPage="/orchestration"><Gears className="py-0" width="40" height="40"/></MyCard>
            </Col>
            <Col md="12" lg="6" className="py-3">
              <MyCard title="Collaborative" description="Collaborative multi-tenancy is built-in. Interactions between users are mediated by a <span class=&quot;font-weight-bold&quot;>Trusted Bus</span> that handles authentication and access control. High-level communication services scale collaboration." nextPage="/collaborative"><Pipes width="45" height="35"/></MyCard>
            </Col>
          </Row>
        </div>
      </Container>
      <Epilogue heading="Host your app with us" intro="Fully managed backend that delivers predictable performance and profit per customer, with a baseline cost of less than $6 per year." nextPage="/hosting"/>
    </Layout>
);

export default IndexPage;
