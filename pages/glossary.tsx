import { Glossary } from "@/components/Glossary"
import { BeehiivBannerForm } from '../components/BeehiivForm/exports';

export default function GlossaryPage() {
  return (
    <div className="space-y-8 pb-8 min-h-screen">
      <div className="container mx-auto px-2 py-8 pb-10">
        <section className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-gray-900 dark:text-gray-100 font-inter">
            AI Glossary
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Essential terms and concepts for understanding artificial intelligence.                </p>
          {/* Stylish Line Break */}
          <div className="max-w-lg mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
          </div>
        </section>
        <Glossary />
      </div>
      <BeehiivBannerForm
        title="Stay Ahead of the Curve"
        description="Get the latest AI news, tools, and insights delivered right to your inbox."
      />
    </div>
  )
}