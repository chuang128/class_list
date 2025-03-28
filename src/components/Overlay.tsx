import { UseDispatch } from "react-redux";
import styled from "@emotion/styled";

const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const OverlayContent = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 500px;
  padding: 24px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;

const BackButton = styled.button`
  border: none;
  background: none;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 12px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Overlay = () => {
  return (
    <OverlayWrapper>
      <OverlayContent>
        <CloseButton></CloseButton>
        <BackButton></BackButton>
        <Title></Title>
      </OverlayContent>
    </OverlayWrapper>
  );
};

export default Overlay;
