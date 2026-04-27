import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import { useEffect, useState } from "react";

type MenuSchema = {
  label: string;
  to: string;
};

type UserMenuProps = { email: string; menuSchema?: MenuSchema[] };

const defaultSchema = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
  },
  {
    label: "Settings",
    to: "/setting",
  },
];

const UserMenu = ({ email, menuSchema = defaultSchema }: UserMenuProps) => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    setCollapsed(true);
  }, [pathname]);

  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="flex justify-end text-center m-2 font-funnel">
      <div className="flex flex-col 3">
        <Button variant="link" onClick={() => setCollapsed(!collapsed)}>
          {email}
        </Button>
        {!collapsed && (
          <ul className="flex flex-col gap-2 absolute border">
            {menuSchema.map(({ label, to }) => (
              <li className="">
                <Link
                  className={`text-cool hover:underline ${pathname === to ? "font-bold" : ""}`}
                  to={to}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
