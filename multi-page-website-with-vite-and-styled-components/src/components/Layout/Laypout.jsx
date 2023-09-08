import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import GoToTop from "../UI/GoToTop/GoToTop";

export default function Laypout() {
  return (
    <>
    <Header />
    <Outlet />
    <GoToTop />
    <Footer />
  </>
  )
}
