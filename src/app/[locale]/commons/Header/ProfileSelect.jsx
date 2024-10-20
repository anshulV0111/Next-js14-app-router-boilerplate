'use client';

import useProfileSelect from '@/hooks/header/useProfileSelect';
// import Image from 'next/image';
import CustomSelect from '../UI-kit/CustomSelect/CustomSelect';

export default function ProfileSelect({ token }) {
  const {
    userData, isProfileOpen, setIsProfileOpen, profileItems,
  } = useProfileSelect({ layoutPath: 'layout2', authToken: token });
  return (
    <CustomSelect
      isOpen={isProfileOpen}
      setIsOpen={setIsProfileOpen}
      onToggle={() => setIsProfileOpen(!isProfileOpen)}
      onMenuClick={(item) => item.onClick()}
      // icon={(
      //   <div className="profile-img-box">
      //     <Image
      //       width={10000}
      //       height={10000}
      //       src={ProfileImg}
      //       alt="Profile Image"
      //     />
      //   </div>
      // )}
      label={<span className="profile-user-name">{userData?.user?.username}</span>}
      menuList={profileItems}
      menuKey="label"
      onMenuLabel={(item) => item.label}
      containerStyle="dropdown profile-dropdown"
      selectStyle="dropdown-btn profile-dropdown-btn"
      menuContainerStyle="dropdown-menu profile-dropdown-menu"
      listItemBoxStyle="list-item-box"
      menuButtonStyle="list-item"
      menuHeader={(
        <p className="hello-text">
          {`Hello, ${userData?.user?.username || ''}`}
        </p>
      )}
    />
  );
}
