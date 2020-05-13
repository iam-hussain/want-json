/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useAlert } from 'react-alert';
import styled from 'styled-components';
import Prism from 'prismjs';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'prismjs/components/prism-json';
import {
  H2, P,
} from './Basic/Text';
import { Container } from './Basic/Wrapper';
import { device } from '../style';


export const RowWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0px;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
export const ColWrapper = styled.div`
    margin: 28px 0px;
`;

export const Title = styled(H2)`
    color: ${(props) => props.theme.primary};
    font-family: "Rajdhani";
    
    @media ${device.xs_sm}{
        font-size: 1.8rem;
        text-align: center;
    }
`;

export const Description = styled(P)`
    color: ${(props) => props.theme.text2};
    font-family: "Rajdhani";
    
    @media ${device.xs_sm}{
        font-size: .8rem;
        text-align: center;
    }
`;


export const Keywords = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-family: "Rajdhani";
    padding: 0px 10px; 

    @media ${device.xs_sm}{
        justify-content: center;
    }

    span{
        border-radius: 5px;
        text-align: center;
        padding: 0px 12px;
        font-size: 1rem;
        background-color: ${(props) => props.theme.secondary};
        color: ${(props) => props.theme.tertiary};
        margin: 2px;

        @media ${device.xs_sm}{
            font-size: .8rem;
            text-align: center;
        }
    }
`;

export const Table = styled.table`
    word-break: break-all;
    flex: 1;
    background-color: ${(props) => props.theme.bg};
    width: 100%;
    font-family: "Rajdhani";
    text-transform: uppercase;

    td{
        padding: 4px 10px;
        width: 50%;

        &:first-child{
            text-align: right;
            border-right: 5px solid;
            border-color: ${(props) => props.theme.primary};
        }
    }
`;

export const TokenView = styled.div`
    cursor: pointer;
    display: flex;
    border-radius: 5px;
    font-family: "Rajdhani";
    width: auto;
    margin: 10px;
    padding: 5px 10px;
    background-color: transparent;
    color:  ${(props) => props.theme.secondary};
    border: 5px solid;
    border-color: ${(props) => props.theme.primary};

    span{
        padding: 0px 5px;    

        &:first-child{    
            user-select: none;
        }
        
        &:last-child{
            color:  ${(props) => props.theme.primary};
        }
    }

    @media ${device.xs_sm}{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0px;
        padding: 2px;
        word-break: break-all;
    }
    
`;

export const CodeViewWrapper = styled.div`
    word-break: break-all;
    flex: 1;
    background-color: ${(props) => props.theme.secondary};
    width: 96%;
    margin: 28px 5px;
    padding: 0px;

    pre{
        height: 350px;
        overflow: auto;
        margin: 0px;

        &::-webkit-scrollbar-track {
            background-color: #000;
            margin: 4px 0;
        }
    
        &::-webkit-scrollbar {
            background-color: #000;
        }
    
        &::-webkit-scrollbar-thumb {
            background-color: ${(props) => props.theme.primary}; 
        }
    }

    @media ${device.xs_sm}{

    }
    
`;

export default function View({ payload }) {
  const alert = useAlert();
  useEffect(() => {
    const codeViewer = document.getElementById('codeViewer');
    Prism.highlightAllUnder(codeViewer);
  }, []);
  return (
    <Container column padding="0px">
      <RowWrapper>
        <ColWrapper className="col-md-6">
          <Title>{payload.title}</Title>
          <Description>{payload.description}</Description>
          <Keywords>
            {payload.keywords.map((k) => (
              <span>
                {k}
              </span>
            ))}
          </Keywords>
        </ColWrapper>

        <ColWrapper className="col-md-4">
          <Table>
            <tbody>
              <tr>
                <td>Visibility</td>
                <td>{payload.visibility}</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>{payload.type}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>{payload.status}</td>
              </tr>
              <tr>
                <td>Creator</td>
                <td>{payload.owner.displayName}</td>
              </tr>
              <tr>
                <td>View Count</td>
                <td>{payload.viewCount}</td>
              </tr>
              <tr>
                <td>API Hit Count</td>
                <td>{payload.hitCount}</td>
              </tr>
            </tbody>
          </Table>
        </ColWrapper>
      </RowWrapper>
      <CopyToClipboard text={payload.hash} onCopy={() => alert.info('Copied to Clipboard')}>
        <TokenView>
          <span>Token</span>
          <span>{payload.hash}</span>
        </TokenView>
      </CopyToClipboard>
      <CodeViewWrapper>
        <pre id="codeViewer">
          <code className="language-json">
            {JSON.stringify(payload.data, null, 4)}
          </code>
        </pre>
      </CodeViewWrapper>
    </Container>
  );
}
