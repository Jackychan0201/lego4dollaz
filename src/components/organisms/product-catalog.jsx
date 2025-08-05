import { getStoryblokApi } from '@/app/storyblok';
import { ProductCatalogSection } from '@/components/organisms/product-catalog-section';

export async function ProductCatalog() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get('cdn/stories', {
    version: 'draft',
    starts_with: 'products',
  });

  return <ProductCatalogSection stories={data.stories} />;
}
