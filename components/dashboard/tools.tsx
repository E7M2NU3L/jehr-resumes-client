import {
    ChevronsUpDown,
    Cloud,
    CreditCard,
    Github,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    SearchCheck,
    Sheet,
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
import { FaTools } from "react-icons/fa"
import { BiAnalyse } from "react-icons/bi"
  
  export function Tools() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div className='bg-dark-4/70 flex items-center justify-center gap-x-2 px-4 py-1 text-blue-500 hover:text-dark-5 active:translate-y-1 active:scale-95 hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer rounded-2xl'>
                <FaTools />
                <h1 className=''>
                    Tools
                </h1>
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>tools</DropdownMenuLabel>
          <DropdownMenuItem>
            <Link href={"/resume-builder"} className="flex items-center hover:bg-dark-4/60 w-full h-full py-1 px-2">
            <Sheet className="mr-2 h-4 w-4" />
            <span>Resume Builder</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/jobs"} className="flex items-center hover:bg-dark-4/60 w-full h-full py-1 px-2">
            <SearchCheck className="mr-2 h-4 w-4" />
            <span>Jobs Search</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSeparator />
          <DropdownMenuLabel>tools to be added..</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem disabled>
              <Link href={"/personal"} className="flex items-center hover:bg-dark-4/60 w-full h-full py-1 px-2">
                <Mail className="mr-2 h-4 w-4" />
                <span>Mail Automation</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <Link href={"/billing"} className="flex items-center hover:bg-dark-4/60 w-full h-full py-1 px-2">
              <BiAnalyse className="mr-2 h-4 w-4" />
              <span>
                Resume Analytics
              </span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  