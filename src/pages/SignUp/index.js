import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Trail from '../../components/Trail';

import netflix from '../../assets/netflix.svg';

import { Container } from './styles';

export default function SignUp() {
  const history = useHistory();

  const [next, setNext] = useState(false);
  const [open, setOpen] = useState(true);

  const handleNext = () => {
    setNext(true);
    setOpen(false);
    setTimeout(() => history.push('/'), 2000);
  };

  return (
    <Container next={next}>
      <img src={netflix} alt="netflix" />

      <Trail className="trail-strong" open={open}>
        <strong>Welcome Netflix | SignUp</strong>
      </Trail>

      <Trail className="trail-input" open={open}>
        <input type="password" placeholder="Secret password" />
      </Trail>
      <div className="line-outside">
        <div className="line-inside" />
      </div>

      <Trail className="trail-btn" open={open}>
        <button type="button" onClick={() => handleNext()}>
          Go Netflix World
        </button>
      </Trail>

      <Trail className="trail-terms" open={open}>
        <span>
          By clicking &quot;Go Netflix World&quot; above, you acknowledge that
          you have read, understood and agree to Netflix&nbsp;
          <strong>Terms &amp; Conditions</strong>
          &nbsp; and &nbsp;
          <strong>Privacy Policy</strong>
          <span>.</span>
        </span>
      </Trail>
    </Container>
  );
}
