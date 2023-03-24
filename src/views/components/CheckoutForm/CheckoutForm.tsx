import "react-app-polyfill/ie11";
import * as Yup from "yup";
import { Formik, Field, Form, FormikHelpers } from "formik";
import "./CheckoutForm.scss";
import Button from "../Button/Button";
import { ButtonEnum, ButtonTypesEnum, SizesEnum } from "src/types/enums";
import { useCart } from "src/views/hooks/useCart";
import { useNavigate } from "react-router-dom";

interface CheckoutFormValues {
    firstName: string;
    phone: string;
    email: string;
    address: string;
}

const CheckoutFormSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    phone: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    address: Yup.string().required("Required"),
});

const CheckoutForm = () => {
    const { cartItems, clearWholeCart } = useCart();
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{
                firstName: "",
                phone: "",
                email: "",
                address: "",
            }}
            validationSchema={CheckoutFormSchema}
            onSubmit={(
                values: CheckoutFormValues,
                { setSubmitting }: FormikHelpers<CheckoutFormValues>
            ) => {
                setTimeout(() => {
                    alert(
                        JSON.stringify(
                            { products: cartItems, contacts: values },
                            null,
                            2
                        )
                    );
                    setSubmitting(false);
                    clearWholeCart();
                    navigate("/thanks");
                }, 500);
            }}
        >
            {({ errors, touched }) => (
                <Form className="checkout-form">
                    <div className="pure-g">
                        <div className="pure-u-1">
                            <div className="checkout-form__input">
                                <label htmlFor="firstName">First name</label>
                                <Field
                                    name="firstName"
                                    className={
                                        errors.firstName && touched.firstName
                                            ? "invalid"
                                            : "valid"
                                    }
                                />
                                {errors.firstName && touched.firstName ? (
                                    <span>{errors.firstName}</span>
                                ) : null}
                            </div>
                        </div>
                        <div className="pure-u-1">
                            <div className="checkout-form__input">
                                <label htmlFor="phone">Phone number</label>
                                <Field
                                    name="phone"
                                    className={
                                        errors.phone && touched.phone
                                            ? "invalid"
                                            : "valid"
                                    }
                                />
                                {errors.phone && touched.phone ? (
                                    <span>{errors.phone}</span>
                                ) : null}
                            </div>
                        </div>
                        <div className="pure-u-1">
                            <div className="checkout-form__input">
                                <label htmlFor="email">Email address</label>
                                <Field
                                    name="email"
                                    type="email"
                                    className={
                                        errors.email && touched.email
                                            ? "invalid"
                                            : "valid"
                                    }
                                />
                                {errors.email && touched.email ? (
                                    <span>{errors.email}</span>
                                ) : null}
                            </div>
                        </div>
                        <div className="pure-u-1">
                            <div className="checkout-form__input">
                                <label htmlFor="address">
                                    Address for delivery
                                </label>
                                <Field
                                    name="address"
                                    className={
                                        errors.address && touched.address
                                            ? "invalid"
                                            : "valid"
                                    }
                                />
                                {errors.address && touched.address ? (
                                    <span>{errors.address}</span>
                                ) : null}
                            </div>
                        </div>
                        <div className="pure-u-1">
                            <Button
                                variant={ButtonEnum.Secondary}
                                size={SizesEnum.XL}
                                type={ButtonTypesEnum.Submit}
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default CheckoutForm;
