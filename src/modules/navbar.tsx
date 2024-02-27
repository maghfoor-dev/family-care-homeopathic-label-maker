import { Button } from "../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";

export default function NavBar() {
  return (
    <NavigationMenu className="justify-between p-4 max-w-7xl">
      <NavigationMenuLink href="/">FAMILY CARE</NavigationMenuLink>
      <NavigationMenuLink
        href="/medicine-list"
        className={`${navigationMenuTriggerStyle()} underline cursor-pointer bg-transparent`}
      >
        Medicine List
      </NavigationMenuLink>
      <NavigationMenuLink href="/print-queue">
        <Button className="bg-[#FFE882] text-black hover:bg-[#FFE882] hover:opacity-80">
          Print Queue
        </Button>
      </NavigationMenuLink>
    </NavigationMenu>
  );
}
