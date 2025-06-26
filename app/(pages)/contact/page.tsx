// import TopSection from "@/app/comp/section/top-section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* <TopSection title={"Contact Us"} /> */}
      <div className="w-full flex h-[90dvh] flex-col lg:flex-row  items-stretch lg:justify-stretch justify-start lg:px-[5rem] lg:gap-x-[4rem] md:px-[2rem] md:gap-[2rem] lg:gap-y-0 gap-y-[1.4rem] md:py-0 my-[1rem]">
        <div className="flex-1 form flex flex-col md:gap-y-[2rem] gap-y-[1.14rem] justify-center lg:items-start items-center md:order-1 order-2">
          <h1 className=" lg:absolute md:text-[2.9rem] text-[1.6rem] font-extrabold tracking-tight md:top-[7rem] md:mt-0 leading-none">
            Contact Form
          </h1>
          <div className="flex-1 flex flex-col gap-y-[1.25rem] items-center justify-center font-(family-name:--font-abhya) ">
            <Input
              type="text"
              id="name"
              placeholder="Enter your Name"
              className="border-0 border-b-2 drop-shadow-none shadow-none rounded-[0rem] border-b-brown ring-0! w-[24rem] md:max-w-full max-w-[82%] md:text-[1.25rem]! text-[1rem]"
              required
            />
            <Input
              type="email"
              id="email"
              placeholder="Enter your Email"
              className="border-0 border-b-2 drop-shadow-none shadow-none rounded-[0rem] border-b-brown ring-0! w-[24rem] md:max-w-full max-w-[82%] md:text-[1.25rem]! text-[1rem]"
              required
            />
            <Textarea
              className="resize-none border-2 drop-shadow-none shadow-none rounded-[0rem] border-brown ring-0! min-h-[10rem] w-[24rem] md:max-w-full max-w-[82%] md:text-[1.25rem]! text-[1rem]"
              placeholder="Type Your message here"
              required
            />
            <Input
              type="submit"
              className=" border-2 drop-shadow-none shadow-none rounded-[0rem] border-brown ring-0! w-[24rem] md:max-w-full max-w-[82%] md:text-[1.1rem]! bg-brown text-white transform hover:scale-110"
            />
          </div>
        </div>
        <div className="flex-2 relative flex justify-center items-center md:order-2 order-1">
          <div className="relative lg:w-[100%] w-[79%] p-3 bg-brown rounded-[1.7rem]">
            <div className="rounded-full  bg-[rgba(255,255,255,0.3)] transform backdrop-blur-[0.9rem] h-[3.8rem] w-[3.8rem] absolute z-[8] flex items-center justify-center top-[50%] left-[50%] transfrom translate-y-[-50%] translate-x-[-50%]">
              <Image
                src={"/img/vectoricon/vidplay.png"}
                width={112}
                height={112}
                sizes="auto"
                alt="play"
                className="w-full h-auto relative object-cover m-[0.7rem] ml-[1rem]!"
              />
            </div>
            <Image
              src={"/img/hero/center.png"}
              width={2613}
              height={1742}
              alt="mainPic"
              sizes="auto"
              className="w-full h-auto relative object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
