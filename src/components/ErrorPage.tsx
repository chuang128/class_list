import styled from "@emotion/styled";

export const ErrorLoadingWrapper = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  max-width: 600px;
  margin: 80px auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 20px;
  color: #d9534f;
  margin-bottom: 12px;
`;

const Message = styled.p`
  font-size: 16px;
  color: #555;
`;

const RetryButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 12px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    transform: scale(0.98);
  }
`;

type ErrorPageProps = {
  message?: string;
  onRefetch?: () => void;
};

const ErrorPage: React.FC<ErrorPageProps> = ({ message, onRefetch }) => {
  return (
    <ErrorLoadingWrapper>
      <Title>Something went wrong</Title>
      <Message>
        {message || "We couldn’t load the data. Please try again later."}
      </Message>
      {onRefetch && <RetryButton onClick={onRefetch}>Retry</RetryButton>}
    </ErrorLoadingWrapper>
  );
};

export default ErrorPage;
