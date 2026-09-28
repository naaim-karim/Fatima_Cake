import Link from "next/link";
import { CakeSlice, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bakery-footer">
      <div className="bakery-wrap">
        <div className="footer-top">
          <Link href="/" className="bakery-brand">
            <CakeSlice size={29} strokeWidth={1.5} />
            <span>
              Fatima Cake<small>A LITTLE SOMETHING SWEET.</small>
            </span>
          </Link>
          <div className="footer-links">
            <Link href="/menu">Explore the menu</Link>
            <a
              href="https://wa.me/905528535323"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact on WhatsApp <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Fatima Cake</p>
          <p>Illustrative AI-generated imagery. Actual products may differ.</p>
        </div>
      </div>
    </footer>
  );
}
