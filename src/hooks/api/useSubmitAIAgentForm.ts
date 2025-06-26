import { useMutation } from '@tanstack/react-query';

export type AiAgentFormData = {
  firstname: string;
  lastname: string;
  emailaddress: string;
  phonenumber: string;
  howdidyouhearaboutus: string;
  companyname?: string;
  jobtitle?: string;
};

export const useSubmitAiAgentForm = () => {
  return useMutation<void, Error, AiAgentFormData>({
    mutationFn: async (formData) => {
      const response = await fetch(
        'https://0kjogfestg.execute-api.us-east-1.amazonaws.com/prod/api/form/create',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`,
        );
      }
      return response.json();
    },
  });
};
