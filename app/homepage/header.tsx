import Logo from "@/public/logo";
const Header = () => {
  return (
    <div className="header flex justify-between  ">
      <div className="w-10 ml-5">
        <Logo />
      </div>
      <ul className="flex justify-around gap-9 mr-10">
        <li className="cursor-pointer border-solid border-2 border-white  m-3 px-2">
          <a href="#query">About Me</a>
        </li>
        <li className=" cursor-pointer border-solid border-2 border-white  m-3 px-2">
          <a href="#query">Contact</a>
        </li>
      </ul>
    </div>
  );
};
export default Header;
