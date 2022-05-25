import { useState } from "react";
import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Button, Menu } from "antd";
import "./asset.scss";
import { StarFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faVideoCamera,
  faList,
} from "@fortawesome/free-solid-svg-icons";
const AssetInfo = () => {
  return (
    <div className={"assetWrapper1"}>
      <div className={"assetInnerWrapper"}>
        <div className={"buttonWrapper"}>
          <div className={"newAssetWrapper"}>
            <Button>New Asset</Button>
          </div>
          <div className={"otherAssetWrapper"}>
            <Menu mode="horizontal" className={"menuList"}>
              <Menu.Item className={"menuItem"}>MISC</Menu.Item>
              <Menu.Item className={"menuItem"}>ALL</Menu.Item>
              <Menu.Item className={"menuItem"}>VIDEO</Menu.Item>
              <Menu.Item className={"menuItem"}>DOC</Menu.Item>
              <Menu.Item className={"menuItem"}>AUDIO</Menu.Item>
            </Menu>

            {/* <button>MISC</button>
            <button>ALL</button>
            <button>VIDEO</button>
            <button>DOC</button>
            <button>AUDIO</button> */}
          </div>
        </div>
        <div className={"assetSearchWrapper"}>
          <div className={"searchWrapper"}>
            <button>
              <span>Sort </span>
              <CaretDownOutlined
                style={{ color: "#27272a", fontSize: "15px", padding: "0 2px" }}
              />
            </button>
            <div className={"searchInputWrapper"}>
              {" "}
              <input type="text" placeholder="Search" />
              <SearchOutlined
                style={{
                  color: "#27272a",
                  fontSize: "15px",
                }}
              />
            </div>
          </div>
          {/* <div>
           
          </div> */}
        </div>

        <div className={"assetMusicWrapper"}>
          <div className={"titleinfoWrapper"}>
            <div className={"titleIcon"}>
              {/* <i className="fa-solid fa-music" /> */}
              <div className={"musicIconWrapper"}>
                <FontAwesomeIcon
                  icon={faMusic}
                  style={{ fontSize: "100px", color: "white" }}
                />
              </div>
            </div>
            <div className={"assetInnerWrapper"}>
              {/* <div className={assetinfo.titleIcon}>hello</div> */}
              <span className={"title"}>TITLE</span>
              <span className={"assetinformation"}>Asset Info</span>
              <div className={"assetInfoBtnWrapper"}>
                <StarFilled /> <button>AUDIO</button>
              </div>
            </div>
          </div>
          <div className={"titleinfoWrapper"}>
            <div className={"titleIcon"}>
              {/* <i className="fa-solid fa-music" /> */}
              <div className={"musicIconWrapper"}>
                <FontAwesomeIcon
                  icon={faVideoCamera}
                  style={{ fontSize: "100px", color: "white" }}
                />
              </div>
            </div>
            <div className={"assetInnerWrapper"}>
              <span className={"title"}>TITLE</span>
              <span className={"assetinformation"}>Asset Info</span>
              <div className={"assetInfoBtnWrapper"}>
                <StarFilled /> <button>VIDEO</button>
              </div>
            </div>
          </div>
          <div className={"titleinfoWrapper"}>
            <div className={"titleIcon"}>
              {/* <i className="fa-solid fa-music" /> */}
              <div className={"musicIconWrapper"}>
                <FontAwesomeIcon
                  icon={faList}
                  style={{ fontSize: "100px", color: "white" }}
                />
              </div>
            </div>{" "}
            <div className={"assetInnerWrapper"}>
              <span className={"title"}>TITLE</span>
              <span className={"assetinformation"}>Asset Info</span>
              <div className={"assetInfoBtnWrapper"}>
                <StarFilled /> <button>DOC</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"assetWrapperFooter"}>
        <span>LOAD MORE ...</span>
      </div>
    </div>
  );
};
export default AssetInfo;
