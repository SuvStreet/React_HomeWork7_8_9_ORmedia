import React from "react";

import ItemDetails from "../../item-details";
import Record from "../../record";
import { withService } from "../../../hocs";

const heavyDetails = ({ selectedItem, service }) => {
    const { getHeavy, getHeavyImage } = service;
    return (
        <ItemDetails
            selectedItem={selectedItem}
            getData={getHeavy}
            getImage={getHeavyImage}
        >
            <Record label="Damage" field="damage" />
            <Record label="Breaking Through" field="breakingThrough" />
            <Record label="Weight" field="weight" />
            <Record label="Strength" field="strength" />
            <Record label="Body Armor" field="bodyArmor" />
            <Record label="Tower Armor" field="towerArmor" />
        </ItemDetails>
    )
};

const HeavyDetails = withService(heavyDetails);

const mediumDetails = ({ selectedItem, service }) => {
    const { getMedium, getMediumImage } = service;
    return (
        <ItemDetails
            selectedItem={selectedItem}
            getData={getMedium}
            getImage={getMediumImage}
        >
            <Record label="Damage" field="damage" />
            <Record label="Breaking Through" field="breakingThrough" />
            <Record label="Maximum Speed" field="maximumSpeed" />
            <Record label="Specific Power" field="specificPower" />
            <Record label="Tower Turning Speed" field="towerTurningSpeed" />
        </ItemDetails>
    )
};

const MediumDetails = withService(mediumDetails);

const lightDetails = ({ selectedItem, service }) => {
    const { getLight, getLightImage } = service;
    console.log(service);
    return (
        <ItemDetails
            selectedItem={selectedItem}
            getData={getLight}
            getImage={getLightImage}
        >
            <Record label="Weight" field="weight" />
            <Record label="Overview" field="overview" />
            <Record label="Maximum Speed" field="maximumSpeed" />
            <Record label="Specific Power" field="specificPower" />
            <Record label="Engine Power" field="enginePower" />
        </ItemDetails>
    )
};

const LightDetails = withService(lightDetails);

const ptSauDetails = ({ selectedItem, service }) => {
    const { getPtSau, getPtSauImage } = service;
    return (
        <ItemDetails
            selectedItem={selectedItem}
            getData={getPtSau}
            getImage={getPtSauImage}
        >
            <Record label="Ammunition" field="ammunition" />
            <Record label="Attachment Time" field="attachmentTime" />
            <Record label="Breaking Through" field="breakingThrough" />
            <Record label="Damage" field="damage" />
        </ItemDetails>
    )
};

const PtSauDetails = withService(ptSauDetails);

const sauDetails = ({ selectedItem, service }) => {
    const { getSau, getSauImage } = service;
    return (
        <ItemDetails
            selectedItem={selectedItem}
            getData={getSau}
            getImage={getSauImage}
        >
            <Record label="Ammunition" field="ammunition" />
            <Record label="Breaking Through" field="breakingThrough" />
            <Record label="Communication Range" field="communicationRange" />
            <Record label="Damage" field="damage" />
        </ItemDetails>
    )
};

const SauDetails = withService(sauDetails);

export { HeavyDetails, MediumDetails, LightDetails, PtSauDetails, SauDetails };
