import { currentUser } from "@clerk/nextjs";
import { Socket } from "./Socket";

export default async function Home({ params }: { params: { id: string } }) {
  const user = await currentUser();

  const id = params.id;

  return (
    <div className="col-start-4 col-span-6 h-screen">
      <Socket roomId={id} userId={user?.id as string} userName={user?.username as string} />
    </div>
  );
}
