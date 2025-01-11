import { navLinks } from "@/app/dashboard/layout";

export function DashboardItems() {
    return (
        <div>
            {navLinks.map((link) => (
                <div key={link.href}>
                    <a href={link.href}>{link.name}</a>
                </div>
            ))}
        </div>
    );
}