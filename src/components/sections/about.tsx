import Image from "next/image";
import { SectionHeader } from "@/components/shared/section-header";
import { TypingText } from "@/components/shared/typing-text";

function DetailItem({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <p className="text-muted-foreground text-[10px] sm:text-xs font-semibold uppercase tracking-wider">{label}</p>
      <p className="text-foreground font-medium text-xs sm:text-sm break-words">{value}</p>
    </div>
  );
}

export function AboutSection() {
  return (
    <div className="space-y-8 md:space-y-12 py-20">
      <SectionHeader number={1} title="About Me" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-2 bg-card rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-border space-y-6 md:space-y-8">
          <div className="flex items-center gap-4 border-b border-border pb-6">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl overflow-hidden shadow-inner bg-card flex-shrink-0">
              <Image
                src="/arrimon.jpeg"
                alt="Rimon"
                width={64}
                height={64}
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div>
              <h4 className="font-bold text-foreground text-lg md:text-xl">Abu Rayhan Rimon</h4>
              <p className="text-primary text-sm font-medium">Full Stack Developer</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
            <DetailItem label="Full Name" value="Md Abu Rayhan Rimon" />
            <DetailItem label="Email" value={<a href="mailto:dev.rrimon@gmail.com" className="text-foreground hover:underline break-all">dev.rrimon@gmail.com</a>} />
            <DetailItem label="Nationality" value="Bangladeshi" />
            <DetailItem label="Languages" value="English, Bangla" />
          </div>
        </div>

        <div className="lg:col-span-3 space-y-5 md:space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg">
          <p>
            I am a <span className="text-primary font-bold"><TypingText words={["Full Stack Developer", "React Developer", "Laravel Developer"]} /></span> specializing in building high-performance, scalable web applications that bridge the gap between complex backend architecture and premium user interfaces. With over <span className="text-foreground font-semibold">1.5 years of experience</span>, I excel at crafting robust systems—ranging from CRM platforms to transaction reconciliation engines—using the <span className="text-foreground font-semibold">Laravel</span> and <span className="text-foreground font-semibold">React</span> ecosystem.
          </p>
          <p>
            At <span className="text-foreground font-semibold border-b-2 border-border"><a href="https://www.race.net.bd/" target="_blank" rel="noreferrer">Race Online Ltd.</a></span>, I focus on writing clean, efficient code that directly improves business productivity and system performance. I don&apos;t just build features; I architect solutions that are <span className="text-primary font-semibold">secure</span>, <span className="text-primary font-semibold">data-driven</span>, and optimized for a seamless user experience. I am deeply committed to leveraging modern development workflows and <span className="text-foreground font-semibold">AI-assisted tools</span> to deliver production-grade software with precision.
          </p>
        </div>
      </div>
    </div>
  );
}
