import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faVideoCamera,
  faList,
  faUsers,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { CaretDownOutlined, StarFilled, UserOutlined } from "@ant-design/icons";
import "./dashboard.scss";
import { Avatar, Switch } from "antd";
// import Switch from "react-js-switch";

const DashboardBox = () => {
  return (
    <div>
      <div className={"analyticWrapper"}>
        <div className={"assetMusicWrapper"}>
          <div className={"titleinfoWrapper"}>
            <div className={"titleIcon"}>
              {/* <i className="fa-solid fa-music" /> */}
              <div className={"musicIconWrapper"}>
                <FontAwesomeIcon
                  icon={faUsers}
                  style={{ fontSize: "100px", color: "white" }}
                />
              </div>
            </div>
            <div className={"assetInnerWrapper"}>
              {/* <div className={"titleIcon}>hello</div> */}
              <span className={"title"}>Voters</span>
              <span className={"assetinformation"}>5000</span>
            </div>
          </div>
          <div className={"titleinfoWrapper"}>
            <div className={"beginsIcon"}>
              {/* <i className="fa-solid fa-music" /> */}
              <div className={"musicIconWrapper"}>
                <FontAwesomeIcon
                  icon={faClock}
                  style={{ fontSize: "100px", color: "white" }}
                />
              </div>
            </div>
            <div className={"assetInnerWrapper"}>
              <span className={"title"}>Begins</span>
              <span className={"assetinformation"}>
                20th April 2022 <br />
                09:00 AM
              </span>
            </div>
          </div>
          <div className={"titleinfoWrapper"}>
            <div className={"endIcon"}>
              <div className={"musicIconWrapper"}>
                <FontAwesomeIcon
                  icon={faClock}
                  style={{ fontSize: "100px", color: "white" }}
                />
              </div>
            </div>{" "}
            <div className={"assetInnerWrapper"}>
              <span className={"title"}>Ends</span>
              <span className={"assetinformation"}>
                {" "}
                20th April 2022 <br />
                09:00 AM
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={"analyticDescripWrapper"}>
        <div className={"assetMusicWrapper"}>
          <div className={"titleinfoWrapper"}>
            <div className={"titleIcon"}>
              <div className={"musicIconWrapper"}></div>
              <h4>COPPERBELT UNIVERSITY SRC 2022 ELECTIONS</h4>
            </div>
            <div className={"assetInnerWrapper"}>
              {/* <div className={assetinfo.titleIcon}>hello</div> */}
              <div className={"assetDescInnerWrapper"}>
                <div className={"assetvoters"}>
                  <div>
                    {" "}
                    <span className={"voterLabel"}>Voters:</span>
                    <span className={"voterValue"}>3000</span>
                  </div>
                  <div>
                    {" "}
                    <span className={"voterLabel"}>Poll Type</span>
                    {/* <span>3000</span> */}
                    <button className={"privateBtn"}>
                      <span>PRIVATE </span>
                      <CaretDownOutlined
                        style={{
                          color: "#27272a",
                          fontSize: "15px",
                          padding: "0 2px",
                        }}
                      />
                    </button>
                  </div>
                </div>
                <div className={"assetRestrictDescrip"}>
                  <div>
                    <span>Description</span>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas, veritatis fuga perferendis dolorum eos et, obcaecati
                    </p>
                  </div>
                </div>
                <div className={"assetvoters"}>
                  <div>
                    {" "}
                    <span className={"voterLabel"}>Office Start Time:</span>
                    <span className={"voterValue"}>09:00 AM</span>
                  </div>
                  <div>
                    {" "}
                    <span className={"voterLabel"}>Office End Time:</span>
                    <span className={"voterValue"}>06:00 PM</span>
                  </div>
                </div>
              </div>
              <div className={"otpToggle"}>
                <div className={"otpToggleWrapper"}>
                  <div className={"label"}>
                    <span>OTP Enabled</span>
                  </div>
                  <div className={"switch"}>
                    {" "}
                    <Switch
                      checkedChildren="On"
                      unCheckedChildren="Off"
                      defaultChecked
                    />
                  </div>
                </div>
                <div className={"otpGeoToggleWrapper"}>
                  <div className={"label"}>
                    <span>Geo Restricted</span>
                  </div>
                  <div className={"switch"}>
                    {" "}
                    <Switch
                      checkedChildren="On"
                      unCheckedChildren="Off"
                      defaultChecked
                    />
                  </div>
                </div>
              </div>
              <div className={"divider"}></div>
              <div className={"officerWrapper"}>
                <div className={"officerLabels"}>
                  <span className={"officerLabelsSpan"}>Officers</span>
                  <span className={"officerName"}>
                    {" "}
                    <Avatar
                      size="small"
                      icon={<UserOutlined />}
                      style={{ marginRight: "10px" }}
                    />
                    John Doe
                  </span>
                  <span className={"officerName"}>
                    {" "}
                    <Avatar
                      size="small"
                      icon={<UserOutlined />}
                      style={{ marginRight: "10px" }}
                    />
                    John Doe
                  </span>
                  {/* <span></span> */}
                </div>
              </div>
            </div>
            <div className={"pastPollsWrapper"}>
              <div className={"pastPollsLabel"}>
                <span>Past Polls</span>
              </div>
              <div className={"pastPollsPics"}>
                <div className="pastPollsPic">
                  <div className={"pastPollsPicsWrapper"}></div>
                  <span>Lorem ipsum dolor sit</span>
                </div>
                <div className="pastPollsPic">
                  <div className={"pastPollsPicsWrapper"}></div>
                  <span>Lorem ipsum dolor sit</span>
                </div>
                <div className="pastPollsPic">
                  <div className={"pastPollsPicsWrapper"}></div>
                  <span>Lorem ipsum dolor sit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardBox;
