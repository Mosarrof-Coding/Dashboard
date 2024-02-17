import "../styles/global.css";
import Sidebar from "./Sidebar";
import Header from "./Header";

function MainLayout() {
  return (
    <>
      <div className="contizer">
        <div className="dsahboardWrapper">
          <div className="sidebar relative">
            <Sidebar />
          </div>
          <div className="navbar ">
            <Header />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
