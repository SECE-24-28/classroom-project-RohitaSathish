import React from "react";
import { FeatureWrapper, FeatureItem, Divider } from "./feature-style";

import { FiTruck, FiCreditCard, FiLock, FiPhoneCall } from "react-icons/fi";

const FeatureBox = () => {
  return (
    <FeatureWrapper>
      
      <FeatureItem>
        <FiTruck />
        <h3>Free Shipping</h3>
        <p>Order above $200</p>
      </FeatureItem>

      <Divider />

      <FeatureItem>
        <FiCreditCard />
        <h3>Money-back</h3>
        <p>30 days guarantee</p>
      </FeatureItem>

      <Divider />

      <FeatureItem>
        <FiLock />
        <h3>Secure Payments</h3>
        <p>Secured by Stripe</p>
      </FeatureItem>

      <Divider />

      <FeatureItem>
        <FiPhoneCall />
        <h3>24/7 Support</h3>
        <p>Phone and Email support</p>
      </FeatureItem>

    </FeatureWrapper>
  );
};

export default FeatureBox;
