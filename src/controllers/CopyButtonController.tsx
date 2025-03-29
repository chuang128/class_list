import styled from "@emotion/styled";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Button = styled.button`
  background-color: #007bff;
  border: none;
  padding: 5px;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  display: flex;
  &:hover {
    background-color: #0056b3;
  }
`;

const Tooltip = styled.div<{ visible: boolean }>`
  position: absolute;
  top: -28px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0.9;
  display: ${({ visible }) => (visible ? "block" : "none")};
`;

type CopyButtonControllerProps = {
  textToCopy: string;
};

const CopyButtonController: React.FC<CopyButtonControllerProps> = ({
  textToCopy,
}) => {
  const [textCopied, setTextCopied] = useState<boolean>(false); // using useState here since it's not gonna be shared globally

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setTextCopied(true);
      setTimeout(() => setTextCopied(false), 800);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <ButtonWrapper>
      <Tooltip visible={textCopied}>Copied!</Tooltip>
      <Button onClick={handleCopy} title="Copy to clipboard">
        <FaRegCopy size={12} />
      </Button>
    </ButtonWrapper>
  );
};

export default CopyButtonController;
