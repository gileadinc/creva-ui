export type IAgent = {
  id: string;
  img: string;
  name: string;
  country: string;
  music: string;
  description: string;
};

export type ITestimonal = {
  name: string;
  text: string;
  company: string;
};

export type IPricingItem = {
  type: string;
  price: string;
  per: string | null;
  numberOfUsers: string;
  badge?: string | null;
  features: string[];
};

export type IFaq = {
  question: string;
  answer: string;
};

export interface IFeature {
  img: string;
  title: string;
  description: string;
  detailData: { title: string; text: string }[];
}
