'use client';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import styled from 'styled-components';

export default function Home() {
  return (
    <Wrapper>
      <p>
        I am a software developer, cloud architect, and consultant, focused on
        cloud computing and experimenting with generative AI.
      </p>{' '}
      <p>
        I am interested in cloud security, scaling, automation, and serverless
        development. I run Athens Technologies, a technology consulting firm
        that specializes in cloud native applications.
      </p>{' '}
      <p>
        I have an M.Sc. in Computer Science from Stanford, and a far more
        practical B.A. in Philosophy from Brown. Currently, I live in sunny
        Miami, FL.
      </p>{' '}
      Reach me at:
      <p>Business: my firstname.lastname at gmail.com</p> Personal: my firstname
      at athenstechnologies.com.
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 300px;
  width: 800px;
`;
