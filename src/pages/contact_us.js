import React from 'react';
// import { useAlert } from 'react-alert';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Page from '../components/Layout/Page';
import { ColWrapper } from '../components/Basic/Wrapper';
import { SubHeadingComp } from '../components/Basic/Text';
// import { Contribute } from '../components/Extended/Text';
import ContactUsForm from '../components/Form/ContactUs';

function ContactUs() {
  // const alert = useAlert();
  return (
    <Page>
      <ColWrapper margin="28px 0px" className="col-md-4">

        {/* <CopyToClipboard text={process.env.CONTACT_EMAIL}
        onCopy={() => alert.info('Email ID copied to Clipboard')}>
          <Contribute margin="0px 0px 28px" size="2rem">
            <FontAwesomeIcon icon={faEnvelope} />
            <P>Email us</P>
          </Contribute>
        </CopyToClipboard> */}
        {/* <Contribute size="2rem" href="https://github.com/ZaHuPro/wantJSON" target="_blank">
          <FontAwesomeIcon icon={faGithubSquare} />
          <P>Contribute with us</P>
        </Contribute> */}
      </ColWrapper>
      <ColWrapper className="col-md-8">
        <SubHeadingComp margin="0px" back="" title="Contact Us" />
        <ContactUsForm />
      </ColWrapper>
    </Page>
  );
}

export default ContactUs;
