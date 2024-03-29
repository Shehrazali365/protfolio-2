//next img
import Image from "next/image";


const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image src={'/avatar.png'} width={737} height={678} className=" translate-x-0 w-full h-full" alt="" />
    </div>
  );
};

export default Avatar;
