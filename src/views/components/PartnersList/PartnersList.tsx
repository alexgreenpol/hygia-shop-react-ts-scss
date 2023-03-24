import "./PartnersList.scss";
import Partner1 from "./images/p1.png";
import Partner2 from "./images/p2.png";
import Partner3 from "./images/p3.png";
import Partner4 from "./images/p4.png";
import Partner5 from "./images/p5.png";
import Partner6 from "./images/p6.png";

const PartnersList = () => {
    return (
        <ul className="partners-list">
            <li className="partners-list__item">
                <img src={Partner1} alt="" />
            </li>
            <li className="partners-list__item">
                <img src={Partner2} alt="" />
            </li>
            <li className="partners-list__item">
                <img src={Partner3} alt="" />
            </li>
            <li className="partners-list__item">
                <img src={Partner4} alt="" />
            </li>
            <li className="partners-list__item">
                <img src={Partner5} alt="" />
            </li>
            <li className="partners-list__item">
                <img src={Partner6} alt="" />
            </li>
        </ul>
    );
};

export default PartnersList;
