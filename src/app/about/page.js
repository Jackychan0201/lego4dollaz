import { Header } from '@/components/molecules/header';
import { Footer } from '@/components/atoms/footer';

export const metadata = {
  title: 'About',
  description: 'About LEGO4DOLLAZ',
}

export default function FAQ() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-yellow-50">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-top mb-10">
        <div className="w-full max-w-2xl bg-white/80 rounded-xl shadow-lg p-8 mt-10 border border-gray-200">
          <h1 className="text-2xl font-extrabold text-center text-gray-800 drop-shadow-sm tracking-wide mb-6">About</h1>
          <p className="mb-4 text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum enim, laoreet id lectus ullamcorper,
            viverra dignissim diam. Sed vitae...
          </p>
          <p className="mb-4 italic text-gray-600">Okay just kidding. My name is Yauheni Budzko, and I am a fullstack developer,
            currently job-less and having an internship at SoftTeco. I love what I am doing, it&apos;s pretty challenging and interesting at
            the same time. Wanna know how it will turn out? Let&apos;s see. And a bit more of Lorem Ipsum for y&apos;all:
          </p>
          <p className="text-gray-700 text-base">
            Aliquam id vehicula eros. Vivamus scelerisque ut odio a dictum. Praesent hendrerit, neque nec dignissim
            pulvinar, velit ex rhoncus arcu, at aliquet sapien metus vel eros. In pharetra, elit id consectetur aliquam, leo neque eleifend
            orci, sed pulvinar orci ex at orci. Ut a mi id neque facilisis varius. Vivamus suscipit nulla eu mauris pharetra, ut tincidunt
            nisi egestas. Sed volutpat tristique tellus faucibus malesuada. Ut posuere massa a lacinia feugiat. Suspendisse vehicula diam
            et lorem faucibus, id congue risus tempor. 
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
