import React from "react";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";
import CardWithImage from "../../components/Cards/CardWithImage";
import Image from '../../utils/images.js'

const CommunityPage = () => {
  return (
    <>
        <DashboardNavbar />
            <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <CardWithImage cardImage={Image.learningImage}
                    cardTitle="Community"
                    cardText=" Empowering Experienced semi-retired or retired
                    Professionals with Fulfilling Opportunities – CXOs,
                    HR Professionals; Finance Professionals, Sales &
                    Marketing Professionals, Tech Experts, and Board"
                    carTextClassName="role-selection-description"
                    cardParaTestId="professionalTestId"
                    cardButtonTestId="cardButton" 
                    role="learningAndCommunity"
                    firstButton_Name="Join Community"
                    secondButton_Name="Share"
                    firstCardColor="brand-color"
                    secondCardColor="outline-secondary"/>
                </div>
                <div class="col">
                <CardWithImage cardImage={Image.learningTwo}
                    cardTitle="Community"
                    cardText=" Empowering Experienced semi-retired or retired
                    Professionals with Fulfilling Opportunities – CXOs,
                    HR Professionals; Finance Professionals, Sales &
                    Marketing Professionals, Tech Experts, and Board"
                    carTextClassName="role-selection-description"
                    cardParaTestId="professionalTestId"
                    cardButtonTestId="cardButton" 
                    role="learningAndCommunity"
                    firstButton_Name="Join Community"
                    secondButton_Name="Share"
                    firstCardColor="brand-color"
                    secondCardColor="outline-secondary"/>
                </div>
                <div class="col">
                <CardWithImage cardImage={Image.learningThree}
                    cardTitle="Community"
                    cardText=" Empowering Experienced semi-retired or retired
                    Professionals with Fulfilling Opportunities – CXOs,
                    HR Professionals; Finance Professionals, Sales &
                    Marketing Professionals, Tech Experts, and Board"
                    carTextClassName="role-selection-description"
                    cardParaTestId="professionalTestId"
                    cardButtonTestId="cardButton" 
                    role="learningAndCommunity"
                    firstButton_Name="Join Community"
                    secondButton_Name="Share"
                    firstCardColor="brand-color"
                    secondCardColor="outline-secondary"
                    />

                </div>
            </div>
            </div>
    </>
  )
}

export default CommunityPage