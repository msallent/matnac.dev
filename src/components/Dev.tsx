const SKILLS = [
  { name: "React", area: "Frontend", experience: 6 },
  { name: "TypeScript", area: "Fullstack", experience: 5 },
  { name: "Next.js", area: "Fullstack", experience: 4 },
  { name: "Node.js", area: "Backend", experience: 4 },
  { name: "Tailwind", area: "Frontend", experience: 3 },
];

export function Dev() {
  return (
    <section id="dev" className="section">
      <p className="text-right font-secondary text-sm">matias@matnac.dev</p>

      <p className="text-right font-secondary text-sm text-secondary xl:hidden">
        Languages / Skills
      </p>

      <div className="flex flex-col gap-3">
        <div className="flex items-end justify-between">
          <h1 className="flex flex-col text-secondary">
            <span className="flex">
              <span className="text-2xl">Dev</span>
              <span className="mt-[2.5px] text-lg">(02)</span>
            </span>
            <span className="text-2xl">Since 2017</span>
          </h1>

          <p className="hidden xl:block xl:font-secondary xl:text-sm xl:text-secondary">
            Languages / Skills
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          {SKILLS.map((skill, index) => (
            <li key={index} className="flex justify-between border-t border-secondary pt-3">
              <span className="flex gap-16 font-secondary text-sm text-secondary">
                <span className="flex gap-1.5 xl:w-28">
                  <p>{`${index + 1}`.padStart(2, "0")}</p>
                  <p className="hidden xl:block">{skill.area}</p>
                </span>

                <p className="hidden xl:block">{skill.experience}+ years of experience</p>
              </span>

              <span className="text-2xl">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
