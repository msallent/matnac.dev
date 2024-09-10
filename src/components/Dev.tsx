const SKILLS = ["React", "TypeScript", "Next.js", "Node.js", "Tailwind"];

export function Dev() {
  return (
    <section className="flex h-svh flex-col justify-between p-5">
      <p className="text-right font-secondary text-sm">mqsallent@gmail.com</p>

      <p className="text-right font-secondary text-sm text-secondary">Languages / Skills</p>

      <div className="flex flex-col gap-3">
        <h1 className="flex flex-col text-secondary">
          <span className="flex">
            <span className="text-xl">Dev</span>
            <span className="mt-[2.5px] text-lg">(02)</span>
          </span>
          <span className="text-xl">Since 2017</span>
        </h1>

        <ul className="flex flex-col gap-3">
          {SKILLS.map((skill, index) => (
            <li key={index} className="flex justify-between border-t border-secondary pt-3">
              <span className="font-secondary text-sm text-secondary">
                {`${index + 1}`.padStart(2, "0")}
              </span>
              <span className="text-xl">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
