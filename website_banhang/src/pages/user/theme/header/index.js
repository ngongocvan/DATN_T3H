import { memo, useState } from "react";
import "./style.scss";
import {
  AiOutlineFacebook,
  AiOutlineMenu,
  AiOutlinePhone,
} from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { ROUTERS } from "utils/router";
const Header = () => {
  const [isShowCategories, setShowCategories] = useState(true);
  const [menus] = useState([
    {
      name: "trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "cửa hàng",
      path: ROUTERS.USER.PROFILE,
    },
    {
      name: "sản phẩm",
      path: ROUTERS.USER.HOME,
      isShowSubmenu: false,
      child: [
        {
          name: "Nike",
          path: "",
        },
        {
          name: "Conserver",
          path: "",
        },
        {
          name: "adidas",
          path: "",
        },
        {
          name: "Vanz",
          path: "",
        },
      ],
    },
    {
      name: "bài viết",
      path: ROUTERS.USER.POSTER,
    },
    {
      name: "liên hệ",
      path: ROUTERS.USER.CONTACT,
    },
  ]);

  return (
    <>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-6 header_top_left">
              <ul>
                <li>
                  <AiTwotoneMail /> shopgiayuytin@gmail.com
                </li>
                <li>Miễn phí ship </li>
              </ul>
            </div>

            <div className="col-6 header_top_right">
              <ul>
                <li>
                  <Link to={""}>
                    <AiOutlineFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiFillInstagram />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiFillTwitterCircle />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineUser />
                  </Link>
                  <span>Đăng nhập</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-3 ">
            <div className="header_logo">
              <h1>VANSHOP</h1>
            </div>
          </div>
          {/* menu */}

          <div className="col-xl-6 ">
            <nav className="header_menu">
              <ul>
                {menus?.map((menu, menukey) => (
                  <li key={menukey} className={menukey === 0 ? "active" : ""}>
                    <Link to={menu?.path}>{menu?.name}</Link>
                    {menu.child && (
                      <ul className="header_menu_dropdown">
                        {menu.child.map((childItem, childKey) => (
                          <li key={`${menukey} - ${childKey}`}>
                            <Link to={childItem.path}>{childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}

                {/* <li>
                  <ul>
                    <li>Thịt</li>
                    <li>Thịt</li>
                    <li>Thịt</li>
                    <li>Thịt</li>
                  </ul>
                </li> */}
              </ul>
            </nav>
          </div>
          {/* menu */}
          <div className="col-xl-3 ">
            <div className="header_cart">
              <div className="header_cart_price"></div>
              <ul>
                <li>
                  <Link to="#">
                    <CiShoppingCart /> <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row hero_categories_container">
          <div className="col-lg-3 hero_categories">
            <div
              className="hero_categories_all"
              onClick={() => setShowCategories(!isShowCategories)}
            >
              <AiOutlineMenu />
              Danh sách sản phẩm
            </div>

            <ul className={isShowCategories ? "" : "hidden"}>
              <li>
                <Link to="#">Giày vanz</Link>
              </li>
              <li>
                <Link to="#">Giày nike</Link>
              </li>
              <li>
                <Link to="#">Giày conveser</Link>
              </li>
              <li>
                <Link to="#">Giày adidas</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 hero_search_container">
            <div className="hero_search">
              <div className="hero_search_form">
                <form>
                  <input type="text" value="" placeholder="Bạn đang tìm gì?" />
                  <button type="submit">Tìm kiếm</button>
                </form>
              </div>
              <div className="hero_search_phone">
                <div className="hero_search_phone_icon">
                  <AiOutlinePhone />
                </div>
                <div className="hero_search_phone_text">
                  <p>033.033.033</p>
                  <span>Hỗ trợ 24/24</span>
                </div>
              </div>
            </div>
            <div className="hero_item"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(Header);
