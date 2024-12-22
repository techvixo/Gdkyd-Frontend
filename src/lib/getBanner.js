import { BASEURL } from "../../Constant";

export default async function getBanners(props) {
    const result = await fetch(
        `${BASEURL}/web-banner/${props}`
        ,{  cache: 'no-store' }
    )

    if (!result.ok) {
        throw new Error("There was an error fetching Banner!")
    }
    return result.json();
}