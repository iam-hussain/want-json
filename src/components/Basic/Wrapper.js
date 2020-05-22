import styled from 'styled-components';
import { device } from '../../style';

export const Cover = styled.section`
  position: fixed;
  top: 0vh;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${(props) => (props.transparency ? props.theme.transparency : props.background || props.theme.bg)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  overflow: hidden;
  backdrop-filter: grayscale(1);
  z-index: ${(props) => (props.show ? '10' : '-10')};
  opacity: ${(props) => (props.show ? '1' : '.5')};
  transition: ${(props) => props.transition || 'all 1s linear 0s'};
`;

export const Decorator = styled.div`
  position: absolute;
  width: ${(props) => props.width || '50vw'};
  height: ${(props) => props.height || '50vh'};
  background-color: ${(props) => props.theme.primary};
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
  border-radius: 5px;
  min-height:  ${(props) => (props.minHeight ? 'calc(100vh - 100px)' : 'auto')};
  padding: ${(props) => props.padding || '15px'};
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction:  ${(props) => (props.column ? 'column' : 'row')};
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align || 'center'};
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

export const RowWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: ${(props) => props.margin || '0px'};
    flex: 1;
    justify-content: ${(props) => props.justify || 'center'};
    align-items: ${(props) => props.items || 'center'};
    width: 100%;
`;

export const ColWrapper = styled.div`
    margin: ${(props) => props.margin || '0px'};
    padding: ${(props) => props.padding || '0px'};
    overflow: ${(props) => props.overflow || 'unset'};
    box-shadow: ${(props) => (props.shadow ? props.theme.shadow : 'none')};
    width: 100%;
`;


export const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
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
  z-index: ${(props) => props.index || '10'};
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
