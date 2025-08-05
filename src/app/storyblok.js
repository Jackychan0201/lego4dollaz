import { storyblokInit, apiPlugin, getStoryblokApi as getSbApi } from "@storyblok/react";
import ProductCard from "@/components/organisms/product-card";

storyblokInit({
  accessToken: process.env.STORYBLOK_API,
  use: [apiPlugin],
  components: {
    product: ProductCard
  },
});

export const getStoryblokApi = () => getSbApi();
