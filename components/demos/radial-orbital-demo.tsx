"use client";

import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Zap, Star, Rocket, Globe, Code, Cpu } from "lucide-react";

const demoData = [
  {
    id: 1,
    title: "Launch",
    date: "Jan 2024",
    content: "Project kickoff and initial setup.",
    category: "milestone",
    icon: Rocket,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 2,
    title: "Design",
    date: "Feb 2024",
    content: "UI/UX design and prototyping phase.",
    category: "design",
    icon: Star,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 75,
  },
  {
    id: 3,
    title: "Dev",
    date: "Mar 2024",
    content: "Core feature development sprint.",
    category: "dev",
    icon: Code,
    relatedIds: [1, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "API",
    date: "Apr 2024",
    content: "Backend API integration and testing.",
    category: "backend",
    icon: Cpu,
    relatedIds: [3, 5],
    status: "in-progress" as const,
    energy: 45,
  },
  {
    id: 5,
    title: "Global",
    date: "May 2024",
    content: "Internationalization and scaling.",
    category: "ops",
    icon: Globe,
    relatedIds: [4, 6],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 6,
    title: "Release",
    date: "Jun 2024",
    content: "Public launch and go-live.",
    category: "milestone",
    icon: Zap,
    relatedIds: [5],
    status: "pending" as const,
    energy: 20,
  },
];

export function RadialOrbitalTimelineDemo() {
  return <RadialOrbitalTimeline timelineData={demoData} />;
}
