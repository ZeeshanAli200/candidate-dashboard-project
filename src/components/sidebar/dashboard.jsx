import { Avatar, Divider, Image, Menu } from "antd";
import "./dashboard.scss";
import ProfilePic from "../../assets/images/Emmawatson.webp";
import {
  MenuOutlined,
  MenuUnfoldOutlined,
  UpOutlined,
  UserOutlined,
  SettingOutlined,
  PaperClipOutlined,
  CloudUploadOutlined,
  SaveOutlined,
  AppstoreOutlined,
  CheckOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const Dashboard = ({ currTab, setcurrTab }) => {
  const handleChange = (e) => {
    setcurrTab(e.target.innerText);
  };
  return (
    <div className={"wrapper"}>
      <div className={"header"}>
        <div className={"title"}>
          POLL <span className={"subtitle"}>NATION</span>
        </div>
      </div>
      <span className={"divider"}></span>
      <Menu className={"sidebarMenuList"} mode="inline">
        <SubMenu
          className={"subMenuList"}
          title={
            <div className={"userTitle"}>
              <Avatar src={ProfilePic} />
              <span className={"userName"}>Emma Watson</span>
            </div>
          }
        >
          <Menu.Item
            onClick={() => setcurrTab("Profile")}
            className={"subMenuItem"}
            style={{
              background: "#202022",
              margin: "0",
              width: "100%",
              color: "white",
            }}
          >
            Profile
          </Menu.Item>
          <Menu.Item
            onClick={() => setcurrTab("Logout")}
            style={{
              background: "#202022",
              margin: "0",
              width: "100%",
              color: "white",
            }}
            className={"subMenuItem"}
          >
            Logout
          </Menu.Item>
        </SubMenu>
      </Menu>
      <span className={"divider"}></span>
      <Menu className={"sidebarMenuList"} style={{ margin: "20px" }}>
        <Menu.Item
          className={"sidebarMenuItem"}
          onClick={() => setcurrTab("Dashboard")}
          icon={<AppstoreOutlined />}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          onClick={() => setcurrTab("Assets")}
          className={"sidebarMenuItem"}
          icon={<SettingOutlined />}
        >
          Assets
        </Menu.Item>
        <Menu.Item
          onClick={() => setcurrTab("Upload")}
          className={`sidebarMenuItem`}
          icon={<CloudUploadOutlined />}
        >
          Upload
        </Menu.Item>
        <Menu.Item
          onClick={() => setcurrTab("Voters")}
          className={"sidebarMenuItem"}
          icon={<CheckOutlined />}
        >
          Voters
        </Menu.Item>
        <Menu.Item
          onClick={() => setcurrTab("My Page")}
          className={"sidebarMenuItem"}
          icon={<SaveOutlined />}
          // icon={<MenuOutlined />}
        >
          My page
        </Menu.Item>
        <Menu.Item
          onClick={() => setcurrTab("Preview")}
          className={"sidebarMenuItem"}
          icon={<PaperClipOutlined />}
        >
          Preview
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default Dashboard;
