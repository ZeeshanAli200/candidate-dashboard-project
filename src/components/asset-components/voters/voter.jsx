import { UserOutlined } from "@ant-design/icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "antd";
import "./voter.scss";
const Voter = () => {
  return (
    <div className={"voterWrapper"}>
      <div className={"InnerWrapper"}>
        <div className={"searchWrapper"}>
          <div>
            <input type="text" placeholder="Search" />
            <span>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ fontSize: "15px", color: "#27272a" }}
              />
            </span>
          </div>
        </div>
        <div className={"voterListWrapper"}>
          <div className={"voterList"}>
            <div className={"voterListWrapper"}>
              <div className={"voterAvatar"}>
                <span>
                  {" "}
                  <Avatar
                    shape="square"
                    size={80}
                    style={{ borderRadius: "8px" }}
                    src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                  />
                </span>
              </div>
              <div className={"voterDetail"}>
                <span className={"label"}>JANE DOE</span>
                <span className={"phone"}>
                  Phone: +434 342 346 734 <br />
                  Email: janedoe@heremail.com
                </span>
                <span className={"hideBtn"}>
                  <button>HIDE</button>
                </span>
              </div>
            </div>
            <div className={"voterListWrapper"}>
              <div className={"voterAvatar"}>
                <span>
                  {" "}
                  <Avatar
                    shape="square"
                    size={80}
                    style={{ borderRadius: "8px" }}
                    src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                  />
                </span>
              </div>
              <div className={"voterDetail"}>
                <span className={"label"}>JANE DOE</span>
                <span className={"phone"}>
                  Phone: +434 342 346 734 <br />
                  Email: janedoe@heremail.com
                </span>
                <span className={"hideBtn"}>
                  <button>HIDE</button>
                </span>
              </div>
            </div>
            <div className={"voterListWrapper"}>
              <div className={"voterAvatar"}>
                <span>
                  {" "}
                  <Avatar
                    shape="square"
                    size={80}
                    style={{ borderRadius: "8px" }}
                    src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                  />
                </span>
              </div>
              <div className={"voterDetail"}>
                <span className={"label"}>JANE DOE</span>
                <span className={"phone"}>
                  Phone: +434 342 346 734 <br />
                  Email: janedoe@heremail.com
                </span>
                <span className={"hideBtn"}>
                  <button>HIDE</button>
                </span>
              </div>
            </div>
          </div>
          {/* ******************* */}
          <div className={"voterList"}>
            <div className={"voterListWrapper"}>
              <div className={"voterAvatar"}>
                <span>
                  {" "}
                  <Avatar
                    shape="square"
                    size={80}
                    style={{ borderRadius: "8px" }}
                    src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                  />
                </span>
              </div>
              <div className={"voterDetail"}>
                <span className={"label"}>JANE DOE</span>
                <span className={"phone"}>
                  Phone: +434 342 346 734 <br />
                  Email: janedoe@heremail.com
                </span>
                <span className={"hideBtn"}>
                  <button>HIDE</button>
                </span>
              </div>
            </div>
            <div className={"voterListWrapper"}>
              <div className={"voterAvatar"}>
                <span>
                  {" "}
                  <Avatar
                    shape="square"
                    size={80}
                    style={{ borderRadius: "8px" }}
                    src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                  />
                </span>
              </div>
              <div className={"voterDetail"}>
                <span className={"label"}>JANE DOE</span>
                <span className={"phone"}>
                  Phone: +434 342 346 734 <br />
                  Email: janedoe@heremail.com
                </span>
                <span className={"hideBtn"}>
                  <button>HIDE</button>
                </span>
              </div>
            </div>
            <div className={"voterListWrapper"}>
              <div className={"voterAvatar"}>
                <span>
                  {" "}
                  <Avatar
                    shape="square"
                    size={80}
                    style={{ borderRadius: "8px" }}
                    src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                  />
                </span>
              </div>
              <div className={"voterDetail"}>
                <span className={"label"}>JANE DOE</span>
                <span className={"phone"}>
                  Phone: +434 342 346 734 <br />
                  Email: janedoe@heremail.com
                </span>
                <span className={"hideBtn"}>
                  <button>HIDE</button>
                </span>
              </div>
            </div>
          </div>
          <div className={"loadMore"}>
            <span>LOAD MORE ...</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Voter;
