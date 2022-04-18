// import Home from "./components/BT_Layout/Home";
import DataBinding from "./components/DataBinding/DataBinding";
import HandleEvent from "./components/HandleEvent/HandleEvent";
import StateDemo from "./components/StateDemo/StateDemo";
import TangGiamFontSize from "./components/StateDemo/TangGiamFontSize";
import ThayDoiMauSac from "./components/StateDemo/ThayDoiMauSac";
import StyleComponent from "./components/StyleComponent/StyleComponent";
import ChonXe from "./components/StateDemo/ChonXe";
import ChonXeRedux from "./components/DemoRedux/ChonXeRedux";
import RenderArray from "./components/RenderArray/RenderArray";
import DemoProps from "./components/Props/DemoProps/DemoProps";
import ShoeShop from "./components/Props/DemoProps/ShoeShop";
import BaiTapXemChiTiet from "./components/Props/BaiTapXemChiTiet/BaiTapXemChiTiet.jsx";
import "./App.css";
import Number from "./components/DemoRedux/Number";
import BaiTapGioHang from "./components/DemoRedux/BaiTapGioHang";
import MainGame from "./components/GameXucXac/MainGame.jsx";

// route
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import HeaderHome from "../src/components/HeaderHome/HeaderHome.jsx";
import { Switch } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Detail from "./pages/Detail/Detail";
import Search from "./pages/Search/Search";
import BaiTapQuanLyNguoiDung from "./pages/BaiTapQuanLyNguoiDung/BaiTapQuanLyNguoiDung";

function App() {
  return (
    // <Home />
    // <DataBinding />
    // <HandleEvent />
    // <StateDemo />
    // <TangGiamFontSize />
    // <StyleComponent />
    // <ThayDoiMauSac />
    // <ChonXe />
    // <RenderArray />
    // <DemoProps />
    // <ShoeShop />
    // <BaiTapXemChiTiet />
    // <Number />
    // <ChonXeRedux />
    // <BaiTapGioHang />
    // <MainGame />

    <BrowserRouter>
      <HeaderHome />
      <Switch>
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/contact"} component={Contact} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/register"} component={Register} />
        <Route exact path={"/profile"} component={Profile} />
        <Route exact path={"/detail/:picID"} component={Detail} />
        <Route exact path={"/search"} component={Search} />
        <Route exact path={"/btqlnd"} component={BaiTapQuanLyNguoiDung} />
        <Route exact path={"/"} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// Dùng thẻ đóng hoặc thẻ mở đóng đều được
