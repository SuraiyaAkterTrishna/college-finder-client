import { useMemo } from "react";
import getRandomColor from "../../utils/getRandomColor";

export default function Badge({data}) {
  const randomColor = useMemo(() => getRandomColor(), []);
  const style = { backgroundColor: randomColor };
  return (
    <li>
      <span className="inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 font-bold text-sm capitalize text-[#F4F5F6]" style={style}>
        {data}
      </span>
    </li>
  );
}
