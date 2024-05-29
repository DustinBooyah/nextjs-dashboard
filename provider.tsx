'use client'
 
import { Toaster, XbeshProvider } from "@xbeshui/core"
 
interface RootLayoutProps {
children: React.ReactNode
}
 
export default function Provider({ children }: RootLayoutProps) {
return (
<XbeshProvider storageKey="next" defaultTheme="system">
<Toaster />
{children}
</XbeshProvider>
)
}