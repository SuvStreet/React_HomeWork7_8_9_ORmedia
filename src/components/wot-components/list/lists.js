import ItemList from "../../item-list";
import { withData, withChildFunction } from "../../../hocs";
import TankopediaService from "../../../services/tankopedia-service";

const { getAllHeavy, getAllMedium, getAllLight } = new TankopediaService();

const renderNameHeavy = (item) => `${item.name}`;
const renderNameMedium = (item) => `${item.name}`;
const renderNameLights = (item) => `${item.name}`;

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

export { HeavyList, MediumList, LightList };
