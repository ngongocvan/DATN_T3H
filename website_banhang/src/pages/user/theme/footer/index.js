import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="footer_about">
              <h1 className="footer_about_loho">VANSHOP</h1>
              <ul>
                <li>Địa chỉ : xuân đỉnh</li>
                <li>Phone : 20292929</li>
                <li>Email: giaytot@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="footer_widget">
              <h6>Cửa Hàng</h6>
              <ul>
                <li>
                  <Link to=""> Liên Hệ </Link>
                </li>
                <li>
                  <Link to=""> Thông tin về chúng tôi </Link>
                </li>
                <li>
                  <Link to=""> Sản phẩm kinh doanh</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to=""> Thông tin tài khoản</Link>
                </li>
                <li>
                  <Link to=""> Giỏ Hàng </Link>
                </li>
                <li>
                  <Link to=""> Danh sách ưu thích </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="footer_widget">
              <h6>Khuyến mãi và ưu đãi</h6>
              <p>Đăng kí nhận thông tin tại đây</p>
              <form action="#">
                <div className="input-group">
                  <input type="text" placeholder="nhập email " />
                  <button type="sunmit" className="button-submit">
                    Đăng ký
                  </button>
                </div>
                <div className="footer_widget_social">
                  <div>
                    <AiOutlineFacebook />
                  </div>
                  <div>
                    <AiFillInstagram />
                  </div>
                  <div>
                    <AiFillTwitterCircle />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default memo(Footer);
