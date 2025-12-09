import { HomeRoutesSection } from "@/components/home-routes-section"
import { HomeSearchForm } from "@/components/home-search-form"
import { Award, BookOpen, ChevronRight, Clock, Heart, MessageCircle, Moon, Search, Sparkles, Star, User, Users, Utensils } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Static Background Image */}
      <section id="hero" className="relative w-full overflow-hidden h-[600px] md:h-[700px] lg:h-[800px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/sauna-1.jpeg"
            alt="Sauna search service background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 z-10" />

        {/* Hero Content */}
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="container mx-auto px-4 pt-20 sm:pt-24">
            <div className="max-w-4xl mx-auto text-center">
              {/* Main Catch Copy */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 drop-shadow-md leading-tight">
                サウナ出たら、迷わず<span className="text-amber-400">サ飯</span>。
              </h1>
              <div className="flex items-center justify-center gap-2 mb-4 text-white/90">
                <Award className="h-4 w-4" />
                <span className="text-sm">サウナ好きの95%が満足</span>
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-6 drop-shadow-md">
                ととのい後の一杯まで、セットで見つかる。
              </p>

              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto drop-shadow-md">
                今いる場所・いつものサウナから、ベストなサ飯だけをレコメンド。
              </p>

              <HomeSearchForm />
            </div>
          </div>
        </div>
      </section>

      {/* 使った未来を見せるセクション */}
      <section id="future" className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
              サウナ後、<span className="text-amber-500">こんな夜になる。</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              あなたのととのい体験が、もっと良くなる未来を
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* カード1: ととのいのまま、行列ゼロのラーメンへ */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border-2 border-amber-200 dark:border-amber-700 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                NEW
              </div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="flex items-center gap-2">
                  <div className="bg-amber-500 text-white p-2 rounded-lg">
                    <User className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="bg-orange-500 text-white p-2 rounded-lg">
                    <Utensils className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white leading-tight">
                ととのいのまま、行列ゼロのラーメンへ。
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                サウナの温度・場所・時間帯から、混雑少なめのサ飯を提案。汗が冷める前に着ける店だけを表示。
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                <Clock className="h-3 w-3" />
                <span>リアルタイムで混雑状況を分析中</span>
              </div>
            </div>

            {/* カード2: サウナ仲間と"いつものルート"ができる */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-blue-100 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="bg-blue-500 text-white p-2 rounded-lg">
                  <Users className="h-5 w-5 md:h-6 md:w-6" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white leading-tight">
                サウナ仲間と<span className="text-blue-600 dark:text-blue-400">"いつものルート"</span>ができる。
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                お気に入りサウナとサ飯をセットで保存。『このコンビ、また行こう』がすぐ呼び出せる。
              </p>
            </div>

            {/* カード3: 仕事終わりのご褒美ルーティンが決まる */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border-2 border-purple-200 dark:border-purple-700 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                人気
              </div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="bg-purple-500 text-white p-2 rounded-lg">
                  <Moon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white leading-tight">
                仕事終わりの<span className="text-purple-600 dark:text-purple-400">ご褒美ルーティン</span>が決まる。
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                平日夜でも、帰り道で寄れるサウナ＋飯ルートを自動で提案。
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                <Sparkles className="h-3 w-3" />
                <span>AIが最適なルートを計算中</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 使い方は、3ステップだけ */}
      <section id="steps" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
              使い方は、<span className="text-amber-500">3ステップだけ。</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              複雑な設定は不要。すぐに始められます
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {/* ステップ1: サウナ or エリアを検索 */}
              <div className="flex flex-col items-center text-center relative">
                <div className="relative mb-6">
                  <div className="absolute -top-2 -left-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10 shadow-lg">
                    スタート
                  </div>
                  {/* スマホ画面のモック */}
                  <div className="w-[200px] h-[360px] md:w-[240px] md:h-[432px] bg-white dark:bg-gray-900 rounded-[2rem] p-3 shadow-2xl border-4 border-amber-300 dark:border-amber-700">
                    <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-4 flex flex-col items-center justify-center">
                      <div className="bg-amber-500 text-white p-4 rounded-xl mb-4">
                        <Search className="h-8 w-8 md:h-10 md:w-10" />
                      </div>
                      <div className="w-full bg-white dark:bg-gray-800 rounded-lg p-3 mb-2 shadow-sm">
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                      </div>
                      <div className="w-full bg-white dark:bg-gray-800 rounded-lg p-2 shadow-sm">
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                  {/* ステップ番号 */}
                  <div className="absolute -top-4 -right-4 bg-amber-500 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-lg md:text-xl shadow-lg">
                    1
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  サウナ or エリアを検索
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  行きたいサウナやエリア名を入力するだけ
                </p>
                <div className="mt-2 text-xs text-amber-600 dark:text-amber-400 font-semibold">
                  30秒で完了
                </div>
              </div>

              {/* ステップ2: サ飯候補がセットで出る */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  {/* スマホ画面のモック */}
                  <div className="w-[200px] h-[360px] md:w-[240px] md:h-[432px] bg-white dark:bg-gray-900 rounded-[2rem] p-3 shadow-2xl border-4 border-gray-200 dark:border-gray-700">
                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-4 flex flex-col gap-3">
                      {/* サウナカード */}
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                        <div className="h-16 bg-amber-200 dark:bg-amber-800 rounded mb-2"></div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-1"></div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                      </div>
                      {/* 矢印 */}
                      <div className="flex justify-center">
                        <ChevronRight className="h-6 w-6 text-amber-500 rotate-90" />
                      </div>
                      {/* サ飯カード */}
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                        <div className="h-16 bg-orange-200 dark:bg-orange-800 rounded mb-2"></div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-1"></div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                  {/* ステップ番号 */}
                  <div className="absolute -top-4 -right-4 bg-blue-500 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-lg md:text-xl shadow-lg">
                    2
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  サ飯候補がセットで出る
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  最適なサ飯が自動で提案される
                </p>
              </div>

              {/* ステップ3: 行ったらログを残して、次はもっと最適に */}
              <div className="flex flex-col items-center text-center relative">
                <div className="relative mb-6">
                  <div className="absolute -top-2 -left-2 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10 shadow-lg">
                    完了
                  </div>
                  {/* スマホ画面のモック */}
                  <div className="w-[200px] h-[360px] md:w-[240px] md:h-[432px] bg-white dark:bg-gray-900 rounded-[2rem] p-3 shadow-2xl border-4 border-purple-300 dark:border-purple-700">
                    <div className="w-full h-full bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-4 flex flex-col gap-3">
                      {/* ログカード */}
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm flex-1 flex flex-col justify-center">
                        <div className="bg-purple-500 text-white p-3 rounded-xl mb-3 mx-auto">
                          <BookOpen className="h-6 w-6 md:h-8 md:w-8" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto"></div>
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto"></div>
                        </div>
                        <div className="mt-4 flex gap-2 justify-center">
                          <div className="w-8 h-8 bg-amber-200 dark:bg-amber-800 rounded"></div>
                          <div className="w-8 h-8 bg-orange-200 dark:bg-orange-800 rounded"></div>
                          <div className="w-8 h-8 bg-purple-200 dark:bg-purple-800 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ステップ番号 */}
                  <div className="absolute -top-4 -right-4 bg-purple-500 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-lg md:text-xl shadow-lg">
                    3
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  行ったらログを残して、<br className="hidden sm:block" />
                  次はもっと最適に
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  記録を残すことで、より良い提案が
                </p>
                <div className="mt-2 flex items-center gap-1 text-xs text-purple-600 dark:text-purple-400 font-semibold">
                  <BookOpen className="h-3 w-3" />
                  <span>ログを残すと特典あり</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* サウナプラスで変わった人たちの声 */}
      <section id="testimonials" className="py-12 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
              サウナプラスで変わった人たちの声
            </h2>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>150+ ユーザー</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span>4.8/5 評価</span>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* 口コミ1 */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-200 dark:border-amber-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                  人気No.1
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    <User className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">サウナ好きAさん</div>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">3日前</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                  「毎回サ飯悩んでたのがなくなった。」
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Heart className="h-3 w-3" />
                    <span>24</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" />
                    <span>5</span>
                  </div>
                </div>
              </div>

              {/* 口コミ2 */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    <User className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">サウナ好きBさん</div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-blue-400 text-blue-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                  「今では<span className="font-semibold text-blue-600 dark:text-blue-400">『北欧→○○』</span>が鉄板ルートです。」
                </p>
              </div>

              {/* 口コミ3 */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-800 border-dashed">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    <User className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">ユーザーの声</div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-purple-400 text-purple-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed italic">
                  ここにユーザーの声が追加されます
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 人気のサウナ×サ飯ルートを少しだけ公開 */}
      <HomeRoutesSection />

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-900 dark:to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            理想のサウナを見つける準備はできていますか？
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto mb-6 md:mb-10">
            今すぐサウナを検索して、あなたに最適なサウナを見つけましょう。私たちのサービスは、簡単で正確な検索で理想のサウナ体験をサポートします。
          </p>
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full border border-amber-500/30">
            <span className="text-sm text-amber-300">
              今週限定: 新規登録で特典あり
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/search" className="w-full sm:w-auto">
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-6 md:px-8 py-3 w-full sm:w-auto shadow-xl rounded-lg transition-all duration-200 flex items-center gap-2 justify-center">
                <Search className="h-5 w-5" />
                サウナを検索
                <ChevronRight className="h-4 w-4" />
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="text-white border-2 border-white hover:bg-white/10 hover:text-white font-semibold px-6 md:px-8 py-3 w-full sm:w-auto rounded-lg transition-all duration-200 flex items-center gap-2 justify-center">
                お問い合わせ
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span>毎日更新される最新情報</span>
            <Sparkles className="h-4 w-4 text-amber-400" />
          </div>
        </div>
      </section>
    </div>
  )
}
