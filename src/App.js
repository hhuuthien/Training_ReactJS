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
import LifeCycle from "./pages/LifeCycle/LifeCycle";
import DemoUseState from "./pages/Hook/DemoUseState";
import DemoUseEffect from "./pages/Hook/DemoUseEffect";
import DemoAPI_Class from "./pages/API/DemoAPI_Class";
import DemoAPI_Hook from "./pages/API/DemoAPI_Hook";
import CustomHook from "./pages/CustomHook/CustomHook";
import TangGiamSoLuongHook from "./components/DemoRedux/TangGiamSoLuongHook";
import API_Redux_Hook from "./pages/API/API_Redux_Hook";
import DemoUseCallBack from "./pages/Hook/DemoUseCallBack";
import DemoUseMemo from "./pages/Hook/DemoUseMemo";
import DemoUseRef from "./pages/Hook/DemoUseRef";
import ToDoListApp from "./pages/Thunk/ToDoListApp";

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
        <Route exact path={"/lifecycle"} component={LifeCycle} />
        <Route exact path={"/usestate"} component={DemoUseState} />
        <Route exact path={"/useeffect"} component={DemoUseEffect} />
        <Route exact path={"/apiclass"} component={DemoAPI_Class} />
        <Route exact path={"/apihook"} component={DemoAPI_Hook} />
        <Route exact path={"/customhook"} component={CustomHook} />
        <Route exact path={"/useselector"} component={TangGiamSoLuongHook} />
        <Route exact path={"/reduxhook"} component={API_Redux_Hook} />
        <Route exact path={"/usecallback"} component={DemoUseCallBack} />
        <Route exact path={"/usememo"} component={DemoUseMemo} />
        <Route exact path={"/useref"} component={DemoUseRef} />
        <Route exact path={"/thunk"} component={ToDoListApp} />
        <Route exact path={"/"} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// D??ng th??? ????ng ho???c th??? m??? ????ng ?????u ???????c
