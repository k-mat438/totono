"use client"

import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Zap } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function HomeSearchForm() {
  const router = useRouter()
  const [searchType, setSearchType] = useState("area")
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      return
    }

    const params = new URLSearchParams({
      type: searchType,
      q: searchQuery,
    })
    router.push(`/search?${params.toString()}`)
  }

  const handleLocationSearch = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          const params = new URLSearchParams({
            type: "location",
            lat: latitude.toString(),
            lng: longitude.toString(),
          })
          router.push(`/search?${params.toString()}`)
        },
        (error) => {
          console.error("位置情報の取得に失敗しました:", error)
          alert("位置情報の取得に失敗しました。検索ボックスから検索してください。")
        }
      )
    } else {
      alert("お使いのブラウザは位置情報をサポートしていません。")
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/20">
      <Tabs value={searchType} onValueChange={setSearchType} className="w-full">
        <TabsList className="w-full bg-transparent h-auto p-0 mb-4 sm:mb-6 flex flex-wrap gap-0 border-b-0">
          <TabsTrigger
            value="area"
            className="flex-1 min-w-[120px] bg-white text-amber-900 font-semibold px-4 py-3 rounded-tl-lg rounded-tr-lg data-[state=active]:bg-white data-[state=active]:text-amber-900 data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-600 border-r border-gray-200 relative data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-[-1px] data-[state=active]:after:left-1/2 data-[state=active]:after:transform data-[state=active]:after:-translate-x-1/2 data-[state=active]:after:w-0 data-[state=active]:after:h-0 data-[state=active]:after:border-l-[8px] data-[state=active]:after:border-r-[8px] data-[state=active]:after:border-t-[8px] data-[state=active]:after:border-l-transparent data-[state=active]:after:border-r-transparent data-[state=active]:after:border-t-white"
          >
            エリアから
          </TabsTrigger>
          <TabsTrigger
            value="sauna"
            className="flex-1 min-w-[120px] bg-gray-100 text-gray-600 font-semibold px-4 py-3 rounded-bl-lg rounded-br-lg data-[state=active]:bg-white data-[state=active]:text-amber-900 data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-600 border-l border-gray-200 relative data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-[-1px] data-[state=active]:after:left-1/2 data-[state=active]:after:transform data-[state=active]:after:-translate-x-1/2 data-[state=active]:after:w-0 data-[state=active]:after:h-0 data-[state=active]:after:border-l-[8px] data-[state=active]:after:border-r-[8px] data-[state=active]:after:border-t-[8px] data-[state=active]:after:border-l-transparent data-[state=active]:after:border-r-transparent data-[state=active]:after:border-t-white"
          >
            サウナから
          </TabsTrigger>
        </TabsList>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 w-full">
          <div className="flex-1 flex flex-col sm:flex-row gap-3 sm:gap-0">
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="エリア名・駅名・サウナ名で検索"
              className="w-full h-12 sm:h-14 rounded-lg sm:rounded-l-lg sm:rounded-r-none border-2 border-gray-200 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:border-amber-400 text-base sm:text-lg px-4 sm:px-6"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch()
                }
              }}
            />
            <button
              type="button"
              onClick={handleLocationSearch}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 sm:px-6 h-12 sm:h-14 rounded-lg sm:rounded-none border-2 border-gray-200 transition-colors duration-200 flex items-center justify-center whitespace-nowrap gap-2"
            >
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">現在地から探す</span>
            </button>
          </div>
          <button
            type="button"
            onClick={handleSearch}
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold px-6 sm:px-8 h-12 sm:h-14 rounded-lg sm:rounded-r-lg sm:rounded-l-none transition-all duration-200 flex items-center justify-center whitespace-nowrap shadow-lg"
          >
            <span className="flex items-center gap-2">
              サ飯を探す
              <Zap className="h-4 w-4" />
            </span>
          </button>
        </div>
      </Tabs>
    </div>
  )
}
