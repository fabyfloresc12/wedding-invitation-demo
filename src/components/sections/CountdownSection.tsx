type CountdownValue = {
  label: string;
  value: number;
  pad?: boolean;
};

type CountdownSectionProps = {
  label: string;
  values: CountdownValue[];
};

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

export function CountdownSection({ label, values }: CountdownSectionProps) {
  return (
    <section aria-label="Cuenta regresiva" className="border-t border-white/10 bg-black px-5 py-16 text-white sm:px-6 sm:py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.34em] text-[#e4c66b] sm:tracking-[0.5em]">
          {label}
        </p>
        <div className="grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {values.map(({ label: itemLabel, pad = true, value }) => (
            <div
              key={itemLabel}
              className="rounded-[1.5rem] border border-[#D4AF37]/30 bg-white/5 px-4 py-5 backdrop-blur-md sm:rounded-[1.75rem] sm:px-6"
            >
              <div className="text-center text-[2rem] font-light tracking-tight text-[#e4c66b] sm:text-4xl">
                {pad ? pad2(value) : value}
              </div>
              <div className="mt-2 text-center text-[10px] uppercase tracking-[0.22em] text-white/70 sm:tracking-[0.28em]">
                {itemLabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
