import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { BiAward } from "react-icons/bi"
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu"

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]

type CardProps = React.ComponentProps<typeof Card>

export function Notify({ className, ...props }: CardProps) {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <div className='bg-dark-4/70 flex items-center justify-center gap-x-2 px-4 py-1 text-blue-500 hover:text-dark-5 active:translate-y-1 active:scale-95 hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer rounded-2xl'>
                <BiAward />
                <h1 className=''>
                    Noti..
                </h1>
                <h1 className='text-white bg-dark-5 rounded-full px-2 text-sm'>
                    2
                </h1>
            </div>

        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <Card className={cn("w-[380px] z-50", className)} {...props}>
        <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
            <div className=" flex items-center space-x-4 rounded-md border p-4">
            <BellRing />
            <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                Push Notifications
                </p>
                <p className="text-sm text-muted-foreground">
                Send notifications to device.
                </p>
            </div>
            <Switch />
            </div>
            <div>
            {notifications.map((notification, index) => (
                <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                    {notification.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                    {notification.description}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </CardContent>
        <CardFooter>
            <Button className="w-full" variant={"primary"}>
            <Check className="mr-2 h-4 w-4" /> Mark all as read
            </Button>
        </CardFooter>
        </Card>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
