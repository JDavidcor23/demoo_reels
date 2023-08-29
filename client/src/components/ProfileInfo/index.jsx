import { useSelector } from "react-redux";
import { ProfileInfoEdit } from "./ProfileInfoEdit";
import { ProfileInfoNormal } from "./ProfileInfoNormal";

export const ProfileInfo = ({ children }) => {
  const editSlice = useSelector((state) => state.editSlice.state);

  return (
    <>
      {editSlice ? (
        <ProfileInfoEdit children={children} />
      ) : (
        <ProfileInfoNormal children={children} />
      )}
    </>
  );
};
