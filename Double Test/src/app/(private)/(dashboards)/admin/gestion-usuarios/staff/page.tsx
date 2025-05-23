'use client';

import Pagination from '@/components/buttons_inputs/Pagination';
import InputField from '@/components/buttons_inputs/InputField';
import Button from '@/components/buttons_inputs/Button';
import PageTitle from '@/components/headers_menu_users/pageTitle';
import FiltroEvento from '@/components/headers_menu_users/FiltroEvento';
import { MagnifyingGlass, Trash, Highlighter } from '@/components/icons';
import { useState, useMemo } from 'react';

const GestionApoyo = () => {
  const [inputValue, setInputValue] = useState('');
  const [section, setSection] = useState('__All__'); // Inicializar con "Todas" para sedes
  const [filterActivaExtra, setFilterActivaExtra] = useState({ rol: '__All__' }); // Inicializar con "Todas" para roles
  const [currentPage, setCurrentPage] = useState(0);

  const rowsPerPage = 5;

  const extraHandleFilterChange = (key: string, value: string) => {
    setFilterActivaExtra((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const apoyoData = [
    {
      id: '01',
      nombre: 'Ana García',
      sede: 'Puebla',
      grupo: '5',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
      rol: 'Instructora',
    },
    {
      id: '02',
      nombre: 'Beatriz López',
      sede: 'Querétaro',
      grupo: '5',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
      rol: 'Facilitadora',
    },
    {
      id: '03',
      nombre: 'Clara Martínez',
      sede: 'Monterrey',
      grupo: '5',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
      rol: 'Facilitadora',
    },
    {
      id: '04',
      nombre: 'Diana Pérez',
      sede: 'Puebla',
      grupo: '5',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
      rol: 'Instructora',
    },
    {
      id: '05',
      nombre: 'Elena Rodríguez',
      sede: 'Guadalajara',
      grupo: '5',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
      rol: 'Instructora',
    },
    {
      id: '06',
      nombre: 'Fabiola Sánchez',
      sede: 'Saltillo',
      grupo: '5',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
      rol: 'Staff',
    },
    {
      id: '07',
      nombre: 'Gabriela Torres',
      sede: 'Ciudad de México',
      grupo: '5',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
      rol: 'Staff',
    },
    {
      id: '08',
      nombre: 'Hilda Vargas',
      sede: 'Puebla',
      grupo: '5',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
      rol: 'Staff',
    },
    {
      id: '09',
      nombre: 'Isabel Ramírez',
      sede: 'Monterrey',
      grupo: '5',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
      rol: 'Instructora',
    },
    {
      id: '10',
      nombre: 'Julia Gómez',
      sede: 'Monterrey',
      grupo: '5',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
      rol: 'Instructora',
    },
    {
      id: '11',
      nombre: 'Karla Díaz',
      sede: 'Culiacán',
      grupo: '5',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
      rol: 'Facilitadora',
    },
    {
      id: '12',
      nombre: 'Laura Fernández',
      sede: 'Guadalajara',
      grupo: '5',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
      rol: 'Instructora',
    },
    {
      id: '13',
      nombre: 'María Morales',
      sede: 'Aguascalientes',
      grupo: '5',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
      rol: 'Instructora',
    },
    {
      id: '14',
      nombre: 'Nadia Ortiz',
      sede: 'Monterrey',
      grupo: '5',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
      rol: 'Instructora',
    },
    {
      id: '15',
      nombre: 'Olivia Castro',
      sede: 'Ciudad de México',
      grupo: '5',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
      rol: 'Staff',
    },
    {
      id: '16',
      nombre: 'Paula Mendoza',
      sede: 'Toluca',
      grupo: '5',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
      rol: 'Facilitadora',
    },
    {
      id: '17',
      nombre: 'Raquel Silva',
      sede: 'León',
      grupo: '5',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
      rol: 'Staff',
    },
    {
      id: '18',
      nombre: 'Sofía Rojas',
      sede: 'Chihuahua',
      grupo: '5',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
      rol: 'Instructora',
    },
    {
      id: '19',
      nombre: 'Tania Navarro',
      sede: 'Toluca',
      grupo: '5',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
      rol: 'Instructora',
    },
    {
      id: '20',
      nombre: 'Valeria Luna',
      sede: 'San Luis Potosí',
      grupo: '5',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
      rol: 'Staff',
    },
    {
      id: '21',
      nombre: 'Wendy Salazar',
      sede: 'Monterrey',
      grupo: '5',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
      rol: 'Facilitadora',
    },
  ];

  // Obtener sedes y roles únicos
  const uniqueSedes = Array.from(new Set(apoyoData.map((apoyo) => apoyo.sede))).sort();
  const uniqueRoles = Array.from(new Set(apoyoData.map((apoyo) => apoyo.rol))).sort();

  const sedeOptions = [
    { label: 'Todas', value: '__All__' },
    ...uniqueSedes.map((sede) => ({ label: sede, value: sede })),
  ];

  const rolOptions = [
    { label: 'Todas', value: '__All__' },
    ...uniqueRoles.map((rol) => ({ label: rol, value: rol })),
  ];

  // Filtrar los datos según el valor de búsqueda, sede y rol
  const filteredData = useMemo(() => {
    const searchTerm = inputValue.toLowerCase().trim();
    return apoyoData.filter((apoyo) => {
      // Filtro por nombre
      const matchesSearch = !searchTerm || apoyo.nombre.toLowerCase().includes(searchTerm);

      // Filtro por sede
      const matchesSede = section === '__All__' ? true : apoyo.sede === section;

      // Filtro por rol
      const selectedRol = filterActivaExtra['rol'];
      const matchesRol = selectedRol === '__All__' ? true : apoyo.rol === selectedRol;

      return matchesSearch && matchesSede && matchesRol;
    });
  }, [inputValue, section, filterActivaExtra]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage,
  );

  const sectionFilterChange = (value: string) => {
    setSection(value);
    setInputValue(''); // Resetear búsqueda al cambiar de sección
    setCurrentPage(0); // Resetear página al cambiar de filtro
  };

  return (
    <div className='p-6 pl-14 flex gap-4 flex-col text-primaryShade pagina-sedes'>
      <PageTitle>Gestión de Apoyo</PageTitle>

      <div className='fondo-sedes flex flex-col p-6 gap-4 overflow-auto'>
        {/* Fila de búsqueda, filtro y botón */}
        <div className='flex flex-wrap items-center justify-between gap-4'>
          <div className='flex flex-1 gap-4'>
            <div className='basis-2/3'>
              <InputField
                label=''
                showDescription={false}
                placeholder='Search'
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
                label='Filtros'
                showSecciones
                labelSecciones='Sedes'
                secciones={sedeOptions}
                seccionActiva={section}
                onChangeSeccion={sectionFilterChange}
                extraFilters={[
                  {
                    label: 'Roles',
                    key: 'rol',
                    options: rolOptions,
                  },
                ]}
                filterActiva={filterActivaExtra}
                onExtraFilterChange={extraHandleFilterChange}
              />
            </div>
          </div>
        </div>

        {/* Tabla */}
        <div className='overflow-x-auto'>
          <table className='min-w-full text-left text-sm'>
            <thead className='text-purple-800 font-bold'>
              <tr className='texto-primary-shade'>
                <th className='p-2 text-center'>ID</th>
                <th className='p-2 text-center'>Nombre</th>
                <th className='p-2 text-center'>Sede</th>
                <th className='p-2 text-center'>Grupo</th>
                <th className='p-2 text-center'>Correo</th>
                <th className='p-2 text-center'>Teléfono</th>
                <th className='p-2 text-center'>Acciones</th>
              </tr>
            </thead>
            <tbody className='text-gray-700'>
              {paginatedData.map((apoyo, index) => (
                <tr key={index} className='border-t border-gray-300'>
                  <td className='p-2 text-center'>{apoyo.id}</td>
                  <td className='p-2 text-center'>{apoyo.nombre}</td>
                  <td className='p-2 text-center'>{apoyo.sede}</td>
                  <td className='p-2 text-center'>{apoyo.grupo}</td>
                  <td className='p-2 text-center'>{apoyo.correo}</td>
                  <td className='p-2 text-center'>{apoyo.telefono}</td>
                  <td className='p-2 flex gap-2 justify-center'>
                    <Button label='' variant='error' round showLeftIcon IconLeft={Trash} />
                    <Button label='' variant='warning' round showLeftIcon IconLeft={Highlighter} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        <div className='mt-auto pt-4 flex justify-center'>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            variant='primary'
            pageLinks={Array(totalPages).fill('#')}
          />
        </div>
      </div>
    </div>
  );
};

export default GestionApoyo;
