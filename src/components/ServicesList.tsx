"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";

export function ServicesList() {
  const [openService, setOpenService] = useState(services[0].title);

  return (
    <div className="grid gap-3">
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          service={service}
          isOpen={openService === service.title}
          onToggle={() => setOpenService((current) => (current === service.title ? "" : service.title))}
        />
      ))}
    </div>
  );
}
