import { BASEURL } from "../../Constant";

export default async function getProducts() {
    // console.log(props)
    const result = await fetch(
        `${BASEURL}/product/all`,
        {
            cache: "no-store"
            // next: {
            //     revalidate: 5,
            // }
        }
    )

    if (!result.ok) {
        throw new Error("There was an error fetching all Product Data!")
    }
    return result.json();
}