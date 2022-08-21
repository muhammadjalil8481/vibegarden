import React from "react";
import ContainerSection from "../Container";
import images from "../../constants/images";
import appleIcon from "../../assets/images/apple-icon.svg";
import ButtonFilled from "../Button/ButtonFilled";

const Footer = () => {
  return (
    // <footer class="footer-04">
    //   <div class="container">
    //     <div class="row">
    //       <div class="col-md-6 col-lg-3 mb-md-0 mb-4">
    //         <h4 class="footer-heading">
    //           <a href="#" class="logo">
    //             Colorlib
    //           </a>
    //         </h4>
    //         <p>
    //           A small river named Duden flows by their place and supplies it
    //           with the necessary regelialia.
    //         </p>
    //         <a href="#">
    //           read more <span class="ion-ios-arrow-round-forward"></span>
    //         </a>
    //       </div>
    //       <div class="col-md-6 col-lg-3 mb-md-0 mb-4">
    //         <h4 class="footer-heading">Categories</h4>
    //         <ul class="list-unstyled">
    //           <li>
    //             <a href="#" class="py-1 d-block">
    //               Buy &amp; Sell
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" class="py-1 d-block">
    //               Merchant
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" class="py-1 d-block">
    //               Giving back
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" class="py-1 d-block">
    //               Help &amp; Support
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div class="col-md-6 col-lg-3 mb-md-0 mb-4">
    //         <h4 class="footer-heading">Categories</h4>
    //         <ul class="list-unstyled">
    //           <li>
    //             <a href="#" class="py-1 d-block">
    //               Buy &amp; Sell
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" class="py-1 d-block">
    //               Merchant
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" class="py-1 d-block">
    //               Giving back
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" class="py-1 d-block">
    //               Help &amp; Support
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div class="col-md-6 col-lg-3 mb-md-0 mb-4">
    //         <h4 class="footer-heading">Subcribe</h4>
    //         <form action="#" class="subscribe-form">
    //           <div class="form-group d-flex">
    //             <input
    //               type="text"
    //               class="form-control rounded-left"
    //               placeholder="Enter email address"
    //             />
    //             <button type="submit" class="form-control submit rounded-right">
    //               <span class="sr-only">Submit</span>
    //               <i class="ion-ios-send"></i>
    //             </button>
    //           </div>
    //         </form>
    //         <h4 class="footer-heading mt-5">Follow us</h4>
    //         <ul class="ftco-footer-social p-0">
    //           <li class="ftco-animate">
    //             <a
    //               href="#"
    //               data-toggle="tooltip"
    //               data-placement="top"
    //               title=""
    //               data-original-title="Twitter"
    //             >
    //               <span class="ion-logo-twitter"></span>
    //             </a>
    //           </li>
    //           <li class="ftco-animate">
    //             <a
    //               href="#"
    //               data-toggle="tooltip"
    //               data-placement="top"
    //               title=""
    //               data-original-title="Facebook"
    //             >
    //               <span class="ion-logo-facebook"></span>
    //             </a>
    //           </li>
    //           <li class="ftco-animate">
    //             <a
    //               href="#"
    //               data-toggle="tooltip"
    //               data-placement="top"
    //               title=""
    //               data-original-title="Instagram"
    //             >
    //               <span class="ion-logo-instagram"></span>
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="w-100 mt-5 border-top py-5">
    //     <div class="container">
    //       <div class="row">
    //         <div class="col-md-6 col-lg-8">
    //           <p class="copyright">
    //             Copyright ©
    //             <script>document.write(new Date().getFullYear());</script>2022
    //             All rights reserved | This template is made with{" "}
    //             <i class="ion-ios-heart" aria-hidden="true"></i> by{" "}
    //             <a href="https://colorlib.com" target="_blank">
    //               Colorlib.com
    //             </a>
    //           </p>
    //         </div>
    //         <div class="col-md-6 col-lg-4 text-md-right">
    //           <p class="mb-0 list-unstyled">
    //             <a class="mr-md-3" href="#">
    //               Terms
    //             </a>
    //             <a class="mr-md-3" href="#">
    //               Privacy
    //             </a>
    //             <a class="mr-md-3" href="#">
    //               Compliances
    //             </a>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="footer">
      <div class="container footer-container">
        <div class="row footer-row">
          <div class="col-md-4 col-lg-3 mb-md-0 mb-4 footer-col footer-col-1">
            <div className="footer-logo">
              <img src={images.logo2} />
            </div>
            <p className="footer-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="footer-button">
              <img src={appleIcon} />
              Download
            </button>
            <button className="footer-button">
              <img src={appleIcon} />
              Download
            </button>
          </div>
          <div class="col-md-4 col-sm-3 col-lg-3 mb-md-0 mb-4 footer-links-col">
            <h4 class="footer-list-heading">Quick Links</h4>
            <ul class="footer-list">
              <li>
                <a href="#" class="py-1 d-block">
                  Groundwork
                </a>
              </li>
              <li>
                <a href="#" class="py-1 d-block">
                  Tools
                </a>
              </li>
              <li>
                <a href="#" class="py-1 d-block">
                  Tools
                </a>
              </li>
              <li>
                <a href="#" class="py-1 d-block">
                  Tools
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4 col-sm-3 col-lg-3 mb-md-0 mb-4 footer-links-col">
            <h4 class="footer-list-heading">Quick Links</h4>
            <ul class="footer-list">
              <li>
                <a href="#" class="py-1 d-block">
                  Groundwork
                </a>
              </li>
              <li>
                <a href="#" class="py-1 d-block">
                  Tools
                </a>
              </li>
              <li>
                <a href="#" class="py-1 d-block">
                  Tools
                </a>
              </li>
              <li>
                <a href="#" class="py-1 d-block">
                  Tools
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4 col-lg-3 mb-md-0 mb-4 footer-form-col">
            <h4 class="footer-form-heading">News Letter</h4>
            <p className="footer-form-para">
              Get Latest Update Through Your Email address
            </p>
            <form action="#" className="subscribe-form footer-form">
              <div class="form-group d-flex footer-form-group">
                <input
                  type="text"
                  class="form-control rounded-left"
                  placeholder="Enter email address"
                />
                <ButtonFilled
                  bgGradient={"yes"}
                  text="Subscribe"
                  paddingX={"10px"}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="row footer-second-row">
          <div className="col-md-6 footer-payments">
            <img src={images.paymentOptions} />
          </div>
          <div className="col-md-6 footer-links">
            <a href="#">About Us</a>
            <a href="#">About Us</a>
            <a href="#">About Us</a>
          </div>
        </div>
        <div className="footer-line-break"></div>
        <div className="footer-copyright">
          <p>Copy Rights 2022 Reserved - Vibe Garden</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
