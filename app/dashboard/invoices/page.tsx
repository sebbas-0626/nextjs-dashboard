import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Table from "@/app/ui/invoices/table";
import { invoices as placeholderInvoices, customers } from "@/app/lib/placeholder-data";
import type { InvoicesTable } from "@/app/lib/definitions";
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import Pagination from '@/app/ui/invoices/pagination';

export default async function InvoicesPage({
  searchParams,
}: {
  searchParams?: { page?: string; q?: string } | Promise<any>;
}) {
  const sp = await searchParams;
  // Map placeholder data to the shape expected by the Table component
  const invoices: InvoicesTable[] = placeholderInvoices.map((inv, idx) => {
    const customer = customers.find((c) => c.id === inv.customer_id) || {
      name: "Unknown",
      email: "unknown@example.com",
      image_url: "/customers/default.png",
    };
    return {
      id: `inv-${idx}`,
      customer_id: inv.customer_id,
      name: customer.name,
      email: customer.email,
      image_url: customer.image_url,
      date: inv.date,
      amount: inv.amount,
      status: inv.status as 'pending' | 'paid',
    };
  });

  const currentPage = Number(sp?.page ?? '1');
  const query = sp?.q ?? '';

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Invoices', href: '/dashboard/invoices', active: true },
        ]}
      />
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-4">Invoices</h1>
        <CreateInvoice />
      </div>
      {/* Pasamos los props requeridos */}
      <Table query={query} currentPage={currentPage} invoices={invoices} />
      <div className="mt-6">
        <Pagination totalPages={Math.ceil(placeholderInvoices.length / 6)} currentPage={currentPage} query={query} />
      </div>
    </main>
  );
}