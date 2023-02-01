/* eslint-disable jsx-a11y/anchor-is-valid */

import "./Form.scss";
import SubmitButton from "./SubmitButton";
import img from "./img/payment-methods-grey.png";

const Form = (props) => {
  return (
    <div id="scrollTo" className="form_wraper">
      <h2 className="form_title"> Lorem ipsum </h2>
      <form className="form">
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" type="text" placeholder="e.g. John" />
        <label htmlFor="secondName">Last Name</label>
        <input id="secondName" type="text" placeholder="e.g. Lander" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="e.g. name@gmail.com" />
        <label htmlFor="phoneNumber">Phone number</label>
        <input id="phoneNumber" type="text" placeholder="+639145789873" />
        <SubmitButton type="submit">submit</SubmitButton>
      </form>
      <div className="wraper-castom-checkbox">
        <input className="castom-checkbox" id="checkbox" type="checkbox" />
        <label htmlFor="checkbox"></label>
        <p className="text-checkbox">
          I agree to the
          <a href="#"> Privacy Policy, Terms & Conditions</a> <br />
          and to receive marketing material
        </p>
        
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu tortor
        orci.
      </p>
      <div className="container-payment-methods">
        <img src={img} alt="payment methods" />
      </div>
    </div>
  );
};

export default Form;
