import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ blok, slug }) => {
  return (
    <Link href={`/products/${slug}`} className="flex flex-col items-center justify-center rounded-md cursor-pointer group focus:outline-none">
      <Image
        src={`https:${blok.image}`}
        alt={blok.title}
        width={200}
        height={200}
        className="min-w-[9rem] min-h-[9rem] size-40 rounded-md"
      />
      <div className="flex flex-col items-center justify-center mt-2 mb-6 gap-1">
        <p className="font-bold group-hover:underline text-base md:text-lg lg:text-xl">{blok.title}</p>
        <p className="text-sm md:text-base lg:text-lg">{blok.price}</p>
      </div>
    </Link>
  );
}
export default ProductCard