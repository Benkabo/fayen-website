import { type SanityDocument } from "next-sanity";

import { client } from "@/app/sanity/client";
import DestinationSlider from "./DestinationSlider";
import { DESTINATION_QUERY } from "@/app/sanity/queries";

const options = { next: { revalidate: 30 } };
export default async function Destination() {
  const desinations = await client.fetch<SanityDocument[]>(
    DESTINATION_QUERY,
    {},
    options
  );
  return (
    <DestinationSlider
      destinations={desinations}
      _id={""}
      _rev={""}
      _type={""}
      _createdAt={""}
      _updatedAt={""}
    />
  );
}
