import React, { useState } from 'react';
import { X, Check, Send, Megaphone, BarChart3, Users, Target } from 'lucide-react';

interface AdvertiseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdvertiseModal: React.FC<AdvertiseModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [plan, setPlan] = useState('leaderboard');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden my-auto border border-slate-200 relative flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#008e9b] rounded-lg text-white">
              <Megaphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold font-headline uppercase text-base tracking-wider">
                Kit de Medios & Publicidad Digital
              </h3>
              <p className="text-xs text-slate-300">Conecte su marca con los lectores más influyentes de Cartagena y Bolívar</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* Metrics Strip */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <Users className="w-4 h-4 mx-auto text-[#008e9b] mb-1" />
              <div className="text-lg font-extrabold font-mono text-slate-900">450K+</div>
              <div className="text-[10px] text-slate-500 uppercase font-bold font-headline">Lectores Únicos/mes</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <BarChart3 className="w-4 h-4 mx-auto text-[#008e9b] mb-1" />
              <div className="text-lg font-extrabold font-mono text-slate-900">1.8M+</div>
              <div className="text-[10px] text-slate-500 uppercase font-bold font-headline">Visitas/mes</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <Target className="w-4 h-4 mx-auto text-[#008e9b] mb-1" />
              <div className="text-lg font-extrabold font-mono text-slate-900">72%</div>
              <div className="text-[10px] text-slate-500 uppercase font-bold font-headline">Audiencia Regional</div>
            </div>
          </div>

          {/* Ad Formats */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-headline">
              Formatos de Alto Impacto
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg border-2 border-[#008e9b]/30 bg-[#008e9b]/5 space-y-1">
                <span className="font-bold text-slate-900 text-sm font-headline">Leaderboard Header (728x90)</span>
                <p className="text-slate-600">Ubicación preferencial en el encabezado visible de inmediato al cargar el portal.</p>
                <div className="text-[11px] font-bold text-[#008e9b] pt-1">Máxima visibilidad institucional</div>
              </div>
              <div className="p-3 rounded-lg border-2 border-slate-200 bg-slate-50 space-y-1">
                <span className="font-bold text-slate-900 text-sm font-headline">Banner Lateral (300x250)</span>
                <p className="text-slate-600">Integrado en la barra lateral junto a las noticias más leídas y redes sociales.</p>
                <div className="text-[11px] font-bold text-slate-700 pt-1">Excelente tasa de clics y conversión</div>
              </div>
            </div>
          </div>

          {/* Form */}
          {sent ? (
            <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-4 rounded-lg flex items-center gap-3">
              <Check className="w-6 h-6 text-emerald-600 shrink-0" />
              <div>
                <p className="font-bold text-sm">¡Solicitud recibida con éxito!</p>
                <p className="text-xs">Nuestro equipo comercial le enviará el tarifario oficial y planes especiales en menos de 24 horas.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-headline">
                Solicite Asesoría Comercial
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Su Nombre completo..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#008e9b]"
                />
                <input
                  type="email"
                  placeholder="Su Correo Corporativo..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#008e9b]"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Empresa o Marca..."
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                  className="bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#008e9b]"
                />
                <select
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#008e9b] font-medium"
                >
                  <option value="leaderboard">Banner Cabecera (728x90)</option>
                  <option value="sidebar">Banner Lateral (300x250)</option>
                  <option value="publieditorial">Publirreportaje / Nota Patrocinada</option>
                  <option value="full">Paquete Integral Multiformato</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#008e9b] hover:bg-[#007b86] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs font-headline"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Solicitar Tarifario & Propuesta Comercial</span>
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
