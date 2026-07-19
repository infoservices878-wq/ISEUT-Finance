import { z } from 'zod';
import { loanRequestSchema, contactSchema } from './schema';

// Required error schemas for template compatibility
export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

// We define a dummy API object to satisfy build requirements, 
// BUT the application is 100% frontend and will NOT make HTTP requests.
export const api = {
  dummy: {
    simulate: {
      method: 'POST' as const,
      path: '/api/dummy/simulate' as const,
      input: loanRequestSchema,
      responses: {
        200: z.object({ status: z.string() }),
      },
    }
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
