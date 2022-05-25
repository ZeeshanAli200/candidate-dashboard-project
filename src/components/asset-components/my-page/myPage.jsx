import {
  FacebookFilled,
  GooglePlusOutlined,
  PlayCircleFilled,
  PlayCircleOutlined,
  PlayCircleTwoTone,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "antd";
import "./mypage.scss";
const MyPage = () => {
  return (
    <div className={"mypageWrapper"}>
      <div className={"bannerProfileWrapper"}>
        <div className={"profilepic"}>
          {" "}
          <Avatar
            size={90}
            src="https://media.istockphoto.com/photos/portrait-smiling-african-american-businessman-in-blue-suit-sit-at-picture-id1341347262?b=1&k=20&m=1341347262&s=170667a&w=0&h=nWVSejAWgPgQi128JMemYKX0YX9xUgf18Nd3o4Ez6ic="
          />
        </div>
        <div className={"bannerWrapper"}>
          {" "}
          <h4>
            COPPERBELT UNIVERSITY SRC 2022 ELECTIONS <br /> {`"SLOGANS"`}
          </h4>
        </div>
        <div className={"profile"}>
          <div className={"profileDetails"}>
            <span className={"profileName"}>JOHN DOE</span>
            <span className={"profession"}>PRESEDENTIAL ASPIRANT</span>
          </div>
          <div className={"socialIcons"}>
            <span>
              <FacebookFilled style={{ fontSize: "15px" }} />
            </span>
            <span>
              <TwitterOutlined />
            </span>
            <span>
              <GooglePlusOutlined style={{ fontSize: "17px" }} />
            </span>
          </div>
        </div>
      </div>
      <div className={"bioWrapper"}>
        <div className={"bioInnerWrapper"}>
          <span>Bio:</span>
          <p className={"bioPara"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            alias et rem, nisi laboriosam asperiores nam velit omnis sequi nemo,
            quod, quos perferendis at. Modi debitis excepturi odio cupiditate
            sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum sed fugiat velit, voluptate veritatis cum quo aspernatur
            saepe inventore id in odit maxime asperiores voluptates numquam
            aliquam incidunt mollitia. Cum!
          </p>
        </div>
        <div className={"bioInnerWrapper"}>
          <div className={"videoWrapper"}>
            {/* <PlayCircleOutlined
              style={{ fontSize: "100px", color: "#202022" }}
            /> */}
            <FontAwesomeIcon
              icon={faPlayCircle}
              style={{ fontSize: "120px", color: "#202022" }}
            />
            {/* <PlayCircleFilled style={{ fontSize: "100px", color: "#202022" }} /> */}
          </div>
          <div className={"videoDesc"}>
            <p>
              <b>Manifesto.docx</b>
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              alias et rem, nisi laboriosam asperiores nam velit omnis sequi
              nemo, quod, quos perferendis at. Modi debitis excepturi odio
              cupiditate sapiente! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatum sed fugiat velit, voluptate veritatis
              cum quo aspernatur saepe inventore id in odit maxime asperiores
              voluptates numquam aliquam incidunt mollitia. Cum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
