"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { menuItems } from "@/lib/menu-data";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ItemDetailPage({ params }: PageProps) {
  const { id } = await params;
  const item = menuItems.find((item) => item.id === id);

  if (!item) {
    notFound();
  }

  const handleOrder = () => {
    const message = `Hi! I'd like to order ${item.name}. Could you please provide more details about availability and pricing?`;
    window.open(
      `https://wa.me/+905528535323?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/menu">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Menu
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-2 capitalize">{item.category}</Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {item.name}
              </h1>
              <p className="text-lg text-gray-600 mb-4">{item.description}</p>
              {item.price && (
                <p className="text-2xl font-bold text-pink-600">
                  ${item.price}
                </p>
              )}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Ingredients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {item.ingredients.map((ingredient, index) => (
                    <Badge key={index} variant="secondary">
                      {ingredient}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Button
              onClick={handleOrder}
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Order via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
