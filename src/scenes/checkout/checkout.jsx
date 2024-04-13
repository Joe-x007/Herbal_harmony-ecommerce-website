import React from 'react';
import { useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { shades } from "../../theme";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51ObAQBEeTxiJJNKXusYrnVNn9JWRcgWEloAigKaGOPrEKeTEutBdtoVHx3iOLXCP8Toyp7r1l7OitTzfukn1eHlE00oIAapPs9");

const Checkout = () => {
    const cart = useSelector((state) => state.cart.cart);

    const handleFormSubmit = async (values, actions) => {
        // Proceed directly to make payment
        makePayment(values);
        actions.setTouched({});
    };

    async function makePayment(values) {
        const stripe = await stripePromise;
        const requestBody = {
            userName: [values.firstName, values.lastName].join(" "),
            email: values.email,
            products: cart.map(({ id, count }) => ({
                id,
                count,
            })),
        };

        const response = await fetch("http://localhost:1337/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody),
        });
        const session = await response.json();
        await stripe.redirectToCheckout({
            sessionId: session.id,
        });
    }

    return (
        // Wrap the content with an outer Box to act as a flex container
        <Box display="flex" flexDirection="column" minHeight="85vh">
            <Box width="80%" m="100px auto" flexGrow={1}>
                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleBlur,
                          handleChange,
                          handleSubmit,
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <Payment
                                values={values}
                                errors={errors}
                                touched={touched}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                            />
                            {errors.phoneNumber && touched.phoneNumber && <div>{errors.phoneNumber}</div>}
                            <Button
                                fullWidth
                                type="submit"
                                color="primary"
                                variant="contained"
                                sx={{
                                    backgroundColor: shades.cardinal_red[500],
                                    boxShadow: "none",
                                    color: "white",
                                    borderRadius: 0,
                                    padding: "15px 40px",
                                }}
                            >
                                Place Order
                            </Button>
                        </form>
                    )}
                </Formik>
            </Box>
            {/* Footer goes here */}
            {/* Ensure your Footer component has appropriate styles */}
        </Box>
    );
};

const initialValues = {
    email: "",
    phoneNumber: "",
};

const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: yup.string().required("Phone number is required"),
});

export default Checkout;

