export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "FAYEN TRAVEL AGENCY",
    description:
      "Your trusted travel partner for amazing destinations worldwide",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Oysterbay",
      addressLocality: "Dar es Salaam",
      addressRegion: "Dar es Salaam",
      postalCode: "Postal Code",
      addressCountry: "Tanzania",
    },
    telephone: "+255779528442",
    url: "https://fayen.co.tz",
    openingHours: "Mo-Fr 09:00-18:00",
    sameAs: ["https://www.instagram.com/fayengrouplimited"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
