export default function Skill({shortSkill, skill}: {shortSkill: string, skill: string}) {
    return (
        <div className="w-24 h-24 border-2  flex flex-col rounded-md items-center justify-center">
            <h1 className="font-bold text-lg text-center">{shortSkill}</h1>
            <p className="text-wrap">{skill}</p>
        </div>
    )
}