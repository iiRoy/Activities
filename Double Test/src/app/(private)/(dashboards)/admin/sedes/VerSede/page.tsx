'use client';

import { useState } from 'react';
import PageTitle from '@/components/headers_menu_users/pageTitle';
import InputField from '@/components/buttons_inputs/InputField';
import FiltroEvento from '@/components/headers_menu_users/FiltroEvento';
import Button from '@/components/buttons_inputs/Button';

const mockStudents = [
  {
    id: '034',
    nombre: 'Andrea Sánchez',
    usuario: 'Andy01',
    correo: 'ejemplo@gmail.com',
    telefono: '2223456433',
    grupo: 'Grupo 1',
  },
  {
    id: '141',
    nombre: 'Sofía Ramírez',
    usuario: 'SofiaRmz',
    correo: 'ejemplo@gmail.com',
    telefono: '2226788933',
    grupo: 'Grupo 2',
  },
  {
    id: '012',
    nombre: 'Isabel Medina',
    usuario: 'Isa2005',
    correo: 'ejemplo@gmail.com',
    telefono: '2224558766',
    grupo: 'Grupo 2',
  },
  {
    id: '098',
    nombre: 'Valeria Torres',
    usuario: 'Vale123',
    correo: 'ejemplo@gmail.com',
    telefono: '2223415078',
    grupo: 'Grupo 2',
  },
  {
    id: '188',
    nombre: 'Camila Herrera',
    usuario: 'CamiHS',
    correo: 'ejemplo@gmail.com',
    telefono: '2229389544',
    grupo: 'Grupo 1',
  },
  {
    id: '042',
    nombre: 'Natalia Vázquez',
    usuario: 'Nati44',
    correo: 'ejemplo@gmail.com',
    telefono: '2221107408',
    grupo: 'Grupo 1',
  },
  {
    id: '110',
    nombre: 'Gabriela Ruiz',
    usuario: 'GabyRZ',
    correo: 'ejemplo@gmail.com',
    telefono: '2224405576',
    grupo: 'Grupo 1',
  },
];

const VerSede = () => {
  const [inputValue, setInputValue] = useState('');
  const [section, setSection] = useState('__All__'); // Inicializar con "Todos"

  const filteredStudents = mockStudents.filter((s) => {
    // Filtro por nombre
    const matchesSearch =
      s.nombre.toLowerCase().includes(inputValue.toLowerCase()) ||
      s.usuario.toLowerCase().includes(inputValue.toLowerCase());

    // Filtro por grupo seleccionado
    const matchesGroup = section === '__All__' ? true : s.grupo === section;

    return matchesSearch && matchesGroup;
  });

  const sectionFilterChange = (value: string) => {
    setSection(value);
    setInputValue(''); // Resetear búsqueda al cambiar de sección
  };

  return (
    <div className='p-6 pl-14 flex gap-4 flex-col text-primaryShade pagina-sedes'>
      <PageTitle>Sede ITESM Monterrey</PageTitle>

      <div className='fondo-sedes flex flex-col p-6 gap-4 overflow-auto'>
        {/* Encabezado */}
        <div className='flex justify-between items-center border-b border-gray-300 pb-2 mb-4'>
          <div>
            <p className='text-lg font-semibold text-[#2A2A2A]'>Sofía Sánchez</p>
            <p className='text-sm text-gray-500'>sofiaszs@tec.mx</p>
          </div>
          <p className='text-lg font-medium text-gray-700'>Coordinadora</p>
        </div>

        {/* Filtros */}
        <div className='flex gap-4 justify-between mb-4'>
          <div className='basis-2/3'>
            <InputField
              label=''
              showDescription={false}
              placeholder='Buscar participante'
              showError={false}
              variant='primary'
              icon='MagnifyingGlass'
              value={inputValue}
              onChangeText={(val) => setInputValue(val)}
            />
          </div>

          <div className='basis-1/3'>
            <FiltroEvento
              disableCheckboxes
              label='Filtrar por grupo'
              showSecciones
              labelSecciones='Seleccionar Grupo'
              secciones={[
                { label: 'Todos', value: '__All__' },
                { label: 'Grupo 1', value: 'Grupo 1' },
                { label: 'Grupo 2', value: 'Grupo 2' },
              ]}
              seccionActiva={section}
              onChangeSeccion={sectionFilterChange}
            />
          </div>
        </div>

        {/* Tabla */}
        <div className='overflow-x-auto bg-white rounded-xl p-4 shadow flex-1'>
          <table className='w-full text-left'>
            <thead className='text-gray-400 text-sm border-b'>
              <tr>
                <th className='pb-2 text-center'>ID</th>
                <th className='pb-2 text-center'>Nombre</th>
                <th className='pb-2 text-center'>Nombre de usuario</th>
                <th className='pb-2 text-center'>Correo electrónico</th>
                <th className='pb-2 text-center'>Número telefónico</th>
              </tr>
            </thead>
            <tbody className='text-gray-800'>
              {filteredStudents.map((s) => (
                <tr key={s.id} className='border-b last:border-none'>
                  <td className='py-2 text-center'>{s.id}</td>
                  <td className='py-2 text-center'>{s.nombre}</td>
                  <td className='py-2 text-center'>{s.usuario}</td>
                  <td className='py-2 text-center'>{s.correo}</td>
                  <td className='py-2 text-center'>{s.telefono}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Botón Listo */}
        <div className='mt-6 self-start'>
          <Button label='Volver' variant='primary' href='../' />
        </div>
      </div>
    </div>
  );
};

export default VerSede;
