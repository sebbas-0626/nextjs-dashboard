// app/dashboard/page.tsx
import { revenue } from "@/app/lib/placeholder-data";
import RevenueChart from "../ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import {
  invoices as placeholderInvoices,
  customers,
} from "@/app/lib/placeholder-data";
import lusitana from "../ui/fonts";
import { Card } from "../ui/dashboard/cards";

export default async function Page() {
  return (
    <main className="bg-gray-100 p-6 md:p-10 lg:p-16 flex flex-col min-h-screen">
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      {/* Contenedor flexible */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Primer componente */}
        <div className="flex-1 min-w-0">
          <RevenueChart revenue={revenue} />
        </div>

        {/* Segundo componente */}
        <div className="flex-1 min-w-0">
          {/* Convert placeholder invoices to the shape expected by LatestInvoices */}
          <LatestInvoices
            latestInvoices={placeholderInvoices.map((inv, idx) => {
              const customer = customers.find(
                (c) => c.id === inv.customer_id
              ) || {
                name: "Unknown",
                email: "unknown@example.com",
                image_url: "/customers/default.png",
              };
              return {
                id: `inv-${idx}`,
                name: customer.name,
                email: customer.email,
                image_url: customer.image_url,
                amount: inv.amount.toString(),
              };
            })}
          />
        </div>
      </div>
      {/* cards dashboard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <Card title="total de invoices" value="10" type="pending" />
        {/* Puedes agregar más tarjetas aquí */}
      </div>
    </main>
  );
}
