import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ blok, slug }) => {
  console.log(blok.image);
  const imageUrl = blok.image?.startsWith("https:") ? blok.image : `https:${blok.image}`;

  return (
    <Link href={`/products/${slug}`} className="flex flex-col items-center justify-center rounded-md cursor-pointer group focus:outline-none">
      <Image
        src={imageUrl}
        alt={blok.title}
        width={200}
        height={200}
        className="min-w-[9rem] min-h-[9rem] size-[16vw] rounded-md"
      />
      <div className="flex flex-col items-center justify-center mt-2 mb-6 gap-1">
        <p className="font-bold group-hover:underline text-base md:text-lg lg:text-xl">{blok.title}</p>
        <p className="text-sm md:text-base lg:text-lg">{blok.price}</p>
      </div>
    </Link>
  );
}
export default ProductCard