import React, { useState } from "react";
import images from "../../constants/images";
import ButtonFilled from "../../components/Button/ButtonFilled";
import GreenButton from "../../components/Button/GreenButton";
import NavBar from "../../components/Navbar";
import HeadingLine from "../../components/HeadingLine";
import FormGroupAuth from "../../components/FormInputAuth";
import EditIcon from "../../assets/images/editIcon.svg";
import Footer from "../../components/Footer";
import ProfileModal from "../../components/Modal/profileModal";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import SubscriptionModal from "../../components/Modal/subscriptionModal";
import PaymentModal from "../../components/Modal/PaymentModal";
import PaymentSuccessfulModal from "../../components/Modal/PaymentSuccessfulModal";
import Loader from "../../components/Modal/loader";
import {
  BsPlusLg,
  BsHeartFill,
  BsHeart,
  BsFillStarFill,
  BsStarFill,
  BsStar,
  BsChevronUp,
  BsChevronDown,
  BsCaretUpFill,
  BsCaretDownFill,
} from "react-icons/bs";
import { TbArrowBack } from "react-icons/tb";

const ProfileScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [library, setLibrary] = useState(false);
  const [percent, setPercent] = useState(25);
  const [editAbout, setEditAbout] = useState(false);
  const [editBilling, setEditBilling] = useState(false);
  const [editSubscription, setEditSubscription] = useState(false);
  const [showSubPackageModal, setShowSubPackageModal] = useState(false);
  const [showPayModal, setShowPayModal] = useState(false);
  const [showPaySuccessModal, setShowPaySuccessModal] = useState(false);

  const [loading, setLoading] = useState(false);
  const [aboutInfo, setAboutInfo] = useState({
    firstName: "Alex",
    lastName: "Gree",
    email: "alexgree@gmail.com",
    password: "1234567",
  });
  const [billingInfo, setBillingInfo] = useState({
    cardName: "Alex Gree",
    cardNumber: "4242424242424242",
    expirationDate: "2022-11-14",
    securityCode: "123",
    country: "USA",
    state: "California",
    postalCode: "12345",
  });
  const [subscriptionInfo, setSubscriptionInfo] = useState({
    startDate: "2022-11-14",
    nextBillingDate: "2022-12-14",
    packageType: "Monthly",
    subscriptionStatus: "active",
  });

  return (
    <>
      {loading && <Loader />}
      <SubscriptionModal
        state={showSubPackageModal}
        setState={setShowSubPackageModal}
        payNowFunction={() => {
          setShowSubPackageModal(false);
          setShowPayModal(true);
        }}
      />
      <PaymentModal
        state={showPayModal}
        setState={setShowPayModal}
        payNowFunc={() => {
          setShowPayModal(false);
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setShowPaySuccessModal(true);
          }, 2000);
        }}
      />
      <PaymentSuccessfulModal
        state={showPaySuccessModal}
        setState={setShowPaySuccessModal}
      />
      <NavBar />
      <section className="profile-screen">
        <div className="container-xl ps-container ">
          <div className="row ps-row ">
            <div className="ps-top col-12">
              <div className="ps-top-imginfo">
                <div className="ps-top-image">
                  <img src={images.avatarLeopard} />
                </div>
                <div className="ps-top-info">
                  <h3 className="ps-top-heading">Alex Gree</h3>
                  <p className="ps-top-subscription">
                    Monthly Package <span>Activated</span>
                  </p>
                  {/* <p className="ps-library">Library : </p> */}
                </div>
              </div>
              <div className="ps-topright">
                <div className="profile-bloom-check">
                  <h4>Bloom Check</h4>
                  <div className="pbc-container">
                    <div class="pbc-img">
                      <img src={images.bloomChu} />
                    </div>
                    <p>{percent}%</p>
                    <div className="pbc-icons">
                      <AiFillCaretUp
                        size={25}
                        onClick={() => percent < 100 && setPercent(percent + 1)}
                      />
                      <AiFillCaretDown
                        size={25}
                        onClick={() => percent > 1 && setPercent(percent - 1)}
                      />
                    </div>
                  </div>
                </div>
                {(editAbout || editBilling || editSubscription) && (
                  <div className="ps-top-buttons">
                    <div
                      className="ps-top-btn"
                      onClick={() => setShowModal(true)}
                    >
                      <span className="ps-btn-outline">
                        <ButtonFilled
                          // bgGradient={"yes"}
                          text="Save"
                          padXResponsive
                          outline
                        />
                      </span>
                    </div>
                    <ButtonFilled
                      padXResponsive
                      bgGradient={"yes"}
                      text="Cancel"
                    />
                  </div>
                )}
                {library && (
                  <div className="ps-library-items">
                    <div className="ps-library-item">
                      <span>
                        <BsPlusLg size={17} color="rgba(27, 91, 47, 1)" />
                      </span>
                      <p>Tools To Try</p>
                    </div>
                    <div className="ps-library-item">
                      <span>
                        <TbArrowBack size={22} color="rgba(27, 91, 47, 1)" />
                      </span>
                      <p>Recent Content</p>
                    </div>
                    <div className="ps-library-item">
                      <span>
                        <BsHeart size={18} color="rgba(27, 91, 47, 1)" />
                      </span>
                      <p>Favorites</p>
                    </div>
                    <div className="ps-library-item">
                      <span>
                        <BsStar size={20} color="rgba(27, 91, 47, 1)" />
                      </span>
                      <p>Top Tools</p>
                    </div>
                    <div className="ps-library-item">
                      <span>
                        <img src={images.spiral} />
                      </span>
                      <p>Your Resonance Finder Result</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 ps-aboutForm">
              <div className="ps-heading">
                <HeadingLine text="About" />
              </div>

              <div className="ps-form">
                <div
                  className="ps-editPassword"
                  onClick={() => setEditAbout(!editAbout)}
                >
                  <img src={EditIcon} />
                </div>
                <FormGroupAuth
                  label="First Name"
                  value={aboutInfo.firstName}
                  setValue={(data) =>
                    setAboutInfo({ ...aboutInfo, firstName: data })
                  }
                  disabled={!editAbout}
                />
                <FormGroupAuth
                  label="Last Name"
                  value={aboutInfo.lastName}
                  disabled={!editAbout}
                  setValue={(data) =>
                    setAboutInfo({ ...aboutInfo, lastName: data })
                  }
                />
                <FormGroupAuth
                  label="Email Address"
                  value={aboutInfo.email}
                  disabled={!editAbout}
                  setValue={(data) =>
                    setAboutInfo({ ...aboutInfo, email: data })
                  }
                />
                <div className="ps-inputIcon">
                  <FormGroupAuth
                    label="Password"
                    inputType="password"
                    // showPasswordIcon={editAbout ? true : false}
                    value={aboutInfo.password}
                    disabled={true}
                    // setValue={(data) =>
                    //   setAboutInfo({ ...aboutInfo, password: data })
                    // }
                  />
                  <Link to="/updatepassword">
                    <span>
                      <BiEditAlt color={"white"} size={18} />
                    </span>
                  </Link>
                </div>
                {/* <Link to="/updatepassword"> */}
                {/* <div
                    className="ps-editPassword"
                    onClick={() => setEdit(!edit)}
                  >
                    <img src={EditIcon} />
                  </div> */}
                {/* </Link> */}
                {/* </div> */}
              </div>
            </div>
            <div className="col-md-6 ps-aboutForm">
              <div className="ps-heading">
                <HeadingLine text="Library" />
              </div>
              <div className="ps-library-items">
                <Link to="/toolstotry">
                  <div className="ps-library-item">
                    <span>
                      <BsPlusLg size={17} color="rgba(27, 91, 47, 1)" />
                    </span>
                    <p>Tools To Try</p>
                  </div>
                </Link>
                <Link to="/recentcontent">
                  <div className="ps-library-item">
                    <span>
                      <TbArrowBack size={22} color="rgba(27, 91, 47, 1)" />
                    </span>
                    <p>Recent Content</p>
                  </div>
                </Link>
                <Link to="/favorites">
                  <div className="ps-library-item">
                    <span>
                      <BsHeart size={18} color="rgba(27, 91, 47, 1)" />
                    </span>
                    <p>Favorites</p>
                  </div>
                </Link>
                <Link to="/toptools">
                  <div className="ps-library-item">
                    <span>
                      <BsStar size={20} color="rgba(27, 91, 47, 1)" />
                    </span>
                    <p>Top Tools</p>
                  </div>
                </Link>
                <Link to="/resonanceresult">
                  <div className="ps-library-item">
                    <span>
                      <img src={images.spiral} />
                    </span>
                    <p>Your Resonance Finder Result</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-6 ps-billingForm">
              <div className="ps-heading">
                <HeadingLine text="Billing Info" />
              </div>
              <div className="ps-form">
                <div
                  className="ps-editPassword billing-edit"
                  onClick={() => setEditBilling(!editBilling)}
                >
                  <img src={EditIcon} />
                </div>
                <FormGroupAuth
                  label="Full Name On Card"
                  inputType="text"
                  value={billingInfo.cardName}
                  disabled={!editBilling}
                  setValue={(data) =>
                    setBillingInfo({ ...billingInfo, cardName: data })
                  }
                />
                <FormGroupAuth
                  label="Card Number"
                  inputType="text"
                  value={billingInfo.cardNumber}
                  disabled={!editBilling}
                  setValue={(data) =>
                    setBillingInfo({ ...billingInfo, cardNumber: data })
                  }
                />
                <FormGroupAuth
                  label="Expiration Date"
                  inputType="date"
                  value={billingInfo.expirationDate}
                  disabled={!editBilling}
                  setValue={(data) =>
                    setBillingInfo({ ...billingInfo, expirationDate: data })
                  }
                />
                <FormGroupAuth
                  label="Security Code"
                  inputType="text"
                  value={billingInfo.securityCode}
                  disabled={!editBilling}
                  setValue={(data) =>
                    setBillingInfo({ ...billingInfo, securityCode: data })
                  }
                />
                <FormGroupAuth
                  label="Country"
                  options={["USA", "UK", "Pakistan"]}
                  isSelectInput
                  value={billingInfo.country}
                  disabled={!editBilling}
                  setValue={(data) =>
                    setBillingInfo({ ...billingInfo, country: data })
                  }
                />
                <FormGroupAuth
                  label="State"
                  options={["Florida", "Texas", "California"]}
                  isSelectInput
                  value={billingInfo.state}
                  disabled={!editBilling}
                  setValue={(data) =>
                    setBillingInfo({ ...billingInfo, state: data })
                  }
                />
                <FormGroupAuth
                  label="Postal Code"
                  inputType="text"
                  value={billingInfo.postalCode}
                  disabled={!editBilling}
                  setValue={(data) =>
                    setBillingInfo({ ...billingInfo, postalCode: data })
                  }
                />
              </div>
            </div>
            <div className="col-md-6 ps-subscriptionForm">
              <div className="ps-heading">
                <HeadingLine text="Subscription Info" />
              </div>
              <div className="ps-form">
                <div
                  className="ps-editPassword "
                  onClick={() => setEditSubscription(!editSubscription)}
                >
                  <img src={EditIcon} />
                </div>
                <FormGroupAuth
                  label="Start Date"
                  inputType="date"
                  disabled={!editSubscription}
                  value={subscriptionInfo.startDate}
                  setValue={(data) =>
                    setSubscriptionInfo({
                      ...subscriptionInfo,
                      startDate: data,
                    })
                  }
                />
                <FormGroupAuth
                  label="Next Billing Date"
                  inputType="date"
                  disabled={!editSubscription}
                  value={subscriptionInfo.nextBillingDate}
                  setValue={(data) =>
                    setSubscriptionInfo({
                      ...subscriptionInfo,
                      nextBillingDate: data,
                    })
                  }
                />
                <div className="ps-inputIcon">
                  <FormGroupAuth
                    label="Package Select"
                    // options={["Monthly", "Yearly"]}
                    // isSelectInput
                    disabled={true}
                    value={subscriptionInfo.packageType}
                    // setValue={(data) =>
                    //   setSubscriptionInfo({
                    //     ...subscriptionInfo,
                    //     packageType: data,
                    //   })
                    // }
                  />
                  <span
                    onClick={() => {
                      setShowSubPackageModal(true);
                    }}
                  >
                    <BiEditAlt color={"white"} size={18} />
                  </span>
                </div>
                {/* <FormGroupAuth
                  label="Subsciption Status"
                  options={["Active", "inactive"]}
                  isSelectInput
                  disabled={!editSubscription}
                  value={subscriptionInfo.subscriptionStatus}
                  setValue={(data) =>
                    setSubscriptionInfo({
                      ...subscriptionInfo,
                      subscriptionStatus: data,
                    })
                  }
                /> */}
                <Link to="/cancelsubscription">
                  <div className="sub-btn">
                    <GreenButton text="Cancel Subscription" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {showModal && (
        <ProfileModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default ProfileScreen;
