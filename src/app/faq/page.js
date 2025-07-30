import { Header } from '@/components/molecules/header';
import { Footer } from '@/components/atoms/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata = {
  title: 'FAQ',
  description: 'FAQs LEGO4DOLLAZ',
}

export default function FAQ() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-yellow-50">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-top">
        <h1 className="mt-10 text-2xl font-extrabold text-center text-gray-800 drop-shadow-sm tracking-wide">Frequently Asked Questions</h1>
        <div className="w-full flex justify-center">
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-2xl bg-white/80 rounded-xl shadow-lg p-6 my-8 mx-4 border border-gray-200"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-semibold text-lg">Why LEGO bricks?</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-gray-700">
                <p className="font-medium">The answer is pretty simple:</p>
                <p>
                  Everyone LOVES building LEGO. And also it happened so many times that you cannot find the ONE piece.
                  Thanks to our shop, you will always be able to order the missing piece.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-semibold text-lg">Why so expensive?</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-gray-700">
                <p className="italic">Bruh.</p>
                <p>
                  We know how much LEGO can cost okay? It is a descent price for descent quality. Take it or leave it.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-semibold text-lg">Return Policy</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-gray-700">
                <p>So far we do not provide return policy.</p>
                <p>
                  We know that at this point our page might seem like a huge scam but it is really not.
                  As long as we grow we will provide our customers with more features that make shopping as easy as never before. Stay tuned!
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-semibold text-lg">How to thank me</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance text-gray-700">
                <p>C&apos;mon, it&apos;s my internship.</p>
                <p>
                  Each opinion is important to me. If you like this page, then I am glad I am actually learning something
                  (and hopefully will earn money for that in the future)
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
}