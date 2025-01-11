// import logo_icon from "./assets/logo-png.ico";
// import refimg from "./assets/managment-software.png";
// import Footer from "./Layout/Footer";

// function AcadSync(props) {
//     const date = new Date();
//     const currYear = date.getFullYear();
//     const handleLogin = () => {
//         window.location.href = props.LoginUrl;
//     }

//     const scrollTop = ()=>{
//         window.scrollTo({
//             top:0,
//             behavior:'smooth',
//         });
//     };

//     const AcadSyncDescription = "AcadSync is your all-in-one solution for managing academic activities effortlessly. Whether you're a student juggling multiple tasks or someone striving to stay organized, AcadSync simplifies it all in one intuitive platform.";
//     const AcadSyncDescription1 = "With features tailored for students, AcadSync helps you stay organized, track your academic milestones, and achieve your goals. Accessible from anywhere, it provides a seamless experience with Google OAuth integration for secure and quick access.";

//     return (
//         <>
//             <div>
//                 <div className="px-4 py-5 my-5 text-center">
//                     <img className="d-block mx-auto mb-4 " draggable="false" id="logo_icon" src={logo_icon} />
//                     <h1 className="display-5 fw-bold text-body-emphasis">AcadSync</h1>
//                     <div className="col-lg-6 mx-auto">
//                         <p className="lead mb-4">
//                             {AcadSyncDescription}
//                         </p>
//                         <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
//                             <button
//                                 type="button"
//                                 onClick={handleLogin}
//                                 className="btn btn-primary btn-lg px-4 gap-3 d-flex align-items-center justify-content-center"
//                             ><svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="20"
//                                 height="20"
//                                 fill="currentColor"
//                                 className="bi bi-google me-2"
//                                 viewBox="0 0 16 16"
//                             ><path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
//                                 </svg>Google Login
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="container col-xxl-8 px-4 py-5">
//                     <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
//                         <div className="col-10 col-sm-8 col-lg-6">
//                             <img src={refimg} draggable="false" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
//                         </div>
//                         <div className="col-lg-6">
//                             <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Why AcadSync?</h1>
//                             <p className="lead">{AcadSyncDescription1}</p>
//                             <h5 className="display-8 fw-bold text-body-emphasis lh-1 mb-3">Start your journey with AcadSync today and take control of your academic life!</h5>
//                             <div className="d-grid gap-2 d-md-flex justify-content-md-start">
//                                 <button onClick={scrollTop} type="button" className="btn btn-primary btn-lg px-4 me-md-2" fdprocessedid="sy0c0d">Get Started</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>

//     )
// }


// export default AcadSync;



import React from "react";
import { useInView } from "react-intersection-observer";
import logo_icon from "./assets/logo-png.ico";
import refimg from "./assets/managment-software.png";
import Footer from "./Layout/Footer";


function AcadSync(props) {
    const date = new Date();
    const currYear = date.getFullYear();

    const handleLogin = () => {
        window.location.href = props.LoginUrl;
    };

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const AcadSyncDescription =
        "AcadSync is your all-in-one solution for managing academic activities effortlessly. Whether you're a student juggling multiple tasks or someone striving to stay organized, AcadSync simplifies it all in one intuitive platform.";
    const AcadSyncDescription1 =
        "With features tailored for students, AcadSync helps you stay organized, track your academic milestones, and achieve your goals. Accessible from anywhere, it provides a seamless experience with Google OAuth integration for secure and quick access.";

    const { ref: firstSectionRef, inView: firstSectionInView } = useInView({
        threshold: 0.6,
        triggerOnce: true,
    });

    const { ref: secondSectionRef, inView: secondSectionInView } = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });

    return (
        <>
            <div>
                <div
                    ref={firstSectionRef}
                    className={`container col-xxl-8 px-4 py-5 ${
                        firstSectionInView ? "fade-in" : "fade-out"
                    }`}
                >
                <div className="px-4 py-5 my-5 text-center">
                    <img
                        className="d-block mx-auto mb-4"
                        draggable="false"
                        id="logo_icon"
                        src={logo_icon}
                        alt="AcadSync Logo"
                    />
                    <h1 className="display-5 fw-bold text-body-emphasis">AcadSync</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">{AcadSyncDescription}</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button
                                type="button"
                                onClick={handleLogin}
                                className="btn btn-primary btn-lg px-4 gap-3 d-flex align-items-center justify-content-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-google me-2"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                                </svg>
                                Google Login
                            </button>
                        </div>
                    </div>
                </div>
                </div>

                {/* First Section */}
                <div
                    ref={secondSectionRef}
                    className={`container col-xxl-8 px-4 py-5 ${
                        firstSectionInView ? "fade-in" : "fade-out"
                    }`}
                >
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img
                                src={refimg}
                                draggable="false"
                                className="d-block mx-lg-auto img-fluid"
                                alt="Bootstrap Themes"
                                width="700"
                                height="500"
                                loading="lazy"
                            />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                                Why AcadSync?
                            </h1>
                            <p className="lead">{AcadSyncDescription1}</p>
                            <h5 className="display-8 fw-bold text-body-emphasis lh-1 mb-3">
                                Start your journey with AcadSync today and take control of your
                                academic life!
                            </h5>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button
                                    onClick={scrollTop}
                                    type="button"
                                    className="btn btn-primary btn-lg px-4 me-md-2"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AcadSync;
