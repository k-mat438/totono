"use client"

import { CountUp } from "@/components/animations/count-up"
import { FadeIn } from "@/components/animations/fade-in"
import { HoverCard } from "@/components/animations/hover-card"
import { ScaleIn } from "@/components/animations/scale-in"
import { ScrollProgress } from "@/components/animations/scroll-progress"
import { StaggerIn } from "@/components/animations/stagger-in"
import { AnimatedButton } from "@/components/ui/animated-button"
import { HoverButton } from "@/components/ui/hover-button"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, ChevronRight, Eye, Flame, Lightbulb, Search, Target, Thermometer } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />

      {/* Hero Section with Static Background Image */}
      <section className="relative w-full overflow-hidden h-[600px] md:h-[700px] lg:h-[800px]">
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

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Hero Content */}
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-4 py-2 bg-amber-500/90 text-white rounded-full text-sm font-medium mb-4"
              >
                最高品質のサウナ検索サービス
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-md">
                理想の<span className="text-amber-400">サウナ</span>を見つける
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-10 max-w-xl md:max-w-2xl mx-auto drop-shadow-md">
                全国のサウナ施設を簡単に検索できる革新的なサウナ検索サービス。あなたに最適なサウナを見つけます。
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href="/services" className="w-full sm:w-auto">
                  <AnimatedButton
                    size="lg"
                    className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 sm:px-8 w-full sm:w-auto"
                    hoverEffect="lift"
                    iconAnimation={true}
                  >
                    サービスを見る
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                </Link>
                <Link href="/projects" className="w-full sm:w-auto">
                  <HoverButton
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white/20 hover:text-white font-semibold px-6 sm:px-8 w-full sm:w-auto backdrop-blur-sm"
                    hoverEffect="glow"
                    rippleColor="rgba(255, 255, 255, 0.3)"
                  >
                    サウナを探す
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </HoverButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the page content remains the same */}
      {/* Mission & Vision Section */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-400 rounded-full text-sm font-medium mb-3 md:mb-4">
                私たちの目的
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                ミッションとビジョン
              </h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                私たちの基本原則に基づき、サウナ業界を変革し、ユーザーに永続的な価値を創造することを目指しています。
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 md:p-10 rounded-2xl shadow-md">
                <div className="flex items-center mb-4 md:mb-6 justify-center sm:justify-start">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-amber-100 dark:bg-amber-900 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-4"
                  >
                    <Target className="h-6 w-6 md:h-7 md:w-7 text-amber-600 dark:text-amber-400" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">私たちのミッション</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 text-sm sm:text-base text-center sm:text-left">
                  革新性、誠実さ、専門性を通じて、ユーザーの期待を超える卓越したサウナ検索サービスを提供します。私たちは以下に取り組んでいます：
                </p>
                <StaggerIn direction="up" staggerDelay={0.1}>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      ユーザーのサウナ体験を向上させる、正確で信頼性の高い検索機能の提供
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      サービス品質の向上、継続的改善、ユーザーフィードバックに基づく機能強化の文化の育成
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      透明な情報提供と倫理的な実践を通じて、ユーザー、サウナ施設、コミュニティとの永続的な関係の構築
                    </p>
                  </div>
                </StaggerIn>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.4}>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 md:p-10 rounded-2xl shadow-md">
                <div className="flex items-center mb-4 md:mb-6 justify-center sm:justify-start">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-amber-100 dark:bg-amber-900 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-4"
                  >
                    <Eye className="h-6 w-6 md:h-7 md:w-7 text-amber-600 dark:text-amber-400" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">私たちのビジョン</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 text-sm sm:text-base text-center sm:text-left">
                  最も信頼され、革新的なサウナ検索サービスとして、以下で認められることを目指します：
                </p>
                <StaggerIn direction="up" staggerDelay={0.1}>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      検索精度、情報の正確性、ユーザー満足度において卓越性の新基準を設定すること
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      ユーザビリティとパフォーマンスを最大化しながら、持続可能で拡張性の高いサービス基盤の構築
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      責任ある事業活動と有意義な関与を通じて、私たちが働くコミュニティにポジティブな変化をもたらすこと
                    </p>
                  </div>
                </StaggerIn>
              </div>
            </FadeIn>
          </div>

          <ScaleIn delay={0.6}>
            <div className="mt-10 md:mt-16 text-center">
              <div className="bg-amber-50 dark:bg-amber-900/30 p-6 md:p-8 rounded-2xl max-w-3xl mx-auto">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-amber-100 dark:bg-amber-900 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Lightbulb className="h-6 w-6 md:h-7 md:w-7 text-amber-600 dark:text-amber-400" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white">
                  私たちのアプローチ
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg mb-5 md:mb-6">
                  成功するサウナ検索サービスは、協力、革新、細部への注意という基盤の上に築かれると信じています。ユーザーのニーズを深く理解し、最先端技術を組み合わせることで、時代に耐えるサービスを実現します。
                </p>
                <Link href="/contact">
                  <AnimatedButton
                    className="bg-amber-500 hover:bg-amber-600 text-white font-semibold"
                    hoverEffect="shine"
                    iconRotate={true}
                  >
                    サウナを検索
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 md:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <StaggerIn direction="up" staggerDelay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <HoverCard>
                <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-amber-100 dark:bg-amber-900 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Flame className="h-7 w-7 md:h-8 md:w-8 text-amber-600 dark:text-amber-400" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">
                    正確な情報
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    最新で正確なサウナ情報を提供し、ユーザーが最適なサウナを見つけられるようサポートします。
                  </p>
                </div>
              </HoverCard>
              <HoverCard>
                <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-amber-100 dark:bg-amber-900 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Search className="h-7 w-7 md:h-8 md:w-8 text-amber-600 dark:text-amber-400" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">
                    簡単検索
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    エリア、設備、レビューなど、様々な条件でサウナを簡単に検索できます。
                  </p>
                </div>
              </HoverCard>
              <HoverCard className="sm:col-span-2 md:col-span-1">
                <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-amber-100 dark:bg-amber-900 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Thermometer className="h-7 w-7 md:h-8 md:w-8 text-amber-600 dark:text-amber-400" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">
                    詳細情報
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    温度、設備、営業時間など、サウナの詳細情報を分かりやすく提供します。
                  </p>
                </div>
              </HoverCard>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-16 bg-amber-500 dark:bg-amber-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 text-center max-w-5xl mx-auto">
            <FadeIn direction="up" delay={0.1}>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                  <CountUp end={500} suffix="+" />
                </div>
                <p className="text-black dark:text-gray-100 font-medium text-sm md:text-base">登録サウナ数</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                  <CountUp end={25} suffix="+" />
                </div>
                <p className="text-black dark:text-gray-100 font-medium text-sm md:text-base">年の経験</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                  <CountUp end={150} suffix="+" />
                </div>
                <p className="text-black dark:text-gray-100 font-medium text-sm md:text-base">登録ユーザー数</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                  <CountUp end={98} suffix="%" />
                </div>
                <p className="text-black dark:text-gray-100 font-medium text-sm md:text-base">お客様満足度</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 dark:bg-black text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              理想のサウナを見つける準備はできていますか？
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto mb-6 md:mb-10">
              今すぐサウナを検索して、あなたに最適なサウナを見つけましょう。私たちのサービスは、簡単で正確な検索で理想のサウナ体験をサポートします。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <HoverButton
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 md:px-8 w-full sm:w-auto"
                  hoverEffect="ripple"
                >
                  サウナを検索
                  <ChevronRight className="ml-2 h-4 w-4" />
                </HoverButton>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <AnimatedButton
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10 hover:text-white font-semibold px-6 md:px-8 w-full sm:w-auto"
                  hoverEffect="pulse"
                  iconAnimation={true}
                >
                  お問い合わせ
                  <ChevronRight className="ml-2 h-4 w-4" />
                </AnimatedButton>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
