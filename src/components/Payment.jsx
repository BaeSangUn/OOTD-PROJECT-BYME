import React from "react";
import { WindowMockup } from "react-daisyui";

const Payment = (args) => {
  return (
    <>
      <WindowMockup {...args}>
        <div className="flex justify-center px-4 py-16 w-96">Hello!</div>
      </WindowMockup>
    </>
  );
};

export default Payment;
