import { ProfileContainer } from "./style";
import noImg from "../../assets/images/Ellipse.svg";

export const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileContainer.Image src={noImg} />
      <div>
        <ProfileContainer.Name>Sardorbek Muhtorov</ProfileContainer.Name>
        <ProfileContainer.Email>sardor.edu@gmail.com</ProfileContainer.Email>
      </div>
    </ProfileContainer>
  );
};
