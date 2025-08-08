import { PriceSection } from "../components/shared/PriceSection";
import { ProcessSection } from "../components/shared/ProcessSection";
import { TechStackSection } from "../components/shared/TechStackSection";
import { WebServiceHero } from "../components/shared/WebServiceHero";
import { WebsiteTypesSection } from "../components/shared/WebsiteTypesSection";

export default function WebServicePage() {
    return (
        <div>
            <WebServiceHero />
            <WebsiteTypesSection/>
            <ProcessSection/>
            <TechStackSection/>
            <PriceSection/>
            {/* আপনি চাইলে এখানে অন্যান্য সেকশন যুক্ত করতে পারেন */}
        </div>
    );
}