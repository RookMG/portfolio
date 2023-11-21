import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Experience from "../components/Experience";
import Award from "../components/Award";
import Certification from "../components/Certification";
import Project from "../components/Project";
import Footer from "../components/Footer";
import Skip from "../components/Skip";
import Main from "../components/Main";

const HomeView = () => {
    return (
        <>
            <Skip />
            <Header />
            <Main>
                <Intro />
                <Experience />
                <Project />
                <Award />
                <Certification />
            </Main>
            <Footer />
        </>
    );
};

export default HomeView;
