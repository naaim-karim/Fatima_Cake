import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { menuItems, categoryName } from "@/lib/menu-data";

const collections = [
  {
    id: "cake",
    name: "Cakes",
    note: "The centre of the celebration",
    image: "/images/red-velvet.png",
  },
  {
    id: "cupcake",
    name: "Cupcakes",
    note: "Little cakes, lovely moments",
    image: "/images/strawberry-cupcakes.png",
  },
  {
    id: "pudding",
    name: "Puddings",
    note: "Something soft & spoonable",
    image: "/images/chocolate-pudding.png",
  },
  {
    id: "donuts",
    name: "Donuts",
    note: "A sweet little pick-me-up",
    image: "/images/glazed-donuts.png",
  },
];

export default function HomePage() {
  const featured = [menuItems[0], menuItems[4], menuItems[5]];
  return (
    <>
      <section className="cake-hero bakery-wrap">
        <div className="hero-copy">
          <p className="eyebrow">FATIMA CAKE · CAKES & LITTLE TREATS</p>
          <h1>
            A little sweetness.
            <br />
            <em>A lovely occasion.</em>
          </h1>
          <p className="hero-description">
            For the candles, the catch-ups, and the just-because. Find your
            cake, or a little something sweet, at Fatima Cake.
          </p>
          <div className="hero-actions">
            <Link href="/menu" className="bakery-button">
              Explore the menu <ArrowRight size={18} />
            </Link>
            <a href="#collections" className="simple-link">
              Find your favourite <ArrowUpRight size={17} />
            </a>
          </div>
          <p className="hero-footnote">Cakes, cupcakes, puddings & donuts</p>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            <Image
              src="/images/red-velvet.png"
              alt="Illustrative red velvet cake with cream cheese frosting and a slice"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 50vw"
            />
          </div>
          <span className="hero-tag">A slice of something lovely.</span>
        </div>
      </section>
      <div className="bakery-ribbon">
        <span>For big celebrations</span>
        <span aria-hidden="true">✳</span>
        <span>And little everyday joys</span>
        <span aria-hidden="true">✳</span>
        <span>Find your sweet spot</span>
      </div>
      <section id="collections" className="collections-section bakery-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE SWEET LINE-UP</p>
            <h2>What are you craving?</h2>
          </div>
          <Link href="/menu" className="simple-link">
            See the full menu <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="collection-grid">
          {collections.map((c) => (
            <Link
              key={c.id}
              href={`/menu?category=${c.id}`}
              className="collection-card"
            >
              <div className="collection-photo">
                <Image
                  src={c.image}
                  alt={`Illustrative ${c.name.toLowerCase()}`}
                  fill
                  sizes="(max-width: 600px) 45vw, 25vw"
                />
              </div>
              <div className="collection-title">
                <h3>{c.name}</h3>
                <ArrowUpRight size={20} />
              </div>
              <p>{c.note}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="featured-section">
        <div className="bakery-wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A FEW TO GET YOU STARTED</p>
              <h2>Meet your next sweet treat.</h2>
            </div>
            <p>
              Chocolate, berries, buttercream.
              <br />
              There’s a little something for every mood.
            </p>
          </div>
          <div className="featured-grid">
            {featured.map((item) => (
              <Link
                href={`/menu/${item.id}`}
                key={item.id}
                className="dessert-card"
              >
                <div className="dessert-photo">
                  <Image
                    src={item.image}
                    alt={`Illustrative ${item.name}`}
                    fill
                    sizes="(max-width: 600px) 100vw, 33vw"
                  />
                </div>
                <div className="dessert-meta">
                  <span>{categoryName(item.category)}</span>
                  <span>${item.price}</span>
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="dessert-link">
                  Take a closer look <ArrowUpRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section id="how-to-order" className="order-section bakery-wrap">
        <div>
          <p className="eyebrow">FROM YOUR SCREEN TO YOUR CELEBRATION</p>
          <h2>
            Pick your treat.
            <br />
            <em>Let’s talk cake.</em>
          </h2>
          <p>
            Choose something from the menu, then message us to discuss your
            order and confirm availability.
          </p>
          <a
            href="https://wa.me/905528535323"
            className="bakery-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire on WhatsApp <ArrowUpRight size={18} />
          </a>
        </div>
        <ol className="order-steps">
          <li>
            <span>01</span>
            <div>
              <h3>Find your favourite</h3>
              <p>Browse the flavours, ingredients, and prices.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Tell us what you have in mind</h3>
              <p>Send your chosen treat, occasion, date, and any requests.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Confirm the details</h3>
              <p>We’ll discuss availability and the arrangements with you.</p>
            </div>
          </li>
        </ol>
      </section>
    </>
  );
}
