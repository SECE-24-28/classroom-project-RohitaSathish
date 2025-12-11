import React from "react";
import { NewsletterContainer, EmailBox, EmailInput, EmailBtn } from "./NewsletterStyle";

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <h1>Subscribe to our newsletter</h1>
      <p>Lorem Ipsum is simply dummy text of the printing.</p>

      <EmailBox>
        <EmailInput placeholder="Email Address" />
        <EmailBtn>Sign in</EmailBtn>
      </EmailBox>
    </NewsletterContainer>
  );
};

export default Newsletter;
