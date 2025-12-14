import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import EditInvoiceForm from "@/app/ui/invoices/edit-form";
import {
  invoices as placeholderInvoices,
  customers,
} from "@/app/lib/placeholder-data";
import type { CustomerField, InvoiceForm } from "@/app/lib/definitions";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: { params: { id: string } } | any) {
  const p = await params;
  const rawId = p?.id ?? "";
  // Expect ids like `inv-0`, `inv-1` — extract index
  const idx = Number(rawId.replace(/^inv-/, ""));
  if (Number.isNaN(idx) || idx < 0 || idx >= placeholderInvoices.length) {
    notFound();
  }

  const found = placeholderInvoices[idx];
  if (!found) return notFound();

  const invoice: InvoiceForm = {
    id: rawId,
    customer_id: found.customer_id,
    amount: found.amount,
    status: found.status as "pending" | "paid",
  };

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit",
            href: `/dashboard/invoices/${rawId}/edit`,
            active: true,
          },
        ]}
      />
      <h1 className="text-2xl font-bold mb-4">Edit Invoice</h1>
      <EditInvoiceForm
        invoice={invoice}
        customers={customers as CustomerField[]}
      />
    </main>
  );
}
