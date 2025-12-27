import { redirect } from 'next/navigation';

// Redirige automáticamente a la ruta /dashboard cuando se accede a la raíz
export default function Page() {
  redirect('/dashboard');
  return null;
}
