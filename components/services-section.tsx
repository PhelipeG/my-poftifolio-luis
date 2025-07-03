
import { services } from "@/data/services-data";

export default function ServicesSection() {
  return (
    <div className="mt-20 mb-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent inline-block mb-4">Serviços Oferecidos</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-300 mx-auto rounded-full"></div>
        <p className="text-white/60 mt-6 max-w-2xl mx-auto">{services[0].description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
        {services[0].serviceList.map((service, index) => (
          <div 
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-green-400/30 transition-all duration-300 h-full flex flex-col hover:scale-105"
          >
            <div className="bg-white/5 rounded-xl w-16 h-16 flex items-center justify-center mb-5">
              <service.icon className="text-3xl text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-white/60 text-sm flex-grow">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}