'use client';

import { useState } from 'react';
import PageTitle from '@/components/headers_menu_users/pageTitle';
import InputField from '@/components/buttons_inputs/InputField';
import FiltroEvento from '@/components/headers_menu_users/FiltroEvento';
import Button from '@/components/buttons_inputs/Button';
import { Plus, PlusIcon, Trash2, X } from 'lucide-react';

const mockStudents = [
  {
    id: '034',
    nombre: 'Andrea Sánchez',
    usuario: 'Andy01',
    correo: 'ejemplo@gmail.com',
    telefono: '2223456433',
  },
  {
    id: '141',
    nombre: 'Sofía Ramírez',
    usuario: 'SofiaRmz',
    correo: 'ejemplo@gmail.com',
    telefono: '2226788933',
  },
  {
    id: '012',
    nombre: 'Isabel Medina',
    usuario: 'Isa2005',
    correo: 'ejemplo@gmail.com',
    telefono: '2224558766',
  },
  {
    id: '098',
    nombre: 'Valeria Torres',
    usuario: 'Vale123',
    correo: 'ejemplo@gmail.com',
    telefono: '2223415078',
  },
  {
    id: '188',
    nombre: 'Camila Herrera',
    usuario: 'CamiHS',
    correo: 'ejemplo@gmail.com',
    telefono: '2229389544',
  },
  {
    id: '042',
    nombre: 'Natalia Vázquez',
    usuario: 'Nati44',
    correo: 'ejemplo@gmail.com',
    telefono: '2221107408',
  },
  {
    id: '110',
    nombre: 'Gabriela Ruiz',
    usuario: 'GabyRZ',
    correo: 'ejemplo@gmail.com',
    telefono: '2224405576',
  },
];

const mockAddStudents = [
  {
    id: '034',
    nombre: 'Andrea Sánchez',
    usuario: 'Andy01',
    correo: 'ejemplo@gmail.com',
    telefono: '2223456433',
  },
  {
    id: '141',
    nombre: 'Sofía Ramírez',
    usuario: 'SofiaRmz',
    correo: 'ejemplo@gmail.com',
    telefono: '2226788933',
  },
  {
    id: '012',
    nombre: 'Isabel Medina',
    usuario: 'Isa2005',
    correo: 'ejemplo@gmail.com',
    telefono: '2224558766',
  },
  {
    id: '098',
    nombre: 'Valeria Torres',
    usuario: 'Vale123',
    correo: 'ejemplo@gmail.com',
    telefono: '2223415078',
  },
  {
    id: '188',
    nombre: 'Camila Herrera',
    usuario: 'CamiHS',
    correo: 'ejemplo@gmail.com',
    telefono: '2229389544',
  },
  {
    id: '042',
    nombre: 'Natalia Vázquez',
    usuario: 'Nati44',
    correo: 'ejemplo@gmail.com',
    telefono: '2221107408',
  },
  {
    id: '110',
    nombre: 'Gabriela Ruiz',
    usuario: 'GabyRZ',
    correo: 'ejemplo@gmail.com',
    telefono: '2224405576',
  },
];

