import type { LucideIcon } from 'lucide-react';

export type LensId = 'clinical' | 'it' | 'management';

export type AnnotationItem = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export type LensContent = {
  summary: string;
  notes: AnnotationItem[];
};

export type WorkflowStage = {
  step: string;
  name: string;
  detail: string[];
};

export type GovernanceBlock = {
  title: string;
  body: string;
};
