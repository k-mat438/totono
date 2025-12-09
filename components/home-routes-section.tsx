"use client"

import { ChevronRight, Flame, TrendingUp, Utensils } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function HomeRoutesSection() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['hero']))

  return (
    <section id="routes" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
            人気のサウナ×サ飯ルートを<span className="text-amber-500">少しだけ</span>公開
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg">
            ランキングの"チラ見せ" - 登録すると全ランキングが見られます
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 rounded-full">
            <span className="text-sm font-semibold text-amber-700 dark:text-amber-300">
              今週 1221人が閲覧
            </span>
          </div>
          <button
            onClick={() => setExpandedSections(prev => {
              const newSet = new Set(prev)
              if (newSet.has('routes')) {
                newSet.delete('routes')
              } else {
                newSet.add('routes')
              }
              return newSet
            })}
            className="mt-4 text-sm text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-semibold flex items-center gap-1 mx-auto"
          >
            {expandedSections.has('routes') ? '詳細を閉じる' : '詳細を見る'}
            <ChevronRight className={`h-4 w-4 transition-transform ${expandedSections.has('routes') ? 'rotate-90' : ''}`} />
          </button>
          {expandedSections.has('routes') && (
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              <p>登録ユーザー限定で、全エリアのランキング、詳細レビュー、混雑予測データにアクセスできます。</p>
            </div>
          )}
        </div>

        <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
          {/* 東京エリア 人気ルート TOP3 */}
          <div>
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="bg-amber-500 text-white p-2 rounded-lg">
                <TrendingUp className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                東京エリア 人気ルート TOP3
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {[1, 2, 3].map((rank) => (
                <Link
                  key={rank}
                  href={`/search?type=route&area=tokyo&rank=${rank}`}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div className="p-4 md:p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm ${
                            rank === 1 ? 'bg-amber-500' : rank === 2 ? 'bg-gray-400' : 'bg-orange-600'
                          }`}>
                            {rank}
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">位</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {/* サウナ */}
                        <div className="flex items-center gap-2 p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                          <div className="w-10 h-10 bg-amber-200 dark:bg-amber-800 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Flame className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                              サウナ名{rank}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              東京都
                            </div>
                          </div>
                        </div>
                        {/* 矢印 */}
                        <div className="flex justify-center">
                          <ChevronRight className="h-5 w-5 text-gray-400 rotate-90 group-hover:text-amber-500 transition-colors" />
                        </div>
                        {/* サ飯 */}
                        <div className="flex items-center gap-2 p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                          <div className="w-10 h-10 bg-orange-200 dark:bg-orange-800 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Utensils className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                              サ飯店名{rank}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              徒歩5分
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 大阪 濃厚豚骨サ飯ルート TOP3 */}
          <div>
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="bg-orange-500 text-white p-2 rounded-lg">
                <Utensils className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                大阪 濃厚豚骨サ飯ルート TOP3
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {[1, 2, 3].map((rank) => (
                <Link
                  key={rank}
                  href={`/search?type=route&area=osaka&rank=${rank}`}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div className="p-4 md:p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm ${
                            rank === 1 ? 'bg-amber-500' : rank === 2 ? 'bg-gray-400' : 'bg-orange-600'
                          }`}>
                            {rank}
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">位</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {/* サウナ */}
                        <div className="flex items-center gap-2 p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                          <div className="w-10 h-10 bg-amber-200 dark:bg-amber-800 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Flame className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                              サウナ名{rank}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              大阪府
                            </div>
                          </div>
                        </div>
                        {/* 矢印 */}
                        <div className="flex justify-center">
                          <ChevronRight className="h-5 w-5 text-gray-400 rotate-90 group-hover:text-orange-500 transition-colors" />
                        </div>
                        {/* サ飯 */}
                        <div className="flex items-center gap-2 p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                          <div className="w-10 h-10 bg-orange-200 dark:bg-orange-800 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Utensils className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                              濃厚豚骨ラーメン{rank}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              徒歩{rank * 2}分
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
