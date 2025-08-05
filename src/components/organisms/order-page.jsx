"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
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
    const subtotal = (Math.round(parseFloat(price) * quantity * 100) / 100).toFixed(2);

    return (
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-row gap-4 text-balance justify-start items-center py-2">
          <div className={twMerge(
            "relative flex items-center justify-center aspect-square",
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
              <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl">{quantity}</p> 
            </Badge>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <div className="flex flex-row flex-wrap items-baseline gap-2 text-gray-800 font-bold">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">{title}</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl">({price})</p>
              </div>
            </div>
            <QuantityControls />
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <div className="flex flex-row justify-between items-center w-full text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
            <span className="font-normal text-gray-600">Subtotal:</span>
            <span className="font-medium text-gray-800">${subtotal}</span>
          </div>
          <div className="flex flex-row justify-between items-center w-full text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
            <span className="font-normal text-gray-600">Shipping cost:</span>
            <span className="font-medium text-green-600">free</span>
          </div>
        </div>
        <Label className="self-start font-bold text-center text-blue-700 mt-2 text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
          TOTAL: {orderPrice}
        </Label>
      </div>
    );
  };

  const QuantityControls = () => (
    <div className="w-fit py-1 flex flex-row rounded-sm bg-gray-400 text-gray-800">
      <Button size="lg" className="bg-transparent hover:bg-transparent text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl px-4" onClick={() => handleChange("+")}>+</Button>
      <Label className="text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl px-4">{quantity}</Label>
      <Button size="lg" className="bg-transparent hover:bg-transparent text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl px-4" onClick={() => handleChange("-")}>-</Button>
    </div>
  );

  const Card = ({ children }) => (
      <div className="h-full w-full lg:w-1/2 flex flex-col items-center p-10 gap-6 bg-white/80 rounded-xl shadow-lg border border-gray-200">
        {children}
      </div>
    );

  const SectionTitle = ({ children }) => (
    <p className="text-xl md:text-2xl xl:text-4xl text-center font-semibold text-gray-600 mb-4">
      {children}
    </p>
  );

  return (
    <div className="min-h-screen w-full flex flex-col items-center lg:justify-center bg-gradient-to-br from-gray-100 via-blue-50 to-yellow-50">
      {/* Header */}
      <div className="w-full flex flex-col px-4 gap-2 lg:px-0 my-4 max-w-5xl">
          <Link
            href="/"
            className="flex self-center justify-center text-2xl md:text-3xl xl:text-4xl font-extrabold text-blue-700 drop-shadow-sm hover:underline"
          >
            LEGO4DOLLAZ
          </Link>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full max-w-5xl h-full gap-8 justify-center items-center">
        <Card className="flex-1">
          <SectionTitle>Contact info</SectionTitle>
          <ContactForm title={title} quantity={quantity} price={orderPrice} />
        </Card>

        <Card className="flex-1">
          <SectionTitle>Order details</SectionTitle>
          <OrderDetails imageSize={120} />
        </Card>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full flex flex-col items-center gap-6 px-4 mb-8">
        <Accordion
          type="single"
          collapsible
          className="w-full py-2 px-4 bg-white/80 rounded-xl shadow-lg border border-gray-200"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex items-center">
              <div className="w-full flex justify-between items-center font-semibold text-gray-700 text-xl sm:text-2xl">
                <span>
                  Order details <span className="text-gray-500">({orderPrice})</span>
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 items-center py-2">
              <OrderDetails imageSize={120} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card className="w-full">
          <SectionTitle>Contact info</SectionTitle>
          <ContactForm title={title} quantity={quantity} price={orderPrice} />
        </Card>
      </div>
    </div>

  );
}
