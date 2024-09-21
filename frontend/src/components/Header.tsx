import reactLogo from "../assets/react.svg";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 p-0">
        <div className="container">
          <a className="navbar-brand">
            <div className="d-flex">
              <img src={reactLogo} alt="logo" />
              <div className="m-2 ">ProjectMgmt</div>
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
