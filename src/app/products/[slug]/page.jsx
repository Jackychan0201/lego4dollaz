import { getStoryblokApi } from '@/app/storyblok';
import { Header } from '@/components/molecules/header';
import { Footer } from '@/components/atoms/footer';
import { ProductContent } from '@/components/organisms/product-content'
import { notFound } from 'next/navigation';
import ScrollToTop from '@/lib/utils/scroll-top';

export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get('cdn/stories', {
    version: 'draft',
    starts_with: 'products',
  });

  return data.stories.map((story) => ({
    slug: story.slug.split('/').pop(),
  }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const storyblokApi = getStoryblokApi();

  try {
    const { data } = await storyblokApi.get(`cdn/stories/products/${slug}`, {
      version: 'draft',
    });

    return (
      <div className="flex flex-col min-h-full">
        <ScrollToTop />
        <Header />
        <main className="flex-grow flex flex-col items-center">
          <ProductContent blok={data.story.content} />
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    return notFound();
  }
}