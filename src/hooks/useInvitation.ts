import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInvitationData } from "../redux/slices/invitationSlice";
import { RootState, AppDispatch } from "../redux/store";

export const useInvitation = () => {
  const dispatch: AppDispatch = useDispatch();
  const { joinInfo, loading, error } = useSelector(
    (state: RootState) => state.invitation
  );

  useEffect(() => {
    if (!joinInfo) {
      dispatch(fetchInvitationData());
    }
  }, [joinInfo, dispatch]);

  const handleRefetch = () => dispatch(fetchInvitationData());

  return { joinInfo, loading, error, handleRefetch };
};
