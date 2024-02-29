import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import nike1Img from "assets/user/images/categories/nike1.jpg";
import nike2Img from "assets/user/images/categories/nike2.jpg";
import nike3Img from "assets/user/images/categories/nike3.jpg";
import nike4Img from "assets/user/images/categories/nike4.jpg";
import nike5Img from "assets/user/images/categories/nike5.jpg";
import nike6Img from "assets/user/images/categories/nike6.jpg";
import nike11Img from "assets/user/images/feature/nike11.jpg";
import nike12Img from "assets/user/images/feature/nike12.jpg";
import nike7Img from "assets/user/images/feature/nike7.jpg";
import vanz1Img from "assets/user/images/feature/vanz1.jpg";
import vanz2Img from "assets/user/images/feature/vanz2.jpg";
import vanz3Img from "assets/user/images/feature/vanz3.jpg";
import vanz4Img from "assets/user/images/feature/vanz4.jpg";
import vanz5Img from "assets/user/images/feature/vanz5.jpg";
import vanz6Img from "assets/user/images/feature/vanz6.jpg";
import adidas1Img from "assets/user/images/feature/adidas1.jpg";
import adidas2Img from "assets/user/images/feature/adidas2.jpg";
import adidas3Img from "assets/user/images/feature/adidas3.jpg";
import adidas4Img from "assets/user/images/feature/adidas4.jpg";
import conver1Img from "assets/user/images/feature/conver1.jpg";
import conver2Img from "assets/user/images/feature/conver2.jpg";
import conver3Img from "assets/user/images/feature/conver3.jpg";
import banner1Img from "assets/user/images/banner/banner1.jpg";
import banner2Img from "assets/user/images/banner/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const slideItem = [
    {
      bgImg: nike1Img,
      name: "",
    },
    {
      bgImg: vanz2Img,
      name: "",
    },
    {
      bgImg: conver1Img,
      name: "",
    },
    {
      bgImg: adidas3Img,
      name: "",
    },
    {
      bgImg: conver2Img,
      name: "",
    },
    {
      bgImg: vanz3Img,
      name: "",
    },
    {
      bgImg: nike7Img,
      name: "",
    },
  ];

  const featProducts = {
    all: {
      title: "Toàn bộ",
      product: [
        {
          img: nike11Img,
          name: "Nike air one",
          price: "100$",
        },
        {
          img: vanz1Img,
          name: "Vanz old",
          price: "120$",
        },
        {
          img: adidas1Img,
          name: "Adidas",
          price: "220$",
        },
        {
          img: conver1Img,
          name: "Converser",
          price: "199$",
        },
        {
          img: vanz3Img,
          name: "Vanz Red",
          price: "300$",
        },
        {
          img: adidas3Img,
          name: "adidas",
          price: "450$",
        },
        {
          img: vanz5Img,
          name: "Vanz",
          price: "123$",
        },
        {
          img: nike11Img,
          name: "giayvanx",
          price: "99$",
        },
        {
          img: adidas2Img,
          name: "Adidas",
          price: "124$",
        },
        {
          img: conver3Img,
          name: "Conver",
          price: "156$",
        },
        {
          img: nike12Img,
          name: "Nike Jordan",
          price: "222$",
        },
        {
          img: adidas4Img,
          name: "adidas",
          price: "319$",
        },
      ],
    },

    nike: {
      title: "Nike",
      product: [
        {
          img: nike11Img,
          name: "Nike air foce one",
          price: "134$",
        },
        {
          img: nike12Img,
          name: "Nike air max one",
          price: "324$",
        },
      ],
    },
    vanz: {
      title: "Vanz",
      product: [
        {
          img: vanz1Img,
          name: "Vanz Authentic",
          price: "123$",
        },
        {
          img: vanz2Img,
          name: "Vanz old skool",
          price: "99$",
        },
        {
          img: vanz3Img,
          name: "Vanz Era",
          price: "119$",
        },
        {
          img: vanz4Img,
          name: "Vanz Slip on",
          price: "202$",
        },
        {
          img: vanz5Img,
          name: "Vanz SK8",
          price: "189$",
        },
        {
          img: vanz6Img,
          name: "Vanz Hi",
          price: "178$",
        },
      ],
    },
    converser: {
      title: " Converser",
      product: [
        {
          img: conver1Img,
          name: "Converse Classic",
          price: "125$",
        },
        {
          img: conver2Img,
          name: "Converse 1970S",
          price: "329",
        },
        {
          img: conver3Img,
          name: "Converse Jack Purcell",
          price: "331$",
        },
      ],
    },
    adidas: {
      title: " Adidas",
      product: [
        {
          img: adidas1Img,
          name: "giay",
          price: "421$",
        },
        {
          img: adidas2Img,
          name: "giay",
          price: "421$",
        },
        {
          img: adidas3Img,
          name: "giay",
          price: "410$",
        },
        {
          img: adidas4Img,
          name: "giay",
          price: "290$",
        },
      ],
    },
  };

  const renderfeatureProduct = (data) => {
    const tabList = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);
      const tabPanel = [];
      data[key].product.forEach((item, j) => {
        tabPanel.push(
          <div className="col-lg-3" key={j}>
            <div className="featured_item">
              <div
                className="featured_item_pic"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <ul className="featured_item_pic_hover">
                  <li>
                    <AiOutlineEye />
                  </li>
                  <li>
                    <AiOutlineShoppingCart />
                  </li>
                </ul>
              </div>
              <div className="featured_item_text">
                <h6>
                  <Link to="">{item.name}</Link>
                </h6>
                <h5>{item.price}</h5>
              </div>
            </div>
          </div>
        );
      });
      tabPanels.push(tabPanel);
    });

    return (
      <Tabs>
        <TabList>{tabList}</TabList>
        {tabPanels.map((item, key) => (
          <TabPanel key={key}>
            <div className="row">{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    );
  };
  return (
    <>
      <div className="container container__categories_slider">
        <Carousel responsive={responsive} className="categories_slider">
          {slideItem.map((item, key) => (
            <div
              className="categories_slider_item"
              style={{ backgroundImage: `url(${item.bgImg})` }}
              key={key}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="container">
        <div className="featured">
          <div className="section-title">
            <h2>Sản phẩm nổi bật</h2>
          </div>
          {renderfeatureProduct(featProducts)}
        </div>
      </div>
      <div className="container">
        <div className="banner">
          <div className="banner_pic">
            <img src={banner1Img} alt="banner" />
          </div>

          <div className="banner_pic">
            <img src={banner2Img} alt="banner" />
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(HomePage);
