'use client';

import Pagination from '@/components/buttons_inputs/Pagination';
import InputField from '@/components/buttons_inputs/InputField';
import Button from '@/components/buttons_inputs/Button';
import PageTitle from '@/components/headers_menu_users/pageTitle';
import FiltroEvento from '@/components/headers_menu_users/FiltroEvento';
import { MagnifyingGlass, Trash, Highlighter } from '@/components/icons';
import { useState, useMemo } from 'react';

const GestionParticipantes = () => {
  const [inputValue, setInputValue] = useState('');
  const [section, setSection] = useState('__All__'); // Inicializar con "Todas" para sedes
  const [filterActivaExtra, setFilterActivaExtra] = useState({ grupo: '__All__' }); // Inicializar con "Todas" para grupos
  const [currentPage, setCurrentPage] = useState(0);

  const rowsPerPage = 10;

  const extraHandleFilterChange = (key: string, value: string) => {
    setFilterActivaExtra((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const participantesData = [
    {
      id: '01',
      nombre: 'Ana García',
      sede: 'Puebla',
      grupo: 'Luna',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '02',
      nombre: 'Beatriz López',
      sede: 'Querétaro',
      grupo: 'Sol',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '03',
      nombre: 'Clara Martínez',
      sede: 'Monterrey',
      grupo: 'Montaña',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '04',
      nombre: 'Diana Pérez',
      sede: 'Hidalgo',
      grupo: 'Luna',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '05',
      nombre: 'Elena Rodríguez',
      sede: 'Guadalajara',
      grupo: 'Mar',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '06',
      nombre: 'Fabiola Sánchez',
      sede: 'Saltillo',
      grupo: 'Montaña',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '07',
      nombre: 'Gabriela Torres',
      sede: 'Ciudad de México',
      grupo: 'Sol',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '08',
      nombre: 'Hilda Vargas',
      sede: 'Puebla',
      grupo: 'Sol',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '09',
      nombre: 'Isabel Ramírez',
      sede: 'Guadalajara',
      grupo: 'Luna',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '10',
      nombre: 'Julia Gómez',
      sede: 'Monterrey',
      grupo: 'Montaña',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '11',
      nombre: 'Karla Díaz',
      sede: 'Culiacán',
      grupo: 'Luna',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '12',
      nombre: 'Laura Fernández',
      sede: 'San Luis Potosí',
      grupo: 'Mar',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '13',
      nombre: 'María Morales',
      sede: 'Aguascalientes',
      grupo: 'Sol',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '14',
      nombre: 'Nadia Ortiz',
      sede: 'Saltillo',
      grupo: 'Mar',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '15',
      nombre: 'Olivia Castro',
      sede: 'Ciudad de México',
      grupo: 'Montaña',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '16',
      nombre: 'Paula Mendoza',
      sede: 'Puebla',
      grupo: 'Luna',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '17',
      nombre: 'Raquel Silva',
      sede: 'León',
      grupo: 'Luna',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '18',
      nombre: 'Sofía Rojas',
      sede: 'Monterrey',
      grupo: 'Sol',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '19',
      nombre: 'Tania Navarro',
      sede: 'Monterrey',
      grupo: 'Montaña',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '20',
      nombre: 'Valeria Luna',
      sede: 'San Luis Potosí',
      grupo: 'Mar',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '21',
      nombre: 'Wendy Salazar',
      sede: 'Aguascalientes',
      grupo: 'Mar',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '22',
      nombre: 'Ximena Campos',
      sede: 'Guadalajara',
      grupo: 'Luna',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '23',
      nombre: 'Yolanda Vega',
      sede: 'Saltillo',
      grupo: 'Montaña',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '24',
      nombre: 'Zoe Herrera',
      sede: 'Ciudad de México',
      grupo: 'Luna',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '25',
      nombre: 'Alma Rivas',
      sede: 'Puebla',
      grupo: 'Luna',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '26',
      nombre: 'Berta Guzmán',
      sede: 'León',
      grupo: 'Sol',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '27',
      nombre: 'Carmen Flores',
      sede: 'Monterrey',
      grupo: 'Montaña',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '28',
      nombre: 'Delia Cruz',
      sede: 'Culiacán',
      grupo: 'Mar',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '29',
      nombre: 'Esther Paredes',
      sede: 'San Luis Potosí',
      grupo: 'Mar',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '30',
      nombre: 'Fernanda Meza',
      sede: 'Aguascalientes',
      grupo: 'Sol',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '31',
      nombre: 'Gloria Esparza',
      sede: 'Saltillo',
      grupo: 'Montaña',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '32',
      nombre: 'Helena Soto',
      sede: 'Ciudad de México',
      grupo: 'Luna',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '33',
      nombre: 'Inés Salazar',
      sede: 'Puebla',
      grupo: 'Montaña',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '34',
      nombre: 'Jazmín Ríos',
      sede: 'León',
      grupo: 'Sol',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '35',
      nombre: 'Kenia Prado',
      sede: 'Monterrey',
      grupo: 'Luna',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '36',
      nombre: 'Lilia Estrada',
      sede: 'Culiacán',
      grupo: 'Mar',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '37',
      nombre: 'Mónica Tapia',
      sede: 'San Luis Potosí',
      grupo: 'Montaña',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
    {
      id: '38',
      nombre: 'Natalia Cordero',
      sede: 'Aguascalientes',
      grupo: 'Luna',
      correo: 'ejemplo@correo.com',
      telefono: '2222222222',
    },
  ];

  // Obtener sedes y grupos únicos
  const uniqueSedes = Array.from(
    new Set(participantesData.map((participante) => participante.sede)),
  ).sort();
  const uniqueGrupos = Array.from(
    new Set(participantesData.map((participante) => participante.grupo)),
  ).sort();

  const sedeOptions = [
    { label: 'Todas', value: '__All__' },
    ...uniqueSedes.map((sede) => ({ label: sede, value: sede })),
  ];

  const grupoOptions = [
    { label: 'Todas', value: '__All__' },
    ...uniqueGrupos.map((grupo) => ({ label: grupo, value: grupo })),
  ];

  // Filtrar los datos según el valor de búsqueda, sede y grupo
  const filteredData = useMemo(() => {
    const searchTerm = inputValue.toLowerCase().trim();
    return participantesData.filter((participante) => {
      // Filtro por nombre
      const matchesSearch = !searchTerm || participante.nombre.toLowerCase().includes(searchTerm);

      // Filtro por sede
      const matchesSede = section === '__All__' ? true : participante.sede === section;

      // Filtro por grupo
      const selectedGrupo = filterActivaExtra['grupo'];
      const matchesGrupo =
        selectedGrupo === '__All__' ? true : participante.grupo === selectedGrupo;

      return matchesSearch && matchesSede && matchesGrupo;
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
      <PageTitle>Gestión de Participantes</PageTitle>

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
                    label: 'Grupos',
                    key: 'grupo',
                    options: grupoOptions,
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
              {paginatedData.map((participante, index) => (
                <tr key={index} className='border-t border-gray-300'>
                  <td className='p-2 text-center'>{participante.id}</td>
                  <td className='p-2 text-center'>{participante.nombre}</td>
                  <td className='p-2 text-center'>{participante.sede}</td>
                  <td className='p-2 text-center'>{participante.grupo}</td>
                  <td className='p-2 text-center'>{participante.correo}</td>
                  <td className='p-2 text-center'>{participante.telefono}</td>
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

export default GestionParticipantes;
