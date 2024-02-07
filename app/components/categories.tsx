import Image from "next/image";

interface IItems {
  name: string;
  imageUrl: string;
}

export default function Categories({
  title,
  items,
}: {
  title: string;
  items: IItems[];
}) {
  return (
    <div className="w-full px-7 my-4">
      <span className="text-2xl font-semibold mr-5">{title} Category</span>
      <div className="mt-3 flex w-full text-[14px]">
        {items.map((item: IItems, index) => {
          return (
            <div key={index} className="mr-3">
              <div className="w-[150px] h-[150px] bg-[url('/exImg.png')] bg-cover bg-center" />
              <span className="mt-2 px-2">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
