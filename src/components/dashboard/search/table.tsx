import { columns } from "./columns";
import { DataTable } from "./data-table";
import skins from "@/lib/skins";

export default function Table() {
  const filteredSkins = skins.map((skin) => ({
    full_name: skin.full_name,
    name: skin.name,
    skin: skin.skin_name,
    wear: skin.status,
  }));

  return (
    <div className="col-span-5">
      <div className="px-10 py-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight mt-4">Skin Searcher</h1>
            <p className="text-sm text-muted-foreground">Search for your favorite skins</p>
          </div>
        </div>
      </div>
      <div className="px-10 mx-auto py-10">
        <DataTable
          columns={columns}
          data={filteredSkins}
        />
      </div>
    </div>
  );
}
