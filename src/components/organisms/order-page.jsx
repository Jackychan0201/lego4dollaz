"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactForm } from "@/components/organisms/contact-form";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export const OrderPage = () => {
  
  const searchParams = useSearchParams();
  const router = useRouter();
  const title = searchParams.get("title");
  const price = searchParams.get("price");
  const imageUrl = searchParams.get("image");
  const image = imageUrl.startsWith("https:") ? imageUrl : `https:${imageUrl}`;
  const [order, setOrder] = useState({
    quantity: 1,
    orderPrice: (Math.round(parseFloat(price) * 1 * 100) / 100).toFixed(2) + "$",
  });

  const handleChange = (action) => {
    setOrder((prev) => {
      let newQuantity = prev.quantity;
      if (action === "+" && newQuantity < 99) newQuantity += 1;
      else if (action === "-" && newQuantity > 1) newQuantity -= 1;
      return {
        quantity: newQuantity,
        orderPrice: (Math.round(parseFloat(price) * newQuantity * 100) / 100).toFixed(2) + "$",
      };
    });
  };

  const quantity = order.quantity;
  const orderPrice = order.orderPrice;

  const OrderDetails = ({ imageSize = 180 }) => {
    let widthClass = "w-44 max-w-[180px]";
    if (imageSize === 90) widthClass = "w-24 max-w-[90px]";
    return (
      <div className="flex flex-row gap-4 text-balance justify-start my-4 w-full items-center py-2">
        <div className={twMerge(
          "relative flex items-center justify-center aspect-square ",
          widthClass
        )}>
          <Image
            src={image}
            alt={title || "Order image"}
            fill
            className="object-contain rounded-md border-4 border-gray-400"
            sizes={imageSize === 90 ? "(max-width: 640px) 100vw, 90px" : "(max-width: 640px) 100vw, 180px"}
          />
          <Badge className="absolute -top-2 -right-2 h-5 min-w-5 size-[20%] rounded-full px-1 font-mono tabular-nums">
            <p className="text-sm sm:text-medmium md:text-lg lg:text-xl">{quantity}</p> 
          </Badge>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <div className={twMerge(
              "flex flex-row text-nowrap text-center text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold"
            )}>
              <p className="">{title}</p>
              <p>({price})</p>
            </div>
          </div>
          <QuantityControls />
        </div>
      </div>
    );
  };

  const QuantityControls = () => (
    <div className="w-fit py-2 flex flex-row rounded-sm bg-gray-400 text-gray-800">
      <Button size="medium" className="bg-transparent hover:bg-transparent text-lg sm:text-xl md:text-2xl px-4" onClick={() => handleChange("+")}>+</Button>
      <Label className="text-lg sm:text-xl md:text-2xl px-4">{quantity}</Label>
      <Button size="medium" className="bg-transparent hover:bg-transparent text-lg sm:text-xl md:text-2xl px-4" onClick={() => handleChange("-")}>-</Button>
    </div>
  );

  return (
    <div className="min-h-screen w-full flex flex-col items-center lg:justify-center bg-gradient-to-br from-gray-100 via-blue-50 to-yellow-50">
      {/* Desktop layout */}
      <div className="hidden lg:flex lg:h-full lg:flex-row lg:items-center lg:justify-center w-full max-w-5xl gap-8">
        <div className="h-full w-1/2 flex flex-col items-center p-10 gap-6 bg-white/80 rounded-xl shadow-lg border border-gray-200">
          <div className="w-full flex flex-row items-center mb-2">
            <div className="flex-1 flex">
              <Button
                variant="outline"
                onClick={() => router.back()}
                className="text-base w-fit"
              >
                ← Back
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <Link
                href="/"
                className="text-2xl font-extrabold text-center text-blue-700 drop-shadow-sm hover:underline scale-90 sm:scale-100"
              >
                LEGO4DOLLAZ
              </Link>
            </div>
            <div className="flex-1" />
          </div>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-center text-gray-600 mb-4">Contact info</p>
          <ContactForm title={title} quantity={quantity} price={orderPrice} />
        </div>
        <div className="h-full w-1/2 flex flex-col items-center p-10 gap-6 bg-white/80 rounded-xl shadow-lg border border-gray-200">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-gray-700 mb-2">Order details</p>
          <OrderDetails imageSize={120} />
          <Label className="self-start text-lg font-medium text-center text-blue-700">TOTAL: {orderPrice}</Label>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden w-full flex flex-col items-center justify-start gap-6 my-8">
        <div className="w-full flex items-center px-4 mb-2">
          <Button variant="outline" onClick={() => router.back()} className="text-base w-fit">
            ← Back
          </Button>
        </div>
        <Link href="/" className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-blue-700 my-4">
          LEGO4DOLLAZ
        </Link>
        <Accordion type="single" collapsible className="w-[95%] py-2 px-4 bg-white/80 rounded-xl shadow-lg border border-gray-200">
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex items-center">
              <div className="flex flex-row w-full justify-between items-center font-semibold text-gray-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                <span className="flex flex-col items-start">
                  <span>Order details <span className="text-gray-500">({orderPrice})</span></span>
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance items-center py-2">
              <OrderDetails imageSize={150} />
              <div className="w-full flex flex-col gap-1 mt-2">
                <div className="flex flex-row justify-between items-center w-full">
                  <span className="font-normal text-gray-600 text-lg sm:text-xl md:text-2xl lg:text-3xl">Subtotal:</span>
                  <span className="font-medium text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl">{orderPrice}</span>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                  <span className="font-normal text-gray-600 text-lg sm:text-xl md:text-2xl lg:text-3xl">Shipping cost:</span>
                  <span className="font-medium text-green-600 text-lg sm:text-xl md:text-2xl lg:text-3xl">free</span>
                </div>
              </div>
              <Label className="self-start font-medium text-center text-blue-700 mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">TOTAL: {orderPrice}</Label>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex flex-col self-center items-center p-6 gap-5 w-[95%] bg-white/80 rounded-xl shadow-lg border border-gray-200">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-gray-600">Contact info</p>
          <ContactForm title={title} quantity={quantity} price={orderPrice} />
        </div>
      </div>
    </div>
  );
}
