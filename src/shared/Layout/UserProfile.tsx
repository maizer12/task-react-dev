import { UserType } from '../../interfaces/shared.types';

interface IProps {
  user: UserType;
  onLogout: () => void;
}

const UserProfile = ({ user, onLogout }: IProps) => {
  return (
    <div className="flex items-center justify-between anim-opacity">
      <div className="text-white">
        <p className="text-lg font-semibold">{user?.fullName}</p>
        <p className="text-sm text-gray-400">{user?.email}</p>
      </div>
      <button
        className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
