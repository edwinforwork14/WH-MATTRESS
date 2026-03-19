// components/JsonLd.tsx — Server Component (sin "use client")
// Inyecta múltiples bloques de datos estructurados (Schema.org) para SEO profesional.

const BASE_URL = "https://whmattress.com";
const PHONE = "+50769889415";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WH Mattress",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/Logo.png`,
    width: 800,
    height: 600,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE,
    contactType: "customer service",
    areaServed: "PA",
    availableLanguage: "Spanish",
  },
  sameAs: [`https://wa.me/${PHONE.replace("+", "")}`],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Store"],
  name: "WH Mattress",
  description:
    "Fabricantes de colchones de tecnología avanzada en Panamá. Colchones viscoelásticos, muelles ensacados y colchones ortopédicos con soporte lumbar diferenciado.",
  url: BASE_URL,
  telephone: PHONE,
  priceRange: "$$",
  image: `${BASE_URL}/Logo.png`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "PA",
    addressRegion: "Panamá",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "5000",
    bestRating: "5",
    worstRating: "1",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "WH Mattress",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Colchones WH Mattress — Colección Premium",
  description:
    "Catálogo de colchones de tecnología avanzada: viscoelásticos, ortopédicos, híbridos y con sistema AirCool.",
  url: BASE_URL,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Colchón Cloud Luxe",
        description:
          "Tecnología de espuma viscoelástica de alta densidad para un descanso celestial. Diseñado para adaptarse a la forma de tu cuerpo y aliviar puntos de presión.",
        image: `${BASE_URL}/mattress_cloud_luxe.png`,
        brand: { "@type": "Brand", name: "WH Mattress" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
          seller: { "@type": "Organization", name: "WH Mattress" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Colchón Ortho Firm",
        description:
          "Soporte ortopédico superior con muelles ensacados de última generación. La opción ideal para quienes buscan firmeza y cuidado de la postura lumbar.",
        image: `${BASE_URL}/mattress_ortho_firm.png`,
        brand: { "@type": "Brand", name: "WH Mattress" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
          seller: { "@type": "Organization", name: "WH Mattress" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Colchón AirCool Plus",
        description:
          "Sistema de ventilación avanzado que regula la temperatura toda la noche. Mantente fresco incluso en las noches más calurosas del verano.",
        image: `${BASE_URL}/mattress_aircool_plus.png`,
        brand: { "@type": "Brand", name: "WH Mattress" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
          seller: { "@type": "Organization", name: "WH Mattress" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "Colchón Hybrid Elite",
        description:
          "La fusión perfecta entre muelles de acero y capas de memory foam premium. Lo mejor de ambos mundos en un solo producto de alta gama.",
        image: `${BASE_URL}/mattress_hybrid_elite.png`,
        brand: { "@type": "Brand", name: "WH Mattress" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
          seller: { "@type": "Organization", name: "WH Mattress" },
        },
      },
    },
  ],
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
    </>
  );
}
