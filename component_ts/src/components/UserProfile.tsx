import React from "react";

interface UserProfileProps {
  name: string;
  email: string;
  age?: number;
  isPremium?: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  email,
  age,
  isPremium = false,
}) => {
  return (
    <div className="user-profile">
      <h2>{name}</h2>
      <p>Email : {email}</p>
      <p>Âge : {age ? age : "Âge non renseigné"}</p>
      {isPremium && <span className="premium-badge">Utilisateur Premium</span>}
    </div>
  );
};

export default UserProfile;
