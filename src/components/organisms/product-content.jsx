import { Button } from "@/components/ui/button";
import Link from "next/link";
import ImageMagnifier from "@/components/molecules/image-magnifier";

export const ProductContent = ({ blok }) => {
    const imageUrl = blok.image?.startsWith("https:") ? blok.image : `https:${blok.image}`;

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-100 via-blue-50 to-yellow-50">
            <div className="flex flex-col items-center md:flex-row gap-8 bg-white/80 rounded-xl shadow-lg p-8 border border-gray-200 w-full max-w-4xl mx-4 my-8">
                <div className="md:self-start min-size-[10rem] m-4 rounded-lg border-4 border-gray-200 shadow-md flex items-center justify-center bg-white">
                  <ImageMagnifier
                    src={imageUrl}
                    width={300}
                    height={300}
                    alt={blok.title}
                    className="size-full"
                  />
                </div>
                <div className="flex flex-col items-center m-4 gap-y-6 w-full">
                    <p className="font-extrabold text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-800 drop-shadow-sm mb-2">{blok.title}</p>
                    <p className="font-semibold text-center text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-800 mb-2">{blok.price}</p>
                    <p className="font-normal text-center text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-4">{blok.shortDescription}</p>
                    <Button asChild className="w-full max-w-xs text-lg py-2 rounded-lg shadow-md text-white font-bold">
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
                    <div className="font-light text-xs md:text-sm lg:text-base xl:text-lg text-gray-500 text-pretty whitespace-pre-line mt-4 w-full text-center">
                        {blok.fullDescription.replace(/\\n/g, '\n\n')}
                    </div>
                </div>
            </div>
        </div>
    )
}