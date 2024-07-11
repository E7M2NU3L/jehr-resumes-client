import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
  import { Button } from '../ui/button'
import { useAppDispatch, useAppSelector } from "@/store/store"
import { logout } from "@/features/authslice";
  
  export function LogoutModal() {
    const dispatch = useAppDispatch();
    const userData: any = useAppSelector((state) => state.auth.userData);
    const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          try {
            dispatch(logout());
            console.log(userData);
            console.log("Logout Successful");
          } catch (error) {
            if (error instanceof Error) {
              console.log(error.message);
            } else {
              console.log("Unknown Error");
            }
          }
      }
      return (
          <Dialog>
              <DialogTrigger asChild>
                  <Button variant="destructive" className="shadow-md shadow-red-300">Logout</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] max-w-sm mx-auto">
                  <DialogHeader>
                      <DialogTitle>Logout Confirmation</DialogTitle>
                      <DialogDescription>
                          Type confirm to make a confirmation for your logout
                      </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                          <Input
                              id="confirmation"
                              placeholder="Type 'confirm' here"
                              className="col-span-3"
                          />
                      </div>
                  </div>
                  <DialogFooter>
                      <Button type="submit" variant="destructive" onClick={handleLogout}>Confirm</Button>
                  </DialogFooter>
              </DialogContent>
          </Dialog>
      )
  }
  