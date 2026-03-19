'use client';

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  CalendarDays,
  ChevronRight,
  Clock,
  Gift,
  MapPin,
  Heart,
  Music,
  Pause,
  Play
} from "lucide-react";

// COLORES PREMIUM
const COLORS = {
  background: "#FFFFFF",
  ink: "#000000",
  gold: "#D4AF37", 
};

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(targetMs: number): Countdown {
  const nowMs = Date.now();
  const diff = Math.max(0, targetMs - nowMs);
  const seconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  };
}

function CountdownCard({ targetMs }: { targetMs: number }) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<Countdown>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  useEffect(() => {
    setMounted(true);
    const update = () => setTimeLeft(getTimeLeft(targetMs));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetMs]);

  const display = mounted ? timeLeft : { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
    <div className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
      {( [ ["DÍAS", display.days], ["HORAS", display.hours], ["MINUTOS", display.minutes], ["SEGUNDOS", display.seconds], ] as const ).map(([label, value]) => (
        <div key={label} className="rounded-2xl border border-[#D4AF37]/30 bg-white/5 px-6 py-5 backdrop-blur-md">
          <div className="text-center text-4xl font-light tracking-tight" style={{ color: COLORS.gold }}>
            {label === "DÍAS" ? value : pad2(value as number)}
          </div>
          <div className="mt-1 text-center text-[10px] tracking-[0.3em] text-white/50 uppercase">{label}</div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const targetMs = useMemo(() => new Date("2026-09-05T17:00:00").getTime(), []);
  
  const [showIntro, setShowIntro] = useState(true);
  const [fadeIntro, setFadeIntro] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startInvitation = () => {
    setFadeIntro(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.log("Autoplay prevent script:", error);
      });
    }
    setTimeout(() => {
      setShowIntro(false);
    }, 1000);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen scroll-smooth font-body bg-white relative">
      
      {/* 1. INTRO SCREEN: EL SOBRE CON NUEVO NOMBRE DE ARCHIVO */}
      {showIntro && (
        <div 
          onClick={startInvitation}
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-white cursor-pointer transition-opacity duration-1000 ${fadeIntro ? 'opacity-0' : 'opacity-100'}`}
        >
          <div className="relative h-screen w-full flex items-center justify-center">
            <Image 
              src="/sello_oroo.png" // NOMBRE ACTUALIZADO AQUÍ
              alt="Sobre de Boda con Sello"
              fill
              priority
              className="object-contain" 
            />
            <p className="absolute bottom-1/4 text-[11px] tracking-[0.4em] uppercase text-black/60 font-medium animate-pulse">Toca para abrir invitación</p>
          </div>
        </div>
      )}

      <audio ref={audioRef} src="/musica.mp3" loop />

      {!showIntro && (
        <button 
          onClick={toggleMusic}
          className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-black text-[#D4AF37] shadow-2xl transition-all hover:scale-110 active:scale-95 border border-[#D4AF37]/30"
        >
          {isPlaying ? <Pause size={24} /> : <Music size={24} className="animate-pulse" />}
        </button>
      )}

      <div className={`${showIntro ? 'overflow-hidden h-screen' : ''}`}>
        
        <header className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black text-center">
          <Image src="/hero_boda.jpg" alt="Boda" fill priority className="object-cover opacity-70 scale-105" />
          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-6">
            <p className="text-[11px] tracking-[0.5em] uppercase text-white font-medium" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.8)" }}>Invitación de Boda</p>
            <h1 className="text-6xl text-white font-light sm:text-8xl italic" style={{ textShadow: "0px 2px 10px rgba(0,0,0,0.5)" }}>
              Isabella <span className="text-[#D4AF37] font-sans not-italic">&</span> Sebastian
            </h1>
            <p className="max-w-xl mx-auto text-base sm:text-lg leading-relaxed text-white font-medium" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.8)" }}>
              Celebraremos su amor con una noche íntima y elegante. Nos encantaría que nos acompañes para ser parte de este capítulo inolvidable.
            </p>
            <a href="#rsvp" className="inline-flex items-center gap-3 bg-white px-10 py-4 text-xs tracking-[0.3em] uppercase font-bold text-black hover:bg-[#D4AF37] transition-all shadow-xl">Confirmar asistencia <ChevronRight size={16} /></a>
          </div>
        </header>

        <section className="bg-black text-white py-24 border-t border-white/10 flex flex-col items-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#D4AF37] font-bold mb-4">FALTAN SOLO</p>
          <CountdownCard targetMs={targetMs} />
        </section>

        <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-24 space-y-32">
          <section className="text-center space-y-6">
            <Heart size={24} color={COLORS.gold} className="mx-auto" />
            <h2 className="text-4xl font-light italic">Nuestra Historia</h2>
            <div className="h-px w-16 bg-[#D4AF37] mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-lg leading-loose text-black/70 font-light italic">
              "Desde el primer hola, supimos que este camino sería extraordinario. Con cada paso, la historia creció en amor, risas y sueños compartidos..."
            </p>
          </section>

          <section className="grid gap-12 sm:grid-cols-3 text-center border-y border-black/5 py-20">
            <div className="space-y-4">
              <CalendarDays size={28} color={COLORS.gold} className="mx-auto" />
              <h3 className="text-[10px] tracking-widest uppercase text-black/40 font-bold">Fecha</h3>
              <p className="text-xl font-medium">5 de Septiembre, 2026</p>
            </div>
            <div className="space-y-4">
              <Clock size={28} color={COLORS.gold} className="mx-auto" />
              <h3 className="text-[10px] tracking-widest uppercase text-black/40 font-bold">Hora</h3>
              <p className="text-xl font-medium">17:00 Horas</p>
            </div>
            <div className="space-y-4">
              <MapPin size={28} color={COLORS.gold} className="mx-auto" />
              <h3 className="text-[10px] tracking-widest uppercase text-black/40 font-bold">Lugar</h3>
              <p className="text-xl font-medium">Salón Central, Ciudad</p>
            </div>
          </section>

          <section className="max-w-xl mx-auto space-y-10 text-center">
            <div className="space-y-2">
              <h2 className="text-xs tracking-[0.3em] uppercase text-black/40 font-bold">Agenda de la noche</h2>
              <div className="h-px w-12 bg-[#D4AF37] mx-auto"></div>
            </div>
            <ul className="space-y-6 text-lg font-light">
                <li className="flex flex-col"><span className="text-[#D4AF37] text-sm font-bold">17:00</span> Ceremonia</li>
                <li className="flex flex-col"><span className="text-[#D4AF37] text-sm font-bold">18:00</span> Cóctel de bienvenida</li>
                <li className="flex flex-col"><span className="text-[#D4AF37] text-sm font-bold">19:30</span> Cena y brindis</li>
                <li className="flex flex-col"><span className="text-[#D4AF37] text-sm font-bold">22:00</span> Baile y celebración</li>
            </ul>
          </section>

          <section className="space-y-12 flex flex-col items-center">
            <h2 className="text-4xl font-light italic text-center">Nuestros Momentos</h2>
            <div className="max-w-4xl w-full">
              <div className="relative bg-white shadow-2xl p-4 sm:p-8 border border-black/5 rounded-sm">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image src="/boda.jpg" alt="Momentos" fill className="object-cover" />
                </div>
                <div className="mt-8 text-center text-[10px] tracking-[0.5em] text-black/40 font-bold uppercase">Isabella & Sebastian</div>
              </div>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-20 items-start max-w-4xl mx-auto">
             <section className="space-y-8 bg-black/5 p-8 rounded-sm text-center">
                <Gift size={24} color={COLORS.gold} className="mx-auto" />
                <h3 className="text-3xl font-light italic">Mesa de Regalos</h3>
                <p className="text-sm text-black/70 font-light">Si deseas aportar a su nuevo hogar, aquí encontrarás opciones.</p>
                <a href="#" className="inline-flex items-center justify-center bg-black px-6 py-3 text-xs tracking-[0.2em] uppercase font-bold text-white hover:bg-[#D4AF37]">Ver mesa de regalos</a>
             </section>

             <section id="rsvp" className="space-y-8">
                <div className="text-center space-y-2">
                  <h2 className="text-4xl font-light italic">RSVP</h2>
                  <p className="text-[10px] tracking-[0.4em] text-black/40 uppercase font-bold">Favor de confirmar antes del 15 de Agosto</p>
                </div>
                <form className="space-y-8">
                  <input type="text" placeholder="NOMBRE COMPLETO" className="w-full border-b border-black/10 bg-transparent py-4 text-xs tracking-[0.2em] outline-none focus:border-[#D4AF37]" />
                  <input type="email" placeholder="CORREO ELECTRÓNICO" className="w-full border-b border-black/10 bg-transparent py-4 text-xs tracking-[0.2em] outline-none focus:border-[#D4AF37]" />
                  <button type="button" className="w-full bg-black py-5 text-white text-[11px] tracking-[0.4em] uppercase hover:bg-[#D4AF37] font-bold shadow-2xl">Enviar Confirmación</button>
                </form>
             </section>
          </div>

        </main>

        <footer className="py-24 text-center border-t border-black/5 bg-[#fafafa]">
           <p className="text-[11px] tracking-[0.6em] text-black/30 uppercase font-bold">I & S · 2026</p>
        </footer>
      </div>
    </div>
  );
}