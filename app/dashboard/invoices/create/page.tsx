import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import CreateForm from '@/app/ui/invoices/create-form';
import { customers } from '@/app/lib/placeholder-data';
import type { CustomerField } from '@/app/lib/definitions';

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Invoices', href: '/dashboard/invoices' },
          { label: 'Create', href: '/dashboard/invoices/create', active: true },
        ]}
      />
      <h1 className="text-2xl font-bold mb-4">Create Invoice</h1>
      <CreateForm customers={customers as CustomerField[]} />
    </main>
  );
}
