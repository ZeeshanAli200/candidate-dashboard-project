import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import "./preview.scss";
const Preview = () => {
  return (
    <div className={"previewWrapper"}>
      <div className={"previewInnerWrapper"}>
        <div className={"header"}>
          <h3>SRC ELECTION 2022: PRESIDENT CATEGORY</h3>
        </div>
        <div className={"presidents"}>
          <div className={"presidentProfile"}>
            <div className={"presidentProfPic"}>
              {" "}
              <Avatar
                src="https://previews.123rf.com/images/baranq/baranq1603/baranq160300831/53957368-.jpg"
                size={64}
              />
            </div>
            <div className={"presidentProfileWrapper"}></div>
            <div className={"presidentNameWrapper"}>
              <span>John Doe</span>
              <button>VOTE</button>
            </div>
          </div>
          <div className={"presidentProfile"}>
            <div className={"presidentProfPic"}>
              {" "}
              <Avatar
                src="https://previews.123rf.com/images/baranq/baranq1603/baranq160300831/53957368-.jpg"
                size={64}
              />
            </div>
            <div className={"presidentProfileWrapper"}></div>
            <div className={"presidentNameWrapper"}>
              <span>John Doe</span>
              <button>VOTE</button>
            </div>
          </div>
          <div className={"presidentProfile"}>
            <div className={"presidentProfPic"}>
              {" "}
              <Avatar
                src="https://previews.123rf.com/images/baranq/baranq1603/baranq160300831/53957368-.jpg"
                size={64}
              />
            </div>
            <div className={"presidentProfileWrapper"}></div>
            <div className={"presidentNameWrapper"}>
              <span>John Doe</span>
              <button>VOTE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
