import { Header } from '@/components/molecules/header';
import { Footer } from '@/components/atoms/footer';
import { ProductCatalog } from '@/components/organisms/product-catalog';
import { Suspense } from "react";
import { Loading } from '@/components/atoms/loading';

export const metadata = {
  title: 'Homepage - LEGO4DOLLAZ',
  description: 'The missing piece for you LEGO builds',
}

export default async function Home() {
  return (
    <Suspense fallback={<Loading/>}>
      <div className="flex flex-col min-h-full">
        <Header />
        <ProductCatalog/>
        <Footer />
      </div>
    </Suspense>
  );
}