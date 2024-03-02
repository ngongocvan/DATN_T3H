import { memo } from "react";
import "./style.scss";
import poster1 from "assets/user/images/banner/poster1.jpeg";
import poster2 from "assets/user/images/banner/poster2.jpg";
import poster3 from "assets/user/images/banner/poster3.jpeg";
import poster4 from "assets/user/images/banner/poster4.jpeg";
import poster5 from "assets/user/images/banner/poster5.jpg";
import hd1 from "assets/user/images/banner/hd1.jpeg";
import hd2 from "assets/user/images/banner/hd2.jpeg";
import thankiu from "assets/user/images/banner/thankiu.jpeg";
const Poster = () => {
  return (
    <>
      <div className="container">
        <div className="poster">
          <div className="col-lg-9 poster_left">
            <h2>BÁN GIÀY THỂ THAO SNEAKER CHÍNH HÃNG GIỚI THIỆU</h2>
            <p style={{ marginTop: 20 }}>
              Nỗi sợ vì mua phải giày kém chất lượng, giày fake, từ nay không
              còn lo lắng nữa vì đã có #VANSHOES.VN: hàng chính hãng nhập trực
              tiếp từ US, fullbox, nguyên tem.
            </p>
            <img src={poster1} />
            <h4>Cửa Hàng Bán Giày Sneaker Van SHOES Giới thiệu</h4>
            <img src={poster2} />
            <h4>KING SHOES CHUẨN GIÀY REAL - DEAL SIÊU KHỦNG</h4>
            <img src={poster2} />
            <h4> Quý Khách hay hỏi Vanshoes có chỗ đậu Ôtô không????</h4>
            <img src={poster3} />
            <img src={poster4} />
            <img src={poster5} />

            <h4>⇒ Bảng Giá Vận Chuyển</h4>
            <p>
              ☑ Khu vực TP. Hồ Chí Minh: Miễn phí chi phí vận chuyển (Free
              ship).
            </p>
            <p>
              ☑ Khu vực Tỉnh : KingShoes.vn hỗ trợ khách hàng 50k chi phí vận
              chuyển phát sinh từ các đơn vị vận chuyển như: Giao Hàng Nhanh, VN
              Post, Viettel.
            </p>
            <p style={{ paddingLeft: 400 }}>------- *** --------</p>
            <img src={thankiu} />
            <div className="poster_left_hd">
              <img src={hd1} />
              <img src={hd2} />
            </div>

            <p>
              ⇒ Tất cả sản phẩm tại <strong>VANSHOES.VN </strong>được bảo hành
              hàng chính hãng trọn đời ( khách hàng phát hiện sản phẩm không
              chính hãng từ kingshoes.vn là được đền bù 200% thiệt hại tinh thần
              và vật chất ).
            </p>
            <p>
              - Kingshoes CAM KẾT sản phẩm đưa đến khách hàng là CHÍNH HÃNG, thẻ
              có giá trị đảm bảo CHÍNH HÃNG TRỌN ĐỜI SẢN PHẨM. Và chỉ chấp nhận
              bảo hành là hàng CHÍNH HÃNG với SP còn nguyên tem và Tag bảo hành.
            </p>
          </div>
          <div className="col-lg-3 ">phai</div>
        </div>
      </div>
    </>
  );
};
export default memo(Poster);
