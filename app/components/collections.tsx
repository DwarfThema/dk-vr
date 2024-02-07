import Image from "next/image";

interface IItems {
  author: string;
  imageUrl: string;
  bookMarkCound: number;
}

export default function Collections({
  title,
  items,
}: {
  title: string;
  items: IItems[];
}) {
  return (
    <div className="w-full px-7 my-4">
      <div className="flex item-center">
        <span className="text-2xl font-semibold mr-5">{title}</span>
        <button>see more &nbsp;&nbsp; {`>`}</button>
      </div>
      <div className="mt-3 grid grid-cols-5 gap-4 w-full text-[14px]">
        {items.map((item: IItems, index) => {
          return (
            <div key={index} className="w-[300px]">
              <Image src={item.imageUrl} width={300} height={500} alt="img" />
              <div className="flex justify-between mt-1">
                <span>{item.author}</span>
                <button className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                    />
                  </svg>
                  {item.bookMarkCound}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
