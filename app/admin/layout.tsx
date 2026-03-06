import { ReactNode } from 'react';

// Admin route has its own standalone layout — no Navbar or Footer
export default function AdminLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
