import { xpathSelector } from "../../utils/selectors";


export const settingMenu = async function getSettingMenu(driver:any) {
    return (await xpathSelector("//*[@id=\"level2menu\"]/div/div/li[2]/div[1]/span",driver));

}