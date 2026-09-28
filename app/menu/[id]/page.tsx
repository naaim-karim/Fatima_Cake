import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { menuItems, categoryName } from "@/lib/menu-data";

export default async function ItemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = menuItems.find((i) => i.id === id);
  if (!item) notFound();
  const message = `Hi! I'd like to order ${item.name}. Could you please confirm availability and pricing?`;
  return (
    <section className="detail-section bakery-wrap">
      <Link href="/menu" className="simple-link detail-back">
        <ArrowLeft size={17} /> Back to the menu
      </Link>
      <div className="cake-detail-grid">
        <figure>
          <div className="detail-image">
            <Image
              src={item.image}
              alt={`Illustrative ${item.name}`}
              fill
              priority
              sizes="(max-width: 760px) 100vw, 50vw"
            />
          </div>
          <figcaption>
            Illustrative image · Actual appearance may vary.
          </figcaption>
        </figure>
        <div className="cake-detail-copy">
          <p className="eyebrow">{categoryName(item.category)}</p>
          <h1>{item.name}</h1>
          <p className="detail-description">{item.description}</p>
          {item.price !== undefined && (
            <p className="detail-price">
              ${item.price}
              <span>Confirm price & availability when ordering.</span>
            </p>
          )}
          <div className="cake-ingredients">
            <h2>What’s inside</h2>
            <ul>
              {item.ingredients.map((ingredient) => (
                <li key={ingredient}>
                  <Check size={15} />
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <a
            href={`https://wa.me/905528535323?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bakery-button order-button"
          >
            Order via WhatsApp <ArrowUpRight size={18} />
          </a>
          <p className="order-note">
            Your chosen treat is included in the message. Tell us your date and
            any requests, and we’ll confirm the details.
          </p>
        </div>
      </div>
    </section>
  );
}
