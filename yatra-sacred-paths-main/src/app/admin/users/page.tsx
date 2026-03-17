import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

const users = [
  { name: "Anita Kapoor", email: "anita@example.com", role: "Pilgrim" },
  { name: "Rohit Bansal", email: "rohit@example.com", role: "Pilgrim" },
  { name: "Admin", email: "admin@yatra.com", role: "Admin" },
];

export const metadata: Metadata = buildMetadata({
  title: "Admin · Users",
  description: "Manage pilgrim accounts and roles.",
  path: "/admin/users",
});

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display text-deep-brown">Manage users</h1>
        <p className="text-sm text-muted-foreground">Monitor pilgrim accounts, preferences, and roles.</p>
      </div>
      <div className="rounded-3xl border border-border/60 bg-white/80 p-6">
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase text-muted-foreground">
            <tr>
              <th className="pb-3">Name</th>
              <th className="pb-3">Email</th>
              <th className="pb-3">Role</th>
            </tr>
          </thead>
          <tbody className="text-sm text-muted-foreground">
            {users.map((user) => (
              <tr key={user.email} className="border-t border-border/60">
                <td className="py-3 font-semibold text-deep-brown">{user.name}</td>
                <td className="py-3">{user.email}</td>
                <td className="py-3">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
