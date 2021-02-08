import { xpathSelector } from "../../utils/selectors";

export const ticketAndMessage = async function getTicketButton(driver:any) {
    return (await xpathSelector("//*[@id=\"level1menu-ticketingmessaging\"]/a/span[1]",driver));
}