"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface CustomModalProps {
  trigger: React.ReactNode;
  title?: string;
  children: React.ReactNode;
}

export function CustomModal({
  trigger,
  title = "Filter Options",
  children,
}: CustomModalProps) {

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>

          <div className="py-4">{children}</div>

          <DialogFooter className="hidden">
            <DialogClose id="cancel" asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
