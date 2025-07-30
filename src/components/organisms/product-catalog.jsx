import { getStoryblokApi } from '@/app/storyblok';
import ProductCard from './product-card';
import Image from 'next/image';

export const ProductCatalogSection = ({ stories }) => {
  return (
    <main className="flex-grow min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-gray-100 via-blue-50 to-yellow-50">
      <header className="w-full top-0 z-20 bg-white/80 backdrop-blur-md shadow-md">
        <Image
          className="w-full h-[200px] object-cover"
          src="https://www.ci.harrisburg.or.us/sites/default/files/styles/full_node_primary_extra_wide/public/imageattachments/library/page/5551/library_lego_banner.jpg?itok=Lv_p2H19"
          alt="Library Lego Banner"
          width={1920}
          height={200}
          priority
        />
        <div className="py-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 drop-shadow-sm tracking-wide">Main Catalog</h1>
          <h2 className="text-lg sm:text-2xl text-center text-gray-500 italic mt-2">Take a look at what we have for you</h2>
        </div>
      </header>
      <ul className="mt-8 px-4 pb-16 w-full max-w-7xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 xl:gap-12">
        {stories.map((story) => (
          <li
            key={story.id}
            className="border-3 border-black-200 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl bg-white rounded-xl shadow-md p-4 flex flex-col items-center"
          >
            <ProductCard blok={story.content} slug={story.slug.split('/').pop()} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export async function ProductCatalog() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get('cdn/stories', {
    version: 'draft',
    starts_with: 'products',
  });

  return <ProductCatalogSection stories={data.stories} />;
}
