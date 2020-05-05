import styled from 'styled-components';
import { device } from '../../style';

export const Cover = styled.section`
  position: fixed;
  top: 0vh;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${(props) => props.background || '#fff'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: ${(props) => props.index || '-10'};
  opacity: ${(props) => props.opacity || '0'};
  transition: ${(props) => props.transition || 'all 0.3s ease-in-out 0s'};
`;

export const Decorator = styled.div`
  position: absolute;
  width: ${(props) => props.width || '50vw'};
  height: ${(props) => props.height || '50vh'};
  background-color:  ${(props) => props.theme.primary};
  top: ${(props) => props.top || 'auto'};
  left: ${(props) => props.left || 'auto'};
  right: ${(props) => props.right || 'auto'};
  bottom: ${(props) => props.bottom || 'auto'};
  pointer-events: none;
  z-index: ${(props) => props.index || '-1'};

  @media ${device.xs_sm}{
    display: none;
  }
`;


export const Container = styled.div`
  width: 100%;
  padding: 28px 15px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  background: ${(props) => props.background || props.theme.bg};

  @media (min-width: 576px) {
      max-width: 540px;
  }
  
  @media (min-width: 768px) {
      max-width: 720px;
  }
  
  @media (min-width: 992px) {
      max-width: 960px;
  }
  
  @media (min-width: 1200px) {
      max-width: 1140px;
  }
`;


export const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  justify-content: center;
  background: ${(props) => props.background || props.theme.bg};
  z-index: ${(props) => props.index || '1'};
  padding: ${(props) => props.padding || '10px'};
  text-align: ${(props) => props.textAlign || 'left'};
  border-radius: 5px;
  transition: all 0.6s ease-in-out 0s;
  @media ${device.xs_md}{
    width:100%;
  }
`;

export const ProjectedBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  justify-content: center;
  background: ${(props) => props.background || props.theme.bg};
  z-index: ${(props) => props.index || '1'};
  padding: ${(props) => props.padding || '10px'};
  text-align: ${(props) => props.textAlign || 'left'};
  border-radius: 5px;
  box-shadow: 0 0 60px 0 rgba(94, 92, 154, .12);
  -webkit-box-shadow: 0 0 60px 0 rgba(94, 92, 154, .12);
  transition: all 0.6s ease-in-out 0s;
  
  @media ${device.xs_md}{
    width:100%;
  }
`;
