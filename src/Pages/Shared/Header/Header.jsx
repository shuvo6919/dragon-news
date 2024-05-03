import logo from "../../../../src/assets/images/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-2 mt-8">
      <img src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
