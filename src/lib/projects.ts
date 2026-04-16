import { getCollection, type CollectionEntry } from 'astro:content';

export type ProjectEntry = CollectionEntry<'projects'>;

export async function getPublishedProjects(): Promise<ProjectEntry[]> {
  const entries = await getCollection('projects', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getFeaturedProjects(limit = 3): Promise<ProjectEntry[]> {
  const published = await getPublishedProjects();
  return published.filter((entry) => entry.data.featured).slice(0, limit);
}
