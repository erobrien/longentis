import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const routeMap: Record<string, BreadcrumbItem[]> = {
  "/about": [{ label: "About" }],
  "/treatments": [{ label: "Treatments" }],
  "/treatments/trt": [{ label: "Treatments", href: "/treatments" }, { label: "TRT" }],
  "/treatments/ed": [{ label: "Treatments", href: "/treatments" }, { label: "ED Treatment" }],
  "/treatments/weight-loss": [{ label: "Treatments", href: "/treatments" }, { label: "Weight Loss" }],
  "/pricing": [{ label: "Pricing" }],
  "/faq": [{ label: "FAQ" }],
  "/resources": [{ label: "Resources" }],
  "/coverage": [{ label: "Coverage" }],
  "/careers": [{ label: "Careers" }],
  "/press": [{ label: "Press" }],
  "/get-started": [{ label: "Get Started" }],
};

/**
 * Breadcrumb navigation with schema.org BreadcrumbList markup.
 * Renders below header on inner pages (not homepage).
 */
const Breadcrumbs = () => {
  const location = useLocation();
  const crumbs = routeMap[location.pathname];

  if (!crumbs || location.pathname === "/") return null;

  const items = [{ label: "Home", href: "/" }, ...crumbs];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://longentis.lovable.app${item.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="bg-cream-100 pt-28 pb-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ol className="flex items-center gap-1.5 flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              {i > 0 && <ChevronRight className="h-3 w-3 text-navy-700/25" aria-hidden="true" />}
              {item.href ? (
                <Link to={item.href} className="font-space text-[12px] text-navy-700/40 hover:text-navy-700/70 transition-colors" itemProp="item">
                  {i === 0 ? <Home className="h-3 w-3 inline -mt-0.5" aria-label="Home" /> : <span itemProp="name">{item.label}</span>}
                </Link>
              ) : (
                <span className="font-space text-[12px] text-navy-700/60 font-medium" itemProp="name">{item.label}</span>
              )}
              <meta itemProp="position" content={String(i + 1)} />
            </li>
          ))}
        </ol>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </nav>
  );
};

export default Breadcrumbs;
