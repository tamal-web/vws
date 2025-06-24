export default function TextBoxSection({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="w-full pt-[3.4rem] font-(family-name:--font-abhya)">
      <div className=" w-full flex flex-col items-start justify-start gap-[1rem] md:flex md:gap-y-[2rem] mx-auto md:text-[1.4rem] md:leading-[1.78rem]">
        <div className="about flex flex-col md:flex-row md:items-start md:justify-around  gap-[1rem]  border rounded-[2rem] py-[2.6rem] px-[1.1rem] md:px-0">
          <div className="lg:w-[26%] md:w-[26%] text-[3.4rem]  font-extrabold leading-[3.34rem]">
            {title}
          </div>
          <div className="md:w-[60%]">{children}</div>
        </div>
      </div>
    </div>
  );
}
