import { Suspense } from "react";
import { Loading } from '@/components/atoms/loading';
import { OrderPage } from '@/components/organisms/order-page';


export default function OrderPageWrapper() {
  return (
    <Suspense fallback={<Loading/>}>
      <OrderPage />
    </Suspense>
  );
}