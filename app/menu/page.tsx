import { MenuCatalog } from "@/components/menu-catalog";
import { categories } from "@/lib/menu-data";

export default async function MenuPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const initialCategory = categories.some((c) => c.id === category)
    ? category!
    : "all";
  return (
    <MenuCatalog
      key={initialCategory}
      initialCategory={initialCategory}
    />
  );
}
