import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-orange-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-pink-600">Fatima Cake</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Delicious homemade cakes, cupcakes, puddings, and donuts made with love and the finest ingredients. Every
            bite tells a story of passion and tradition.
          </p>
          <Link href="/menu">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-lg px-8 py-3">
              View Our Menu
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Fatima Cake?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
                <p className="text-gray-600">
                  Every cake is crafted with care and attention to detail, using traditional recipes passed down through
                  generations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Star className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600">
                  We use only the finest ingredients to ensure every bite is a delightful experience you'll remember.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Family Tradition</h3>
                <p className="text-gray-600">
                  A family business dedicated to bringing joy and sweetness to your special moments and everyday
                  celebrations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pink-600 py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Taste Heaven?</h2>
          <p className="text-xl mb-8 opacity-90">Explore our delicious menu and find your perfect sweet treat today!</p>
          <Link href="/menu">
            <Button size="lg" variant="outline" className="bg-white text-pink-600 hover:bg-gray-100 border-white">
              Browse Menu
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
