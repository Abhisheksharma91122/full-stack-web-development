import React from "react";

const UserProfile = async ({ params }) => {
  const { id } = await params;
  return <div>User Profile: {id}</div>;
};

export default UserProfile;
