"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Trash2, Edit, Plus } from "lucide-react"
import { menuItems, type MenuItem } from "@/lib/menu-data"

export default function DashboardPage() {
  const [items, setItems] = useState<MenuItem[]>(menuItems)
  const [isEditing, setIsEditing] = useState<string | null>(null)
  const [isAdding, setIsAdding] = useState(false)
  const [newItem, setNewItem] = useState<Partial<MenuItem>>({
    name: "",
    category: "cake",
    description: "",
    ingredients: [],
    price: 0,
  })

  const handleDelete = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const handleEdit = (item: MenuItem) => {
    setIsEditing(item.id)
    setNewItem(item)
  }

  const handleSave = () => {
    if (isEditing) {
      setItems(items.map((item) => (item.id === isEditing ? { ...(newItem as MenuItem), id: isEditing } : item)))
      setIsEditing(null)
    } else {
      const id = Date.now().toString()
      setItems([
        ...items,
        {
          ...(newItem as MenuItem),
          id,
          image: "/placeholder.svg?height=300&width=300",
        },
      ])
      setIsAdding(false)
    }
    setNewItem({
      name: "",
      category: "cake",
      description: "",
      ingredients: [],
      price: 0,
    })
  }

  const handleCancel = () => {
    setIsEditing(null)
    setIsAdding(false)
    setNewItem({
      name: "",
      category: "cake",
      description: "",
      ingredients: [],
      price: 0,
    })
  }

  const handleIngredientsChange = (value: string) => {
    const ingredients = value
      .split(",")
      .map((ing) => ing.trim())
      .filter((ing) => ing)
    setNewItem({ ...newItem, ingredients })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Menu Dashboard</h1>
          <Button onClick={() => setIsAdding(true)} className="bg-pink-600 hover:bg-pink-700">
            <Plus className="w-4 h-4 mr-2" />
            Add New Item
          </Button>
        </div>

        {/* Add/Edit Form */}
        {(isAdding || isEditing) && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{isEditing ? "Edit Item" : "Add New Item"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={newItem.name || ""}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={newItem.category}
                    onValueChange={(value) => setNewItem({ ...newItem, category: value as MenuItem["category"] })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cake">Cake</SelectItem>
                      <SelectItem value="cupcake">Cupcake</SelectItem>
                      <SelectItem value="pudding">Pudding</SelectItem>
                      <SelectItem value="donuts">Donuts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newItem.description || ""}
                  onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="ingredients">Ingredients (comma separated)</Label>
                <Input
                  id="ingredients"
                  value={newItem.ingredients?.join(", ") || ""}
                  onChange={(e) => handleIngredientsChange(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  id="price"
                  type="number"
                  value={newItem.price || ""}
                  onChange={(e) => setNewItem({ ...newItem, price: Number.parseFloat(e.target.value) })}
                />
              </div>

              <div className="flex gap-2">
                <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                  Save
                </Button>
                <Button onClick={handleCancel} variant="outline">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Items List */}
        <div className="grid gap-4">
          {items.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <Badge className="capitalize">{item.category}</Badge>
                      {item.price && <Badge variant="secondary">${item.price}</Badge>}
                    </div>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {item.ingredients.map((ingredient, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {ingredient}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button size="sm" variant="outline" onClick={() => handleEdit(item)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
