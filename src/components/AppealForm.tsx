import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send } from 'lucide-react';

const appealSchema = z.object({
  type: z.enum(['BAN', 'WARNING']),
  reason: z.string().min(1, 'La razón es obligatoria'),
  explanation: z.string()
    .min(50, 'Por favor, proporciona una explicación detallada (mínimo 50 caracteres)')
    .max(1000, 'Explicación demasiado larga (máximo 1000 caracteres)'),
});

type AppealFormData = z.infer<typeof appealSchema>;

interface AppealFormProps {
  onSubmit: (data: AppealFormData) => void;
}

export function AppealForm({ onSubmit }: AppealFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<AppealFormData>({
    resolver: zodResolver(appealSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Tipo de Apelación
        </label>
        <select
          {...register('type')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="BAN">Apelación de Baneo</option>
          <option value="WARNING">Apelación de Advertencia</option>
        </select>
        {errors.type && (
          <p className="mt-1 text-sm text-red-600">{errors.type.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Razón Original
        </label>
        <input
          type="text"
          {...register('reason')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Ingresa la razón por la que fuiste baneado/advertido"
        />
        {errors.reason && (
          <p className="mt-1 text-sm text-red-600">{errors.reason.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Tu Explicación
        </label>
        <textarea
          {...register('explanation')}
          rows={6}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Por favor, proporciona una explicación detallada de por qué tu baneo/advertencia debería ser reconsiderado..."
        />
        {errors.explanation && (
          <p className="mt-1 text-sm text-red-600">{errors.explanation.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="flex items-center justify-center space-x-2 w-full sm:w-auto px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <Send className="h-5 w-5" />
        <span>Enviar Apelación</span>
      </button>
    </form>
  );
}