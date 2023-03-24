import Banner from "../components/Banner/Banner";
import FullwidthLayout from "../layouts/FullwidthLayout";
import IntroBanner from "../assets/images/main-banner.png";
import SuppliesBanner from "../assets/images/banner1.png";
import DisinfectantBanner from "../assets/images/banner2.png";
import ButtonLink from "../components/ButtonLink/ButtonLink";
import { ButtonEnum, SizesEnum } from "src/types/enums";
import PartnersList from "../components/PartnersList/PartnersList";
import RecentProducts from "../components/RecentProducts/RecentProducts";

function HomePage() {
    return (
        <FullwidthLayout>
            <div className="pure-g sector">
                <div className="pure-u-1">
                    <Banner imgSrc={IntroBanner}>
                        <h1>
                            Make <span className="label">your cleaning</span>{" "}
                            enjoyable with our products
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <ButtonLink
                            variant={ButtonEnum.Purpure}
                            size={SizesEnum.XL}
                            url="/products"
                        >
                            Shop now
                        </ButtonLink>
                    </Banner>
                </div>
            </div>

            <div className="pure-g sector">
                <div className="pure-u-1">
                    <h3>Recent products</h3>
                    <RecentProducts quantity={3} />
                </div>
            </div>

            <div className="pure-g sector">
                <div className="pure-u-1">
                    <h3>Our offers</h3>
                </div>
                <div className="pure-u-1 pure-u-md-1-2">
                    <Banner imgSrc={DisinfectantBanner}>
                        <h4>
                            Disinfectant spray comfort to{" "}
                            <span className="label label--purpure">
                                your home
                            </span>
                        </h4>
                        <p>Home Supplies</p>
                        <ButtonLink
                            variant={ButtonEnum.Primary}
                            size={SizesEnum.S}
                            url="/products"
                        >
                            Shop now
                        </ButtonLink>
                    </Banner>
                </div>
                <div className="pure-u-1 pure-u-md-1-2">
                    <Banner imgSrc={SuppliesBanner}>
                        <h3>
                            <span className="label">Up to 50% off</span>
                        </h3>
                        <p>Home Supplies</p>
                        <ButtonLink
                            variant={ButtonEnum.Purpure}
                            size={SizesEnum.S}
                            url="/products"
                        >
                            Shop now
                        </ButtonLink>
                    </Banner>
                </div>
            </div>

            <div className="pure-g sector">
                <div className="pure-u-1">
                    <h3>Our partners</h3>
                    <PartnersList />
                </div>
            </div>
        </FullwidthLayout>
    );
}

export default HomePage;
