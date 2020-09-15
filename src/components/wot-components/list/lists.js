import ItemList from "../../item-list";
import { withData, withChildFunction } from "../../../hocs";
import TankopediaService from "../../../services/tankopedia-service";

const { getAllHeavy, getAllMedium, getAllLight, getAllPtSau, getAllSau } = new TankopediaService();

const renderNameHeavy = (item) => `${item.name}`;/*  | level X */
const renderNameMedium = (item) => `${item.name}`;/*  | level X */
const renderNameLights = (item) => `${item.name}`; /* ${item.level}  |*/
const renderNamePtSau = (item) => `${item.name}`;
const renderNameSau = (item) => `${item.name}`;

const HeavyList = withData(
    withChildFunction(ItemList, renderNameHeavy),
    getAllHeavy
);

const MediumList = withData(
    withChildFunction(ItemList, renderNameMedium),
    getAllMedium
);

const LightList = withData(
    withChildFunction(ItemList, renderNameLights),
    getAllLight
);

const PtSauList = withData(
    withChildFunction(ItemList, renderNamePtSau),
    getAllPtSau
);

const SauList = withData(
    withChildFunction(ItemList, renderNameSau),
    getAllSau
);

export { HeavyList, MediumList, LightList, PtSauList, SauList };
