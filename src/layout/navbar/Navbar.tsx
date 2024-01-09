/* eslint-disable @typescript-eslint/no-explicit-any */

import { GoBell } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { getUserInfo, removeUserInfo } from "../../hooks/services/auth.service";
import { getAuthKey, fileUrlKey } from "../../config/envConfig";
import { Dropdown, IconButton } from "rsuite";
import AdminIcon from "@rsuite/icons/Admin";
import OffIcon from "@rsuite/icons/Off";

const Navbar = () => {
  const navigate = useNavigate();

  const logOut = () => {
    removeUserInfo(getAuthKey());
    navigate("/login");
  };

  const user = getUserInfo() as any;
  const renderIconButton2 = (props: any, ref: any) => {
    return (
      <IconButton {...props} ref={ref} icon={<GoBell size={22} />} circle />
    );
  };
  const renderIconButton = (props: any, ref: any) => {
    return (
      <IconButton
        {...props}
        ref={ref}
        icon={
          <img
            className="h-7 w-7  object-cover  rounded-full "
            src={`${fileUrlKey()}/${user?.profileImage}`}
            alt=""
          />
        }
        circle
        size="xs"
        className="!border-1 focus-within:scale-95 !border-[#2222223b] hover:!border-[#22222281] hover:ring-0"
        appearance="ghost"
      />
    );
  };
  return (
    <>
      <div className="flex z-50 flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-between py-3 border-b h-[50px] shadow-sm bg-white sticky top-0 items-center">
        <div className="pl-5">
          <h2 className="font-semibold">
            Welcome back, {user?.firstName} {user?.lastName} 👋
          </h2>
        </div>

        <div className="flex items-center gap-x-4 lg:gap-x-6 pr-6">
          <div>
            <Dropdown
              size="lg"
              noCaret
              appearance="default"
              color="blue"
              defaultOpen={true}
              renderToggle={renderIconButton2}
              placement="bottomEnd"
            >
              <Dropdown.Item>Violets are blue</Dropdown.Item>
              <Dropdown.Item>Violets are blue</Dropdown.Item>
              <Dropdown.Item>Violets are blue</Dropdown.Item>
              <Dropdown.Item>Violets are blue</Dropdown.Item>
              <Dropdown.Item>Violets are blue</Dropdown.Item>
              <Dropdown.Item>Violets are blue</Dropdown.Item>
            </Dropdown>
          </div>

          {/* Profile dropdown */}
          <div>
            <Dropdown placement="bottomEnd" renderToggle={renderIconButton}>
              <Dropdown.Item icon={<AdminIcon />}>My Profile</Dropdown.Item>

              <Dropdown.Item onClick={logOut} icon={<OffIcon />}>
                Log Out
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
