const SKILLS = ["React", "TypeScript", "Next.js", "Node.js", "Tailwind"];

export function Dev() {
  return (
    <section className="section">
      <p className="text-right font-secondary text-sm">matias@matnac.dev</p>

      <p className="text-right font-secondary text-sm text-secondary">Languages / Skills</p>

      <div className="flex flex-col gap-3">
        <h1 className="flex flex-col text-secondary">
          <span className="flex">
            <span className="text-2xl">Dev</span>
            <span className="mt-[2.5px] text-lg">(02)</span>
          </span>
          <span className="text-2xl">Since 2017</span>
        </h1>

        <ul className="flex flex-col gap-3">
          {SKILLS.map((skill, index) => (
            <li key={index} className="flex justify-between border-t border-secondary pt-3">
              <span className="font-secondary text-sm text-secondary">
                {`${index + 1}`.padStart(2, "0")}
              </span>
              <span className="text-2xl">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
