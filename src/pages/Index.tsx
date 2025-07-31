
import { Calculator } from "@/components/Calculator";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Female Delusion Calculator",
    "description": "Calculate the percentage of men who meet your dating standards. Discover if your expectations are realistic in today's dating market.",
    "url": "https://femaledelusioncalculator.com",
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "Female Delusion Calculator"
    }
  };

  return (
    <>
      <SEOHead
        title="Female Delusion Calculator - Check Your Dating Standards Reality"
        description="Calculate what percentage of men actually meet your dating standards. Free tool to check if your expectations are realistic in today's dating market. Discover the math behind modern relationships."
        keywords="female delusion calculator, dating standards calculator, relationship expectations, dating reality check, men percentage calculator, dating standards test, relationship compatibility"
        schemaData={schemaData}
      />
      <Calculator />
    </>
  );
};

export default Index;
