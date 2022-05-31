import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
      </div>
      <Image
        className="object-contain rounded-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU6_qf4vhl2e09_iK_g0dtSlTdOg-c9sQFC6tfHy1ifxCnASCeVRtTVA1WpD1GuEcbCns&usqp=CAU"
        width={70}
        height={70}
      />
    </header>
  );
}

export default Header;
