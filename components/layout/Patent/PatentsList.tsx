"use client";

import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import {
  US_PATENTS_GRANTED,
  SOUTH_AFRICA_PATENTS_GRANTED,
  PATENTS_PENDING,
  PATENT_SECTIONS_METADATA,
} from "@/utils/generic";
import { PatentItem } from "@/utils/type";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { PatentGridSection } from "./PatentGridSection";
import { PatentFilterBar } from "./PatentFilterBar";
import { PatentEmptyState } from "./PatentEmptyState";

const PatentsList = () => {
  const [activeTab, setActiveTab] = useState<"ALL" | "US" | "SA" | "PENDING">(
    "ALL",
  );
  const [searchQuery, setSearchQuery] = useState("");

  const matchesQuery = (patent: PatentItem, query: string) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase().trim();
    return (
      patent.patentNo.toLowerCase().includes(q) ||
      patent.title.toLowerCase().includes(q) ||
      (patent.description && patent.description.toLowerCase().includes(q)) ||
      (patent.status && patent.status.toLowerCase().includes(q))
    );
  };

  const filteredPatentsDataMap: Record<"US" | "SA" | "PENDING", PatentItem[]> =
    {
      US: (US_PATENTS_GRANTED as PatentItem[]).filter((p) =>
        matchesQuery(p, searchQuery),
      ),
      SA: (SOUTH_AFRICA_PATENTS_GRANTED as PatentItem[]).filter((p) =>
        matchesQuery(p, searchQuery),
      ),
      PENDING: (PATENTS_PENDING as PatentItem[]).filter((p) =>
        matchesQuery(p, searchQuery),
      ),
    };

  const totalPatentsCount =
    filteredPatentsDataMap.US.length +
    filteredPatentsDataMap.SA.length +
    filteredPatentsDataMap.PENDING.length;

  const tabs = [
    { key: "ALL", label: `All Patents (${totalPatentsCount})` },
    {
      key: "US",
      label: `US Granted (${filteredPatentsDataMap.US.length})`,
    },
    {
      key: "SA",
      label: `South Africa (${filteredPatentsDataMap.SA.length})`,
    },
    {
      key: "PENDING",
      label: `Pending (${filteredPatentsDataMap.PENDING.length})`,
    },
  ];

  return (
    <Box sx={{ pb: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 2, md: 4 } }}>
        <ScrollReveal direction="up" delay={0.1}>
          <PatentFilterBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeTab={activeTab}
            setActiveTab={(tab) => setActiveTab(tab as any)}
            tabs={tabs}
          />
        </ScrollReveal>
      </Container>

      {totalPatentsCount === 0 ? (
        <Container maxWidth="lg">
          <PatentEmptyState
            searchQuery={searchQuery}
            onClear={() => {
              setSearchQuery("");
              setActiveTab("ALL");
            }}
          />
        </Container>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${searchQuery}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            {PATENT_SECTIONS_METADATA.map((section, index) => {
              if (activeTab !== "ALL" && activeTab !== section.id) return null;
              
              const isAlternate = index % 2 !== 0;
              
              return (
                <Box
                  key={section.id}
                  sx={{
                    width: "100%",
                    backgroundColor: isAlternate ? "#FAF8F5" : "#FFFFFF",
                    py: { xs: 6, md: 10 },
                    borderTop: isAlternate ? "1px solid rgba(0,0,0,0.03)" : "none",
                    borderBottom: isAlternate ? "1px solid rgba(0,0,0,0.03)" : "none",
                  }}
                >
                  <Container maxWidth="lg">
                    <PatentGridSection
                      title={section.title}
                      subtitle={section.subtitle}
                      patents={filteredPatentsDataMap[section.id]}
                    />
                  </Container>
                </Box>
              );
            })}
          </motion.div>
        </AnimatePresence>
      )}
    </Box>
  );
};

export default PatentsList;
