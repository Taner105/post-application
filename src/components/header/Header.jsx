import { Input } from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const Header = () => {
  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-10">
        <div className="logo">
          <a href="/">
            <h2 className="text-2xl font-bold md:text-4xl ">LOGO</h2>
          </a>
        </div>
        <div className="header-search flex-1">
          <Input
            className="rounded-full max-w-[800px]"
            size="large"
            placeholder="Search..."
            prefix={<SearchOutlined />}
          />
        </div>
        <div className="menu-links flex justify-between items-center gap-8">
          <a href="/" className="menu-link flex flex-col items-center">
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Home</span>
          </a>
          <a href="/" className="menu-link flex flex-col items-center">
            <ShoppingCartOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Cart</span>
          </a>
          <a href="/" className="menu-link flex flex-col items-center">
            <CopyOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Bills</span>
          </a>
          <a href="/" className="menu-link flex flex-col items-center">
            <UserOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Customers</span>
          </a>
          <a href="/" className="menu-link flex flex-col items-center">
            <BarChartOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Statistics</span>
          </a>
          <a href="/" className="menu-link flex flex-col items-center">
            <LogoutOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Log Out</span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
