import { Toaster } from "sonner";

export default function BrandFormLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-white min-h-screen box-border overflow-hidden bg-cover bg-no-repeat flex items-center justify-center relative px-2 py-2">
      <div className="w-full max-w-[500px] mx-auto flex items-center justify-center overflow-y-auto bg-white rounded-md customShadow relative z-20 px-4">
          {children}
           <Toaster />
      </div>
      
        <div className="w-100 h-100 rounded-full bg-[#E8E8F6] absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"/>
        <div className="w-100 h-100 rounded-full bg-[#E8E8F6] absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2"/>
    </div>
  )
}