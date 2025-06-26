import {
  QueryClient,
  defaultShouldDehydrateQuery,
} from '@tanstack/react-query';

export const countRef = {
  current: 0,
};

export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      hydrate: {},
      queries: {
        staleTime: 60 * 1000,
      },
      dehydrate: {
        shouldDehydrateQuery: (query) => {
          return (
            defaultShouldDehydrateQuery(query) ||
            query.state.status === 'pending'
          );
        },
        shouldRedactErrors: () => {
          // Next.js automatically redacts errors for us
          return false;
        },
      },
    },
  });
}
