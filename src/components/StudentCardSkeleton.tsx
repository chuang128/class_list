import styled from "@emotion/styled";

const Card = styled.div`
  width: 100px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 8px;
  text-align: center;
`;

const SkeletonBlock = styled.div<{ height?: string; width?: string }>`
  background-color: #e0e0e0;
  border-radius: 6px;
  height: ${({ height }) => height || "20px"};
  width: ${({ width }) => width || "100%"};
  margin: 4px auto;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

const ButtonSkeleton = styled(SkeletonBlock)`
  width: 30px;
  height: 20px;
`;

const ScoreSkeleton = styled(SkeletonBlock)`
  width: 24px;
  height: 20px;
`;

const StudentCardSkeleton = () => {
  return (
    <Card>
      <SkeletonBlock height="20px" width="100%" />
      <SkeletonBlock height="20px" width="80%" />
      <Controls>
        <ButtonSkeleton />
        <ScoreSkeleton />
        <ButtonSkeleton />
      </Controls>
    </Card>
  );
};

export default StudentCardSkeleton;
