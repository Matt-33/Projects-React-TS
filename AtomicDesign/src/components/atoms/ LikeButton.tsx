import React from "react";
import { useLikeItem } from "components/hooks/mutations";

interface LikeButtonProps {
  id: number;
  liked?: boolean;
}

const LikeButton: React.FC<LikeButtonProps> = ({ id, liked }) => {
  const mutation = useLikeItem();

  const handleLike = () => {
    mutation.mutate(id);
  };

  return (
    <button onClick={handleLike} disabled={mutation.isLoading}>
      {mutation.isLoading ? "Loading..." : liked ? "Unlike" : "Like"}
    </button>
  );
};

export default LikeButton;
