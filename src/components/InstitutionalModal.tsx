import React, { useState } from 'react';
import { X, Building2, Mail, Phone, MapPin, Users, Award, Shield, Check, Send } from 'lucide-react';

interface InstitutionalModalProps {
  initialTab?: 'about' | 'contact' | 'staff';
  isOpen: boolean;
  onClose: () => void;
}

export const InstitutionalModal: React.FC<InstitutionalModalProps> = ({
  initialTab = 'about',
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'about' | 'contact' | 'staff'>(initialTab);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSent, setContactSent] = useState(false);

  if (!isOpen) return null;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    setTimeout(() => {
      setContactSent(false);
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden my-auto border border-slate-200 relative flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header with Tabs */}
        <div className="p-4 border-b border-slate-200 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#008e9b]" />
            <h3 className="font-bold font-headline uppercase text-base tracking-wider">
              Portal Noticias Bolívar & Cartagena
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-slate-100 p-1">
          <button
            onClick={() => setActiveTab('about')}
            className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors font-headline ${
              activeTab === 'about' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Quiénes Somos
          </button>
          <button
            onClick={() => setActiveTab('staff')}
            className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors font-headline ${
              activeTab === 'staff' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Expediente / Equipo
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors font-headline ${
              activeTab === 'contact' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Contáctenos
          </button>
        </div>

        {/* Tab Content */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-4">
          
          {/* TAB 1: ABOUT */}
          {activeTab === 'about' && (
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              <div className="flex items-center gap-2 text-base font-bold text-slate-900 font-headline uppercase">
                <Award className="w-5 h-5 text-[#008e9b]" />
                <span>Compromiso con el Periodismo Ético e Independiente</span>
              </div>
              <p>
                El <strong>Portal Noticias Bolívar & Cartagena</strong> es el medio de comunicación digital de referencia en el Caribe colombiano. Fundado con la misión de brindar información verificada, plural y oportuna a la ciudadanía, cubrimos a diario los sucesos de Cartagena de Indias, de los municipios de Bolívar, el contexto nacional colombiano y los hechos más relevantes del mundo.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs uppercase font-headline">
                    <Shield className="w-4 h-4 text-[#008e9b]" /> Rigor Investigativo
                  </div>
                  <p className="text-xs text-slate-600">Verificación exhaustiva de fuentes y datos con total apego a la verdad.</p>
                </div>
                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs uppercase font-headline">
                    <Users className="w-4 h-4 text-[#008e9b]" /> Voz de la Comunidad
                  </div>
                  <p className="text-xs text-slate-600">Espacio de puertas abiertas para las denuncias y logros de las comunidades de base.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: STAFF / EXPEDIENTE */}
          {activeTab === 'staff' && (
            <div className="space-y-4 text-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 font-headline">
                Consejo Editorial & Redacción Central
              </h4>
              <div className="divide-y divide-slate-100 font-medium">
                <div className="py-2.5 flex justify-between">
                  <span className="font-bold text-slate-900">Dirección General de Periodismo</span>
                  <span className="text-slate-600">Álvaro Obregón Salcedo</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="font-bold text-slate-900">Editora en Jefe de Economía & Región</span>
                  <span className="text-slate-600">Valeria Restrepo</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="font-bold text-slate-900">Editoria de Deportes</span>
                  <span className="text-slate-600">Jorge Eliécer Torres</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="font-bold text-slate-900">Corresponsal Departamental de Bolívar</span>
                  <span className="text-slate-600">Andrés Felipe Gómez</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="font-bold text-slate-900">Cultura, Cine & Entretenimiento</span>
                  <span className="text-slate-600">Sofía Montenegro</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="font-bold text-slate-900">Seguridad Ciudadana & Orden Público</span>
                  <span className="text-slate-600">Rodrigo Paternina</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CONTACT */}
          {activeTab === 'contact' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 flex flex-col items-center text-center">
                  <MapPin className="w-4 h-4 text-[#008e9b] mb-1" />
                  <span className="font-bold text-slate-900 font-headline">Sede Principal</span>
                  <span className="text-slate-500 mt-0.5">Centro Histórico, Calle del Cuartel #36, Cartagena</span>
                </div>
                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 flex flex-col items-center text-center">
                  <Mail className="w-4 h-4 text-[#008e9b] mb-1" />
                  <span className="font-bold text-slate-900 font-headline">Redacción & Pautas</span>
                  <span className="text-slate-500 mt-0.5">redaccion@portalbolivar.com.co</span>
                </div>
                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 flex flex-col items-center text-center">
                  <Phone className="w-4 h-4 text-[#008e9b] mb-1" />
                  <span className="font-bold text-slate-900 font-headline">Línea Directa / WhatsApp</span>
                  <span className="text-slate-500 mt-0.5">+57 (5) 664-9200</span>
                </div>
              </div>

              {contactSent ? (
                <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-4 rounded-lg flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <p className="font-bold text-xs">¡Mensaje enviado con éxito!</p>
                    <p className="text-[11px]">Nuestra mesa de redacción responderá a la brevedad posible.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-headline">Envíenos un mensaje o sugerencia de noticia</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Su Nombre completo..."
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required
                      className="bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#008e9b]"
                    />
                    <input
                      type="email"
                      placeholder="Su Correo Electrónico..."
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      required
                      className="bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#008e9b]"
                    />
                  </div>
                  <textarea
                    rows={3}
                    placeholder="Escriba su mensaje, denuncia ciudadana o sugerencia informativa..."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    required
                    className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#008e9b]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#008e9b] hover:bg-[#007b86] text-white font-bold text-xs uppercase tracking-wider py-2 px-3 rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer font-headline"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Mensaje</span>
                  </button>
                </form>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
