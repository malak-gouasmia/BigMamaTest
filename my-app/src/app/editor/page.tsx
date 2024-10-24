import { Room } from "@/app/Room";
import { CollaborativeEditor } from "@/components/CollaborativeEditor";

export default function Editor() {
  return (
    <main>
      <Room>
        <CollaborativeEditor />
      </Room>
    </main>
  );
}