import Link from "next/link";
import { CakeSlice, ArrowUpRight } from "lucide-react";

export function Navbar() {
  return (
    <header className="bakery-header">
      <div className="bakery-wrap header-inner">
        <Link href="/" className="bakery-brand" aria-label="Fatima Cake home">
          <CakeSlice size={29} strokeWidth={1.5} />
          <span>
            Fatima Cake<small>CAKES & LITTLE TREATS</small>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/menu">Our menu</Link>
          <Link href="/#how-to-order" className="ordering-nav">
            How to order
          </Link>
          <a
            href="https://wa.me/905528535323"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-contact"
          >
            Let’s talk cake <ArrowUpRight size={17} />
          </a>
        </nav>
      </div>
    </header>
  );
}
