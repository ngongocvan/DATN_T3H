import { memo } from "react";
import "./style.scss";
import { FaHome } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="poster">
          <div className="col-lg-6 contact_left">
            <h3>TRANG THÔNG TIN CHÍNH THỨC</h3>
            <p>Thông tin liên hệ</p>

            <hr style={{ width: 300 }}></hr>
            <div className="contact_left_text">
              <span>Trang Thông Tin Chính Thức.</span>

              <p>
                <FaHome /> Địa chỉ: 192/2 Nguyễn Thái Bình, Phường 12, Quận Tân
                Bình, Thành phố Hồ Chí Minh Email : cskh.kingshoes.vn@gmail.com{" "}
              </p>
              <p>
                <FaPhoneVolume />
                Hotline Bán Hàng: 0909.300.746 - 0909.45.0001{" "}
              </p>
              <p>
                <FaPhoneVolume /> Hotline CSKH: 0902.368.001{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-6 contact_right">
            <h2>-VỚI CHÚNG TÔI</h2>
            <div className="contact_right_input">
              <textarea name="postContent" placeholder="Nội dung" />
              <input name="type" placeholder="Tên bạn*" />
              <div className="contact_right_input_child">
                <input name="type" placeholder="Email*" />
                <input name="type" placeholder="Điện thoại*" />
              </div>
            </div>
            <div className="contact_right_button">
              <button>Gửi ngay</button>
              <button>Nhập lại</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(Contact);
