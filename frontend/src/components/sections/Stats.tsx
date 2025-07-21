import { Users, Award, Star, Shield } from "lucide-react"

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "1000+",
      label: "Proyectos Realizados",
      color: "text-[#33cabe]",
      bgColor: "bg-[#33cabe]/10",
    },
    {
      icon: Award,
      number: "10+",
      label: "Años de Experiencia",
      color: "text-[#3380be]",
      bgColor: "bg-[#3380be]/10",
    },
    {
      icon: Star,
      number: "100%",
      label: "Satisfacción Garantizada",
      color: "text-[#33cabe]",
      bgColor: "bg-[#33cabe]/10",
    },
    {
      icon: Shield,
      number: "5",
      label: "Años de Garantía",
      color: "text-[#3380be]",
      bgColor: "bg-[#3380be]/10",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`flex items-center justify-center w-12 h-12 ${stat.bgColor} rounded-lg mx-auto mb-4`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
