"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { HoverCard } from "@/components/animations/hover-card"
import { ScrollProgress } from "@/components/animations/scroll-progress"
import { StaggerIn } from "@/components/animations/stagger-in"
import { mockSaunas } from "@/data/mockSaunas"
import { MapPin, Search, Star, Thermometer } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"

function SearchContent() {
  const searchParams = useSearchParams()
  const searchType = searchParams.get("type") || "keyword"
  const searchQuery = searchParams.get("q") || ""
  const [filteredSaunas, setFilteredSaunas] = useState(mockSaunas)

  useEffect(() => {
    // 検索条件に基づいてフィルタリング
    if (!searchQuery) {
      setFilteredSaunas(mockSaunas)
      return
    }

    const filtered = mockSaunas.filter((sauna) => {
      const query = searchQuery.toLowerCase()
      switch (searchType) {
        case "keyword":
          return (
            sauna.name.toLowerCase().includes(query) ||
            sauna.location.toLowerCase().includes(query) ||
            sauna.description.toLowerCase().includes(query) ||
            sauna.features.some((f) => f.toLowerCase().includes(query))
          )
        case "prefecture":
          return sauna.location.includes(searchQuery)
        case "feature":
          return sauna.features.some((f) => f.toLowerCase().includes(query))
        default:
          return true
      }
    })

    setFilteredSaunas(filtered)
  }, [searchQuery, searchType])

  const getSearchTypeLabel = () => {
    switch (searchType) {
      case "keyword":
        return "キーワード"
      case "prefecture":
        return "都道府県"
      case "feature":
        return "特徴"
      default:
        return "キーワード"
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />

      {/* 検索結果ヘッダー */}
      <section className="bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <Search className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {getSearchTypeLabel()}検索: <span className="font-semibold">{searchQuery || "すべて"}</span>
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                検索結果
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {filteredSaunas.length}件のサウナ施設が見つかりました
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 検索結果一覧 */}
      <section className="py-8 md:py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {filteredSaunas.length === 0 ? (
            <FadeIn>
              <div className="text-center py-16">
                <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  検索結果が見つかりませんでした
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  別のキーワードで検索してみてください
                </p>
                <Link href="/">
                  <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                    トップページに戻る
                  </button>
                </Link>
              </div>
            </FadeIn>
          ) : (
            <StaggerIn direction="up" staggerDelay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredSaunas.map((sauna) => (
                  <HoverCard key={sauna.id}>
                    <Link href={`/saunas/${sauna.id}`}>
                      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        <div className="relative h-48 w-full">
                          <Image
                            src={sauna.image}
                            alt={sauna.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {sauna.name}
                          </h3>
                          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-sm">{sauna.location}</span>
                          </div>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-amber-500 fill-amber-500 mr-1" />
                              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                {sauna.rating}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Thermometer className="h-4 w-4 text-red-500 mr-1" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {sauna.temperature}°C
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1">
                            {sauna.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {sauna.features.map((feature, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs rounded-full"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </HoverCard>
                ))}
              </div>
            </StaggerIn>
          )}
        </div>
      </section>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">読み込み中...</p>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}
