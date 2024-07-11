import {
    ChevronsUpDown,
    Cloud,
    CreditCard,
    Github,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    User,
    UserPlus,
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"
  
  export function ProfileOpts() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-x-0">
          <Image src={"/images/hero (1).png"} alt="" width={55} height={55} className="rounded-full hover:shadow-md transition-all duration-200 ease-in-out" />
          <ChevronsUpDown />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href={"/personal"} className="flex items-center hover:bg-dark-4/60 w-full h-full py-1 px-2">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/billing"} className="flex items-center hover:bg-dark-4/60 w-full h-full py-1 px-2">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserPlus className="mr-2 h-4 w-4" />
                <span>Invite users</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                  <Link href={"/share"} className="flex items-center hover:bg-dark-4/60 w-full h-full py-1 px-2">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Email</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                  <Link href={"/share"} className="flex items-center hover:bg-dark-4/60 w-full h-full py-1 px-2">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>Message</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/github"} className="flex items-center hover:bg-dark-4/60 w-full h-full py-1 px-2">
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/support"} className="flex items-center hover:bg-dark-4/60 w-full h-full py-1 px-2">
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Cloud className="mr-2 h-4 w-4" />
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button variant={"destructive"}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  