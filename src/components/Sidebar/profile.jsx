import { ProfileContainer } from "./style";
import noImg from "../../assets/images/Ellipse.svg";

export const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileContainer.Image src={noImg} />
      <div>
        <ProfileContainer.Name>Turgunov Hayotbek</ProfileContainer.Name>
        <ProfileContainer.Email>Hayotbek.edu@gmail.com</ProfileContainer.Email>
      </div>
    </ProfileContainer>
  );
};
