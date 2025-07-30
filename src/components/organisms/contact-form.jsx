import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formSchema } from "@/lib/utils/form-schema";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";


export const ContactForm = ({title, quantity, price}) => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
        email: "",
        fname: "",
        lname: "",
        tel: "",
        },
    });

    const router = useRouter();

    const onSubmit = async (data) => {
      data = { ...data, title, quantity, price };
      try {
        const res = await fetch('api/email-send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (res.ok) {
          toast.success("Email sent successfully", {
            description: "We will contact you soon, check your inbox!",
            action: {
              label: "Home",
              onClick: () => {
                router.push('/');
              } 
            },
          });
          form.reset();
        } else {
          toast.error("Something went wrong", {
            description: "Try again later",
            action: {
              label: "Home",
              onClick: () => {
                router.push('/');
              } 
            },
          })
          form.reset();
        }
      } catch (e) {
          toast.error("Something went wrong", {
            description: "Try again later",
            action: {
              label: "Home",
              onClick: () => {
                router.push('/');
              } 
            },
          })
        form.reset();
      }
    };

    return (
      <Form {...form}>
        <Toaster richColors position="top-center"/>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full max-w-xl mx-auto gap-10">
          <FormField
            control={form.control}
            name="email"
            render={({ field: inputField }) => (
              <FormItem className="flex flex-col gap-3">
                <FormLabel className="self-start text-medium sm:text-lg md:text-2xl">
                  E-mail address <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your@email.com" {...inputField} className="w-full text-medium sm:text-lg md:text-xl lg:text-2xl py-3" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fname"
            render={({ field: inputField }) => (
              <FormItem className="flex flex-col gap-3">
                <FormLabel className="self-start text-medium sm:text-lg md:text-2xl">
                  First name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="John" {...inputField} className="w-full text-medium sm:text-lg md:text-xl lg:text-2xl py-3" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lname"
            render={({ field: inputField }) => (
              <FormItem className="flex flex-col gap-3">
                <FormLabel className="self-start text-medium sm:text-lg md:text-2xl">
                  Last name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Doe" {...inputField} className="w-full text-medium sm:text-lg md:text-xl lg:text-2xl py-3" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tel"
            render={({ field: inputField }) => (
              <FormItem className="flex flex-col gap-3">
                <FormLabel className="self-start text-medium sm:text-lg md:text-2xl">
                  Phone number <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="+1 234 567 890" {...inputField} className="w-full text-medium sm:text-lg md:text-xl lg:text-2xl py-3" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="text-medium sm:text-lg md:text-2xl py-3 text-white">Place order</Button>
        </form>
      </Form>
    )
}