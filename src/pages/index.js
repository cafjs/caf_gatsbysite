import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';

import MyCard from '../components/myCard';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/intro';
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
              <MyCard title="Permanent" description="This is where we talk for a bit." nextPage="/permanent"><Lighthouse width="35" height="35"/></MyCard>
            </Col>
            <Col md="12" lg="6" className="py-3">
              <MyCard title="Autonomous" description="Launch year-long activities in the Cloud that appear to be local by using <span class=&quot;font-weight-bold&quot;>Proactive Server Side Rendering</span>." nextPage="/autonomous"><Windmill width="40" height="40"/></MyCard>
            </Col>
            <Col md="12" lg="6" className="py-3">
              <MyCard title="Orchestration" description="This is where we talk for a bit." nextPage="/orchestration"><Gears className="py-0" width="40" height="40"/></MyCard>
            </Col>
            <Col md="12" lg="6" className="py-3">
              <MyCard title="Collaborative" description="This is where we talk for a bit." nextPage="/collaborative"><Pipes width="45" height="35"/></MyCard>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
);

export default IndexPage;