const EditarSede = () => {
  const [inputValue, setInputValue] = useState('');
  const [section, setSection] = useState('SEDES');
  const [filterActivaExtra, setFilterActivaExtra] = useState({});
  const [fadeSec, setFadeSec] = useState(false);
  const [showModal, setShowModal] = useState(false); // Estado del modal

  const filteredStudents = mockStudents.filter(
    (s) =>
      s.nombre.toLowerCase().includes(inputValue.toLowerCase()) ||
      s.usuario.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const filteredAddStudents = mockAddStudents.filter(
    (s) =>
      s.nombre.toLowerCase().includes(inputValue.toLowerCase()) ||
      s.usuario.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const sectionFilterChange = (newSection: string) => {
    setSection(newSection);
    setFilterActivaExtra({});
    setInputValue(''); // Resetear la barra de búsqueda al cambiar de sección
  };

  const extraHandleFilterChange = (key: string, value: string) => {
    setFilterActivaExtra((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className='p-6 pl-14 flex gap-4 flex-col text-primaryShade pagina-sedes relative'>
      <PageTitle>Editar Sede ITESM Monterrey</PageTitle>

      <div className='fondo-sedes flex flex-col p-6 gap-4 overflow-auto'>
        {/* Filtros de encabezado */}
        <div className='flex justify-between items-center pb-2 mb-4'>
          <div>
            <FiltroEvento
              disableCheckboxes
              label='Coordinadora'
              showSecciones
              labelSecciones=''
              secciones={[
                { label: 'Sofia', value: 'Coordinadora1' },
                { label: 'Mónica', value: 'Coordinadora2' },
                { label: 'Andrea', value: 'Coordinadora3' },
              ]}
              seccionActiva={section}
              onChangeSeccion={sectionFilterChange}
              extraFilters={[]}
              filterActiva={filterActivaExtra}
              onExtraFilterChange={extraHandleFilterChange}
              fade={fadeSec}
            />
          </div>
          <div>
            <Button label='Eliminar Grupo' variant='error' />
          </div>
        </div>

        {/* Filtros adicionales */}

        {/* Búsqueda y agregar */}
        <div className='flex gap-4 justify-between mb-4'>
          <InputField
            label=''
            showDescription={false}
            placeholder='Buscar participante'
            showError={false}
            variant='accent'
            icon='MagnifyingGlass'
            value={inputValue}
            onChangeText={(val) => setInputValue(val)}
          />

          <Button
            label='Agregar'
            variant='primary'
            showLeftIcon
            IconLeft={Plus}
            onClick={() => setShowModal(true)} // Mostrar modal
          />
        </div>

        {/* Tabla de participantes */}
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
                  <td className='py-2 text-center'>
                    <Button
                      label=''
                      variant='error'
                      round
                      showLeftIcon
                      IconLeft={Trash2}
                      href='../sedes'
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Botones finales */}
        <div className='flex gap-4 justify-between mb-4'>
          <div className='flex gap-4'>
            <Button label='Confirmar' variant='primary' href='../' />
            <Button label='Cancelar' variant='secondary' href='../' />
          </div>
          <div>
            <Button
              label='Datos de Sede'
              variant='warning'
              href='../../sedes/verSedes/verMonterrey'
            />
          </div>
        </div>
      </div>

      {/* Modal emergente */}
      {showModal && (
        <div className='fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50'>
          <div className='fondo-agregar-participante bg-white p-8 rounded-lg shadow-lg relative w-full '>
            <h1 className='titulo-agregar-participante text-xl font-semibold mb-4 text-center'>
              Agregar Participante
            </h1>
            <p className='texto-agregar-participante text-center mb-4'>
              Participantes registradas en sede Monterrey
            </p>

            <InputField
              label=''
              showDescription={false}
              placeholder='Buscar participante'
              showError={false}
              variant='accent'
              icon='MagnifyingGlass'
              value={inputValue}
              onChangeText={(val) => setInputValue(val)}
            />

            <div className='overflow-x-auto max-h-64 overflow-y-auto bg-white rounded-xl p-4 shadow mt-6 mb-6'>
              <table className='w-full text-left'>
                <thead className='text-gray-400 text-sm border-b'>
                  <tr>
                    <th className='pb-2 text-center'>ID</th>
                    <th className='pb-2 text-center'>Nombre</th>
                  </tr>
                </thead>
                <tbody className='text-gray-800'>
                  {filteredAddStudents.map((s) => (
                    <tr key={s.id} className='border-b last:border-none'>
                      <td className='py-2 text-center'>{s.id}</td>
                      <td className='py-2 text-center'>{s.nombre}</td>
                      <td className='py-2 text-center'>
                        <Button
                          label=''
                          variant='primary'
                          round
                          showLeftIcon
                          IconLeft={PlusIcon}
                          href=''
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className='flex gap-4 justify-center'>
              <Button label='Confirmar' variant='primary' href='../' />
              <Button label='Cancelar' variant='secondary' onClick={() => setShowModal(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditarSede;
