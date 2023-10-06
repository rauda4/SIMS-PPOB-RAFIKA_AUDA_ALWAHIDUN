import React from 'react';
const [showProfile, setShowProfile] = useState();


export default function EditImageProfile() {
  return (
    <div>
      <img
        src={showProfile}
        style={{ height: 80, width: 80 }}
        alt='profilepic'
      />
    </div>
  );
}
