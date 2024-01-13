import React from "react";
import { FaPaypal  } from 'react-icons/fa'; 

function Settings() {
  return (
    <main className="sMain">
        <h2 className="account">Account</h2>
        <hr />

        <section className="membership">
            <div className="titleSection">
                <h5>MEMBERSHIP & BILLING</h5>
                <button type="button" className="cancel">Cancel Membership</button>
            </div>

            <div className="sezione">
                <div className="campi">
                    <p><b>testemail@gmail.com</b></p>
                    <a href="#">Change account email</a>
                </div>
                <div className="campi">
                    <p className="subSection">Password:*****</p>
                    <a href="#">Change password</a>
                </div>
                <div className="campi">
                    <p className="subSection">Phone:123 123 4567</p>
                    <a href="#">Change phone number</a>
                </div>
                
                <hr />

                <div className="campi">
                    <span><FaPaypal /><b>&nbsp; testemail@gmail.com</b></span>
                    <a href="#">Update payment info</a>
                </div>
                <div className="billingLink">
                    <a href="#">Billing details</a>
                </div>

                <hr />

                <div className="billingLink">
                    <a href="#">Redeem gift card or promo code</a>
                </div>
                <div className="billingLink">
                    <a href="#">Where to buy gift cards</a>
                </div>

                <hr />
            </div>
        </section>

        <section className="membership">
            <div className="titleSection">
            <h5>PLAN DETAILS</h5>
            </div>

            <div className="sezione">
                <div className="campi">
                    <p><b>Premium ULTRA HD</b></p>
                    <a href="#">Change plan</a>
                </div>
                <hr />
            </div>
        </section>

        <section className="membership">
            <div className="titleSection">
                <h5>SETTINGS</h5>
            </div>

            <div className="sezione">
                <div className="campi">
                    <a href="#">Parental controls</a>
                </div>
                <div className="campi">
                    <a href="#">Test participation</a>
                </div>
                <div className="campi">
                    <a href="#">Manage download devices</a>
                </div>
                <div className="campi">
                    <a href="#">Activate a device</a>
                </div>
                <div className="campi">
                    <a href="#">Recent device streaming activity</a>
                </div>
                <div className="campi">
                    <a href="#">Sign out of all devices</a>
                </div>
                <hr />
            </div>

            </section>

            <section className="membership">
            <div className="titleSection">
                <h5>MY PROFILE</h5>
            </div>

            <div className="sezione">

                <div className="campiUser">
                    <div className="user">
                        <img src="https://i1.sndcdn.com/artworks-4OjnhFcpDrq2sYlZ-upTzRw-t500x500.jpg" alt="" />
                        <p>Slay Capy</p>
                    </div>
                    <a href="#">Parental controls</a>
                </div>

                <div className="row mt-3 g-4">
                    <div className="col-4">
                        <a href="#">Language</a>
                    </div>
                    <div className="col-4">
                        <a href="#">Viewing activity</a>
                    </div>
                </div>
                
                <div className="row g-4">
                    <div className="col-4">
                        <a href="#">Payback settings</a>
                    </div>
                    <div className="col-4">
                        <a href="#">Ratings</a>
                    </div>
                </div>

                <div className="row g-4">
                    <div className="col-4">
                        <a href="#">Subtle appearance</a>
                    </div>
                </div>
                </div>
            </section>
        </main>
      );
    }

export default Settings;