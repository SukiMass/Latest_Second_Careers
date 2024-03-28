import React from "react";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import CardWithImage from "../../components/Cards/CardWithImage";
import { FaDownload } from "react-icons/fa";

import Image from '../../utils/images.js'


const LearningPage = () => {

    return (
        <>
            <DashboardNavbar />
            <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <CardWithImage cardImage={Image.learningImage}
                    cardTitle="Learning"
                    cardText=" Empowering Experienced semi-retired or retired
                    Professionals with Fulfilling Opportunities – CXOs,
                    HR Professionals; Finance Professionals, Sales &
                    Marketing Professionals, Tech Experts, and Board"
                    carTextClassName="role-selection-description"
                    cardParaTestId="professionalTestId"
                    cardButtonTestId="cardButton" 
                    role="learningAndCommunity"
                    firstButton_Name="Download"
                    secondButton_Name="Learn"
                    icon= {<FaDownload className="me-2"/>}
                    firstCardColor="outline-secondary"
                    secondCardColor="brand-color"
                    />
                </div>
                <div className="col">
                <CardWithImage cardImage={Image.learningTwo}
                    cardTitle="Learning"
                    cardText=" Empowering Experienced semi-retired or retired
                    Professionals with Fulfilling Opportunities – CXOs,
                    HR Professionals; Finance Professionals, Sales &
                    Marketing Professionals, Tech Experts, and Board"
                    carTextClassName="role-selection-description"
                    cardParaTestId="professionalTestId"
                    cardButtonTestId="cardButton" 
                    role="learningAndCommunity"
                    firstButton_Name="Download"
                    secondButton_Name="Learn"
                    icon= {<FaDownload className="me-2"/>}
                    firstCardColor="outline-secondary"
                    secondCardColor="brand-color"
                    />

                </div>
                <div className="col">
                <CardWithImage cardImage={Image.learningThree}
                    cardTitle="Learning"
                    cardText=" Empowering Experienced semi-retired or retired
                    Professionals with Fulfilling Opportunities – CXOs,
                    HR Professionals; Finance Professionals, Sales &
                    Marketing Professionals, Tech Experts, and Board"
                    carTextClassName="role-selection-description"
                    cardParaTestId="professionalTestId"
                    cardButtonTestId="cardButton" 
                    role="learningAndCommunity"
                    firstButton_Name="Download"
                    secondButton_Name="Learn"
                    icon= {<FaDownload className="me-2"/>}
                    firstCardColor="outline-secondary"
                    secondCardColor="brand-color"/>

                </div>
            </div>
            </div>
        </>
    )
}

export default LearningPage;