import { component$ } from '@builder.io/qwik';
import JuanJofre from '~/assets/nosotros/Juan.jpg?jsx';
import DanielMartinez from '~/assets/nosotros/Daniel.jpg?jsx';
import RoxanaUreta from '~/assets/nosotros/Roxana.jpg?jsx';
import GonzaloOviedo from '~/assets/nosotros/Gonzalo.jpg?jsx';
import TamaraMoreno from '~/assets/nosotros/Tamara.jpg?jsx';
import KamilaNarea from '~/assets/nosotros/Kamila.jpg?jsx';

export default component$(() => {
    const nosotrosMembers = [
        {
            name: "Juan Jofré",
            position: "CCO - Cofounder",
            email: "juan.jofre@tellevoapp.cl",
            image: JuanJofre
        },
        {
            name: "Daniel Martínez",
            position: "CEO - Cofounder",
            email: "daniel.martinez@tellevoapp.cl",
            image: DanielMartinez
        },
        {
            name: "Roxana Ureta",
            position: "COO - Cofounder",
            email: "roxana.ureta@tellevoapp.cl",
            image: RoxanaUreta
        },
        {
            name: "Gonzalo Oviedo",
            position: "CTO",
            email: "gonzalo.oviedo@tellevoapp.cl",
            image: GonzaloOviedo
        },
        {
            name: "Tamara Moreno",
            position: "CLO",
            email: "tamara.moreno@tellevoapp.cl",
            image: TamaraMoreno
        },
        {
            name: "Kamila Narea",
            position: "CMO",
            email: "kamila.narea@tellevoapp.cl",
            image: KamilaNarea
        }
    ];

    return (
        <section class="relative pb-10 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
            {/* Efecto de conexión superior */}
            <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20"></div>
            
            <div class="container mx-auto px-6">
                {/* Encabezado */}
                <div class="text-center mb-16 max-w-3xl mx-auto">
                    <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        <span class="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                            Equipo Tellevo
                        </span>
                    </h2>
                    <p class="text-lg text-gray-600">
                        El equipo está compuesto por profesionales de basta experiencia, los que han sido transcendentales en los pasos que hemos avanzado.
                    </p>
                </div>

                {/* Grid de equipo */}
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {nosotrosMembers.map((member, index) => (
                        <div key={index} class="relative group">
                            {/* Efecto de fondo */}
                            <div class="absolute -inset-2 bg-gradient-to-br from-cyan-100/40 to-blue-100/40 rounded-2xl opacity-50 -rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
                            
                            {/* Tarjeta de miembro */}
                            <div class="relative bg-white rounded-xl overflow-hidden border border-gray-200/80 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full">
                                {/* Imagen */}
                                <div class="h-64 overflow-hidden">
                                    <member.image class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                
                                {/* Información */}
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-[#1054F1] mb-1">{member.name}</h3>
                                    <p class="text-blue-600 font-medium mb-3">{member.position}</p>
                                    <a 
                                        href={`mailto:${member.email}`} 
                                        class="text-cyan-600 hover:text-cyan-800 text-sm font-medium transition-colors duration-200 flex items-center"
                                    >
                                        <i class="fas fa-envelope mr-2"></i>
                                        {member.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Efecto de conexión inferior */}
            <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"></div>
        </section>
    );
});