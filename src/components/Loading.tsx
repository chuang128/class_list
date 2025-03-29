import styled from "@emotion/styled";
import Spinner from "../assets/spinner.svg";
import { ErrorLoadingWrapper } from "./ErrorPage";

const SpinnerImage = styled.img`
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Loading() {
  return (
    <ErrorLoadingWrapper>
      <SpinnerImage alt="spinner" src={Spinner} loading="lazy" />
    </ErrorLoadingWrapper>
  );
}
