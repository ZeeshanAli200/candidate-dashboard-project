import AssetInfo from "../../components/asset-components/asset";
import AssetsPageHeader from "../../components/assets-page-header/header";
import Dashboard from "../../components/sidebar/dashboard";
import "./Assets.scss";
import { useState } from "react";
import DashboardBox from "../../components/asset-components/dashboard/dashboard";
import MyPage from "../../components/asset-components/my-page/myPage";
import Preview from "../../components/asset-components/preview/preview";
import ProfileDetails from "../../components/asset-components/profile/profile";
import Upload from "../../components/asset-components/upload/upload";
import Voter from "../../components/asset-components/voters/voter";
import AssetComponentFooter from "../../components/footers/asset-component-footer/footer";
export default function Assets() {
  const [currTab, setcurrTab] = useState("Assets");
  console.log("currTab", currTab);
  return (
    <div className={"assetWrapper3"}>
      <div className={"sidebar"}>
        <Dashboard currTab={currTab} setcurrTab={setcurrTab} />
      </div>

      <div className={"sidebarPages"}>
        <AssetsPageHeader />
        {currTab === "Assets" ? (
          <AssetInfo />
        ) : currTab === "Dashboard" ? (
          <DashboardBox />
        ) : currTab === "My Page" ? (
          <MyPage />
        ) : currTab === "Preview" ? (
          <Preview />
        ) : currTab === "Profile" ? (
          <ProfileDetails />
        ) : currTab === "Upload" ? (
          <Upload />
        ) : currTab === "Voters" ? (
          <Voter />
        ) : null}
        <AssetComponentFooter />
      </div>
    </div>
  );
}
