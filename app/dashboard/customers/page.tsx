import CustomersTable from "@/app/ui/customers/table";
import { customers as placeholderCustomers } from "@/app/lib/placeholder-data";
import { FormattedCustomersTable } from "@/app/lib/definitions";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";

export default function CustomerPage() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Customers", href: "/dashboard/customers", active: true },
        ]}
      />
      {/* Convertir datos de placeholder a la forma esperada */}
      <CustomersTable
        customers={placeholderCustomers.map(
          (customer) =>
            ({
              id: customer.id,
              name: customer.name,
              email: customer.email,
              image_url: customer.image_url,
              total_invoices: 10,
              total_pending: "110",
              total_paid: "20",
            } as FormattedCustomersTable)
        )}
      />
    </main>
  );
}
