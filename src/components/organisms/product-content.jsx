"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import ImageMagnifier from "@/components/molecules/image-magnifier";
import { useRouter } from "next/navigation";
import Magnet from "@/components/jsrepo/animations/magent"
import TextType from "@/components/jsrepo/text-animations/text-type";

export const ProductContent = ({ blok }) => {
    const router = useRouter();

    const BackButton = () => (
        <Button variant="outline" onClick={() => router.back()} className="text-base w-fit mt-3 ml-3">
        ← Back
        </Button>
    )
    return (
        <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-gray-100 via-blue-50 to-yellow-50">
            <BackButton/>
            <div className="flex flex-col self-center justify-self-center items-center md:flex-row gap-8 bg-white/80 rounded-xl shadow-lg p-8 border border-gray-200 w-full max-w-4xl mx-4 my-8">
                <div className="md:self-start min-size-[10rem] m-4 rounded-lg border-4 border-gray-200 shadow-md flex items-center justify-center bg-white">
                  <ImageMagnifier
                    src={`https:${blok.image}`}
                    width={300}
                    height={300}
                    alt={blok.title}
                    className="size-full"
                  />
                </div>
                <div className="flex flex-col items-center m-4 gap-y-6 w-full">
                    <p className="font-extrabold text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-800 drop-shadow-sm mb-2">{blok.title}</p>
                    <p className="font-semibold text-center text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-800 mb-2">{blok.price}</p>
                    <p className="font-normal text-center text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 mb-4">{blok.shortDescription}</p>
                    <Magnet padding={50} disabled={false} magnetStrength={10}>
                        <Button asChild size="lg" className="w-full max-w-xs text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl rounded-lg shadow-md text-white font-bold">
                            <Link href={{
                                pathname: "/order",
                                query: {
                                    title: blok.title,
                                    price: blok.price,
                                    image: blok.image,
                                },
                                }}>
                                    Order now
                            </Link>
                        </Button>
                    </Magnet>
                    <div className="font-light text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-500 text-pretty whitespace-pre-line mt-4 w-full text-center">
                        <TextType 
                        text={blok.fullDescription.replace(/\\n/g, '\n\n')}
                        typingSpeed={30}
                        pauseDuration={2000}
                        showCursor={true}
                        cursorCharacter="|"
                        textColors={["#c9c9c9"]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}