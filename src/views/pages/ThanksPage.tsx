import { ButtonEnum, SizesEnum } from "src/types/enums";
import ButtonLink from "../components/ButtonLink/ButtonLink";
import FullwidthLayout from "../layouts/FullwidthLayout";

function ThanksPage() {
    return (
        <FullwidthLayout>
            <h1>Thank you for your order!</h1>
            <ButtonLink
                variant={ButtonEnum.Secondary}
                size={SizesEnum.XL}
                url="/"
            >
                Go to home page
            </ButtonLink>
        </FullwidthLayout>
    );
}

export default ThanksPage;
