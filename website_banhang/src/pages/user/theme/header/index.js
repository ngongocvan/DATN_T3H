import {memo} from "react";
import "./style.scss";
import {AiOutlineFacebook } from "react-icons/ai";
import {AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import {Link} from "react-router-dom"
import {AiOutlineUser} from "react-icons/ai";
import {AiTwotoneMail} from "react-icons/ai";
const Header = () => {
    return (

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
                <li><Link to={""}><AiOutlineFacebook /></Link></li>
                <li><Link to={""}><AiFillInstagram /></Link></li>
                <li><Link to={""}><AiFillTwitterCircle /></Link></li>
                <li><Link to={""}><AiOutlineUser /></Link> 
                <span>Đăng nhập</span>
                </li>

            </ul>
        </div>
        </div>
    </div>
    </div>
    )
}
export default memo(Header);