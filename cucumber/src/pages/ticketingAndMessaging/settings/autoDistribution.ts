import { xpathSelector } from "../../../utils/selectors";

export const autoDistributionCheckBox = async function getAutoDistributionCheckBox(driver:any) {
    return await xpathSelector("//*[@id=\"page-autoDistributionConfig\"]/div[1]/div/div[2]/span/span[1]/span", driver);
}
