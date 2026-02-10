import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const STATES = [
  "Aguascalientes","Baja California","Baja California Sur","Campeche","Chiapas","Chihuahua","Ciudad de México","Coahuila","Colima","Durango","Estado de México","Guanajuato","Guerrero","Hidalgo","Jalisco","Michoacán","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatán","Zacatecas"
];

export default function CotizaPage() {
  const [form, setForm] = useState({
    regimen: "",
    age: "",
    nombre: "",
    apellido1: "",
    apellido2: "",
    email: "",
    telefono: "",
    telefonoConf: "",
    entidad: "",
    pension: "9500",
    monto: "90000",
    descuentan: "",
    motivo: ""
  });
  const [errors, setErrors] = useState({});
  const COMPANY_PHONE = "+52 5528822233";

  function update(field, value) {
    setForm((s) => ({ ...s, [field]: value }));
    setErrors((e) => ({ ...e, [field]: null }));
  }

  function validate() {
    const e = {};
    if (!form.regimen) e.regimen = "Campo obligatorio";
    if (!form.age) e.age = "Campo obligatorio";
    if (!form.nombre) e.nombre = "Campo obligatorio";
    if (!form.apellido1) e.apellido1 = "Campo obligatorio";
    if (!form.email) e.email = "Campo obligatorio";
    if (!form.telefono) e.telefono = "Campo obligatorio";
    if (!form.telefonoConf) e.telefonoConf = "Confirme su teléfono";
    if (form.telefono && form.telefonoConf && form.telefono !== form.telefonoConf) e.telefonoConf = "Los números no coinciden";
    if (!form.entidad) e.entidad = "Campo obligatorio";
    if (!form.pension) e.pension = "Campo obligatorio";
    if (!form.monto) e.monto = "Campo obligatorio";
    if (!form.descuentan) e.descuentan = "Seleccione SI o NO";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    const message = `Solicitud de Cotización - Impulso Financiero\nRégimen de Pensión / Ingreso: ${form.regimen}\nEdad: ${form.age}\nNombre Completo: ${form.nombre} ${form.apellido1} ${form.apellido2}\nCorreo: ${form.email}\nNúmero de Teléfono: ${form.telefono}\nEntidad Federativa: ${form.entidad}\nPensión / Ingreso Mensual (MXN): ${form.pension}\nMonto de Préstamo Requerido (MXN): ${form.monto}\n¿Descuentan de la pensión?: ${form.descuentan}\nMotivo de la solicitud: ${form.motivo}`;
    const url = `https://wa.me/525528822233?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-semibold mb-4">Cotiza ya</h1>
        <p className="text-sm text-muted mb-6">Completa el formulario para recibir una cotización personalizada. Serás redirigido a WhatsApp para confirmar el envío.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Régimen de Pensión / Ingreso *</label>
            <select value={form.regimen} onChange={(e) => update("regimen", e.target.value)} className="mt-1 block w-full rounded-md border px-3 py-2">
              <option value="">Seleccione su Régimen de Pensión</option>
              <option>IMSS Ley 73</option>
              <option>IMSS Ley 97</option>
              <option>ISSSTE</option>
              <option>Otros</option>
            </select>
            {errors.regimen && <p className="text-xs text-red-600 mt-1">{errors.regimen}</p>}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">Edad *</label>
              <input type="number" value={form.age} onChange={(e) => update("age", e.target.value)} className="mt-1 block w-full rounded-md border px-3 py-2" />
              {errors.age && <p className="text-xs text-red-600 mt-1">{errors.age}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium">Pensión / Ingreso Mensual (MXN) *</label>
              <input type="number" value={form.pension} onChange={(e) => update("pension", e.target.value)} className="mt-1 block w-full rounded-md border px-3 py-2" />
              <p className="text-xs text-muted mt-1">Monto mínimo $9,500</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Nombre Completo *</label>
            <div className="grid grid-cols-3 gap-2 mt-1">
              <input placeholder="Nombre(s)" value={form.nombre} onChange={(e) => update("nombre", e.target.value)} className="rounded-md border px-3 py-2" />
              <input placeholder="Primer Apellido" value={form.apellido1} onChange={(e) => update("apellido1", e.target.value)} className="rounded-md border px-3 py-2" />
              <input placeholder="Segundo Apellido" value={form.apellido2} onChange={(e) => update("apellido2", e.target.value)} className="rounded-md border px-3 py-2" />
            </div>
            {errors.nombre && <p className="text-xs text-red-600 mt-1">{errors.nombre}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Correo Electrónico *</label>
            <input type="email" placeholder="ejemplo@ejemplo.com" value={form.email} onChange={(e) => update("email", e.target.value)} className="mt-1 block w-full rounded-md border px-3 py-2" />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">Número de Teléfono *</label>
              <input placeholder="00-0000-0000" value={form.telefono} onChange={(e) => update("telefono", e.target.value)} className="mt-1 block w-full rounded-md border px-3 py-2" />
              <p className="text-xs text-muted mt-1">Ingrese preferentemente su número con WhatsApp</p>
              {errors.telefono && <p className="text-xs text-red-600 mt-1">{errors.telefono}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium">Por Favor Confirme su Número de Teléfono *</label>
              <input placeholder="00-0000-0000" value={form.telefonoConf} onChange={(e) => update("telefonoConf", e.target.value)} className="mt-1 block w-full rounded-md border px-3 py-2" />
              {errors.telefonoConf && <p className="text-xs text-red-600 mt-1">{errors.telefonoConf}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Entidad Federativa *</label>
            <select value={form.entidad} onChange={(e) => update("entidad", e.target.value)} className="mt-1 block w-full rounded-md border px-3 py-2">
              <option value="">Seleccione su Entidad Federativa</option>
              {STATES.map((s) => (<option key={s}>{s}</option>))}
            </select>
            {errors.entidad && <p className="text-xs text-red-600 mt-1">{errors.entidad}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Monto de Préstamo Requerido en Pesos *</label>
            <input type="number" value={form.monto} onChange={(e) => update("monto", e.target.value)} className="mt-1 block w-full rounded-md border px-3 py-2" />
            <p className="text-xs text-muted mt-1">Monto mínimo por requerir $40,000 Pesos, sujeto a aprobación de crédito</p>
            {errors.monto && <p className="text-xs text-red-600 mt-1">{errors.monto}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">¿Actualmente le descuentan directamente de su pensión, algún préstamo? *</label>
            <select value={form.descuentan} onChange={(e) => update("descuentan", e.target.value)} className="mt-1 block w-full rounded-md border px-3 py-2">
              <option value="">Seleccione SI o NO</option>
              <option>SI</option>
              <option>NO</option>
            </select>
            <p className="text-xs text-muted mt-1">Se refiere únicamente a préstamos que le descuenten directamente de su pensión</p>
            {errors.descuentan && <p className="text-xs text-red-600 mt-1">{errors.descuentan}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">El Motivo de Mi Solicitud es:</label>
            <textarea value={form.motivo} onChange={(e) => update("motivo", e.target.value)} rows={4} className="mt-1 block w-full rounded-md border px-3 py-2" />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Button type="submit" className="btn-primary w-full">Enviar por WhatsApp</Button>
            <Button variant="ghost" onClick={() => window.history.back()} className="w-28">Volver</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
