import styled from "@emotion/styled";
import { useNavigation } from "../hooks/useNavigation";
import { FaChevronLeft } from "react-icons/fa";
import { useInvitation } from "../hooks/useInvitation";
import ErrorPage from "../components/ErrorPage";
import Loading from "../components/Loading";
import CopyButtonController from "./CopyButtonController";
import { QRCodeSVG } from "qrcode.react";
import { useState, useEffect } from "react";

const OverlayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ebebeb;
  padding: 18px;
`;

const Header = styled.div`
  align-items: center;
  padding: 16px 0;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: #000;
  border: none;
  background: none;
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
  padding: 16px;
`;

const Link = styled.div`
  font-size: 18px;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const QRCodeWrapper = styled.div`
  margin-top: 20px;
  display: 'flex';
  flex-direction: "column';
  justify-content: "center";
  align-items: center;
  padding: 20px;
  margin: auto;
`;

const getResponsiveScreenSize = () => {
  const width = window.innerWidth;
  if (width < 500) return 180;
  return 500;
};

const Overlay: React.FC = () => {
  const { handleCloseInvitation } = useNavigation();
  const { joinInfo, loading, error, handleRefetch } = useInvitation();
  const [codeSize, setCodeSize] = useState<number>(getResponsiveScreenSize());

  useEffect(() => {
    const updateSize = () => {
      setCodeSize(getResponsiveScreenSize());
    };

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (error) {
    return <ErrorPage message={error} onRefetch={handleRefetch} />;
  }

  return (
    <OverlayWrapper>
      {!joinInfo || loading ? (
        <Loading />
      ) : (
        <>
          <Header>
            <BackButton onClick={handleCloseInvitation}>
              <FaChevronLeft size={14} />
              Back to Class List
            </BackButton>
          </Header>
          <Links>
            <Link>
              ID: {joinInfo.id}
              <CopyButtonController textToCopy={joinInfo.id} />
            </Link>
            <Link>
              Link
              <CopyButtonController
                textToCopy={new URL(joinInfo.url).toString()}
              />
            </Link>
          </Links>
          <QRCodeWrapper>
            <QRCodeSVG value={joinInfo.url.toString()} size={codeSize} />
          </QRCodeWrapper>
        </>
      )}
    </OverlayWrapper>
  );
};

export default Overlay;
