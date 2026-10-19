import { Phone, Mail, MapPin, Clock, UserCheck } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { getCallUrl, getWhatsAppUrl, getMailtoUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

export function ContactInfo() {
  return (
    <div className="bg-[#082F49] text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden space-y-8 flex flex-col justify-between h-full">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="space-y-6 relative z-10">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 mb-4">
            Direct Engineering Access
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Let&apos;s Discuss Your Water Requirements
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Connect with our water treatment specialists for customized product selection, system sizing, site testing, or annual maintenance contracts.
          </p>
        </div>

        {/* Key Contact Cards */}
        <div className="space-y-4 text-sm">
          {/* Contact Person */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <UserCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs text-sky-300 uppercase font-bold tracking-wider">
                Key Contact
              </div>
              <div className="text-base font-bold text-white mt-0.5">
                {siteConfig.contactPerson}
              </div>
              <div className="text-xs text-slate-400">
                Water Treatment Consultant & Engineering Lead
              </div>
            </div>
          </div>

          {/* Primary Phone */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <Phone className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs text-sky-300 uppercase font-bold tracking-wider">
                Call & Mobile Support
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <a
                  href={getCallUrl(false)}
                  className="font-bold text-white hover:text-cyan-300 transition-colors"
                >
                  {siteConfig.phones.primary}
                </a>
                <span className="text-slate-500">•</span>
                <a
                  href={getCallUrl(true)}
                  className="font-medium text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  {siteConfig.phones.office} (Office)
                </a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs text-sky-300 uppercase font-bold tracking-wider">
                Direct Email
              </div>
              <a
                href={getMailtoUrl()}
                className="font-semibold text-white hover:text-cyan-300 transition-colors mt-0.5 block break-all"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <Clock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs text-sky-300 uppercase font-bold tracking-wider">
                Business & Support Hours
              </div>
              <div className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                {siteConfig.workingHours}
              </div>
            </div>
          </div>
        </div>

        {/* Branches Info */}
        <div className="space-y-3 pt-2">
          <div className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>Branch Locations in Kerala:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {siteConfig.branches.map((branch, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1"
              >
                <div className="font-bold text-white flex items-center gap-1">
                  <span>{branch.city}</span>
                  {branch.isPrimary && (
                    <span className="text-[9px] bg-sky-500/30 text-cyan-300 px-1.5 py-0.2 rounded">
                      Main
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-slate-400 leading-snug">
                  {branch.address}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp Quick Action Button at bottom of card */}
      <div className="pt-6 border-t border-white/10 relative z-10">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm bg-[#25D366] text-white hover:bg-[#20ba59] shadow-lg shadow-[#25D366]/20 transition-all"
        >
          <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
          <span>Quick WhatsApp Enquiry</span>
        </a>
      </div>
    </div>
  );
}
