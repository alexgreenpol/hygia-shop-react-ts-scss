import { FC } from "react";
import "./Banner.scss";

type BannerProps = {
    imgSrc: string;
    children: JSX.Element | JSX.Element[];
};

const Banner: FC<BannerProps> = ({ imgSrc, children }) => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${imgSrc})` }}>
            <div className="pure-g">
                <div className="pure-u-1 pure-u-md-1-2">
                    <div className="banner__content">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
