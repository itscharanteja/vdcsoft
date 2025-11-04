import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useMeta({ title, description, path, image }) {
  const location = useLocation();
  useEffect(() => {
    const t = title || "VDCSoft — Launch. Rank. Grow.";
    const d =
      description ||
      "VDCSoft is a full-service digital agency helping small and medium businesses grow online through web development, SEO, and digital marketing.";
    document.title = t;

    const setMeta = (name, content, prop = "name") => {
      let el = document.querySelector(`meta[${prop}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(prop, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", d);
    setMeta("og:title", t, "property");
    setMeta("og:description", d, "property");
    setMeta("og:type", "website", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", t);
    setMeta("twitter:description", d);
    const canonical =
      document.querySelector('link[rel="canonical"]') ||
      (() => {
        const l = document.createElement("link");
        l.rel = "canonical";
        document.head.appendChild(l);
        return l;
      })();
    canonical.href = `https://www.vdcsoft.se${path || location.pathname}`;
  }, [location, title, description, path, image]);
}

export default function Seo(props) {
  useMeta(props);
  // Also inject JSON-LD Organization minimal schema
  useEffect(() => {
    const id = "vdcsoft-org-jsonld";
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "VDCSoft",
      url: "https://www.vdcsoft.se",
      logo: "https://www.vdcsoft.se/favicon.svg",
      sameAs: [],
      address: {
        "@type": "PostalAddress",
        addressCountry: "SE",
      },
    });
    document.head.appendChild(script);
  }, []);

  return null;
}
