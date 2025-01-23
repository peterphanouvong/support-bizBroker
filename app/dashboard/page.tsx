import { EmptyState } from "@/components/dashboard/EmptyState";
import { requireUser } from "../utils/requireUser";

export default async function DashboardIndexPage({}) {
  const user = await requireUser();
  console.log(user);
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-5">Your Listings</h1>

      <EmptyState
        title="You don't have any listings yet."
        href="/dashboard/sites/new"
        description="You currently dont have any listings. Please create one when you are ready."
        buttonText="Create Listing"
      />
      <h1 className="text-2xl font-semibold mb-5 mt-10">Recent Articles</h1>

      <EmptyState
        title="You don't have any articles yet."
        href="/dashboard/sites"
        description="You currently dont have any articles. Please create one when you are ready."
        buttonText="Create Article"
      />
    </div>
  );
}
