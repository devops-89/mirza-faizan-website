import { Box } from "@mui/material";
import { notFound } from "next/navigation";
import {
  getPatentById,
  US_PATENTS_GRANTED,
  SOUTH_AFRICA_PATENTS_GRANTED,
  PATENTS_PENDING,
} from "@/utils/generic";
import PatentDetail from "@/components/layout/Patent/PatentDetail";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate static params for all patent IDs
export async function generateStaticParams() {
  const allPatents = [
    ...US_PATENTS_GRANTED,
    ...SOUTH_AFRICA_PATENTS_GRANTED,
    ...PATENTS_PENDING,
  ];
  return allPatents.map((p) => ({ id: p.id }));
}

// Dynamic metadata per patent
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const patent = getPatentById(id);
  if (!patent) return { title: "Patent Not Found" };
  return {
    title: `${patent.title} — Mirza Faizan Patents`,
    description: patent.abstract || `Patent ${patent.patentNo} by Mirza Faizan`,
  };
}

export default async function PatentDetailPage({ params }: PageProps) {
  const { id } = await params;
  const patent = getPatentById(id);

  if (!patent) notFound();

  return (
    <Box>
      <PatentDetail patent={patent} />
    </Box>
  );
}
