import { defineCollection, z } from 'astro:content';

const localizedContent = z.object({
  contentId: z.string(),
  lang: z.enum(['zh', 'en']),
  sourceLanguage: z.enum(['zh', 'en']),
  translationStatus: z.enum(['original', 'ai-draft', 'reviewed', 'outdated']).default('original'),
  sourceRevision: z.string().optional(),
  title: z.string(),
  description: z.string().optional(),
  publishedAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  status: z.enum(['seed', 'idea', 'developing', 'mature']).default('developing'),
  visibility: z.enum(['private', 'draft', 'public']).default('draft'),
  tags: z.array(z.string()).default([]),
  relatedProjects: z.array(z.string()).default([]),
});

const blog = defineCollection({
  type: 'content',
  schema: localizedContent,
});

const researchNotes = defineCollection({
  type: 'content',
  schema: localizedContent.extend({
    researchQuestion: z.string().optional(),
    zoteroKeys: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: localizedContent.extend({
    projectStatus: z.enum(['planned', 'active', 'paused', 'completed']).default('active'),
  }),
});

export const collections = { blog, researchNotes, projects };
