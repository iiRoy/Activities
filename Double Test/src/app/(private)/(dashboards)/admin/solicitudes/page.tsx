'use client';

import Pagination from '@/components/buttons_inputs/Pagination';
import InputField from '@/components/buttons_inputs/InputField';
import Button from '@/components/buttons_inputs/Button';
import PageTitle from '@/components/headers_menu_users/pageTitle';
import { MagnifyingGlass, Eye, Check, X } from '@/components/icons';
import { useState, useMemo } from 'react';

// Interfaces para los datos de cada sección
interface Participante {
  id: string;
  nombre: string;
  sede: string;
  fecha: string;
  correo: string;
  telefono: string;
  grupo_preferido: string;
}

interface ApoyoStaff {
  id: string;
  nombre: string;
  sede: string;
  fecha: string;
  correo: string;
  telefono: string;
  area: string;
  grupo_preferido: string;
}

interface Sede {
  id: string;
  institucion: string;
  lugar: string;
  fecha: string;
}

const SolicitudesRegistroAdmin = () => {
  const [inputValue, setInputValue] = useState('');
  const [section, setSection] = useState<'PARTICIPANTES' | 'APOYO & STAFF' | 'SEDES'>(
    'PARTICIPANTES',
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [isRejectPopupOpen, setIsRejectPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Participante | ApoyoStaff | Sede | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<string>('Grupo 03');

  const rowsPerPage = 4;

  const participantesData: Participante[] = [
    {
      id: '01',
      nombre: 'Sara Beltrán',
      sede: 'ITESM Querétaro',
      fecha: '10/03/2025',
      correo: 'sara@correo.com',
      telefono: '2223564354',
      grupo_preferido: 'Luna',
    },
    {
      id: '02',
      nombre: 'Tamara Ibarra',
      sede: 'ITESM Puebla',
      fecha: '10/03/2025',
      correo: 'tamara@correo.com',
      telefono: '2224722344',
      grupo_preferido: 'Sol',
    },
    {
      id: '03',
      nombre: 'Violeta Espinosa',
      sede: 'ITESM Monterrey',
      fecha: '10/03/2025',
      correo: 'violeta@correo.com',
      telefono: '2224665782',
      grupo_preferido: 'Mar',
    },
    {
      id: '04',
      nombre: 'Amelia Jurado',
      sede: 'ITESM Hidalgo',
      fecha: '10/03/2025',
      correo: 'amelia@correo.com',
      telefono: '2225743455',
      grupo_preferido: 'Montaña',
    },
    {
      id: '05',
      nombre: 'Andrea González',
      sede: 'ITESM Puebla',
      fecha: '10/03/2025',
      correo: 'andrea@correo.com',
      telefono: '2224722344',
      grupo_preferido: 'Mar',
    },
    {
      id: '06',
      nombre: 'Laura Rodríguez',
      sede: 'ITESM Monterrey',
      fecha: '10/03/2025',
      correo: 'laura@correo.com',
      telefono: '2224665782',
      grupo_preferido: 'Luna',
    },
    {
      id: '07',
      nombre: 'Mónica Sánchez',
      sede: 'ITESM Hidalgo',
      fecha: '10/03/2025',
      correo: 'monica@correo.com',
      telefono: '2225743455',
      grupo_preferido: 'Sol',
    },
  ];

  const apoyoStaffData: ApoyoStaff[] = [
    {
      id: '01',
      nombre: 'Sofia Ruiz',
      sede: 'ITESM Guadalajara',
      fecha: '12/03/2025',
      correo: 'sofia@correo.com',
      telefono: '2224655893',
      area: 'Staff',
      grupo_preferido: 'Luna',
    },
    {
      id: '02',
      nombre: 'Laura Gómez',
      sede: 'ITESM Monterrey',
      fecha: '12/03/2025',
      correo: 'laura@correo.com',
      telefono: '2224653561',
      area: 'Facilitadora',
      grupo_preferido: 'Sol',
    },
    {
      id: '03',
      nombre: 'Mariana Sánchez',
      sede: 'ITESM Monterrey',
      fecha: '13/03/2025',
      correo: 'mariana@correo.com',
      telefono: '2224453389',
      area: 'Instructora',
      grupo_preferido: 'Montaña',
    },
    {
      id: '04',
      nombre: 'Ana Martínez',
      sede: 'ITESM Puebla',
      fecha: '13/03/2025',
      correo: 'ana@correo.com',
      telefono: '22246553211',
      area: 'Staff',
      grupo_preferido: 'Sol',
    },
  ];

  const sedesData: Sede[] = [
    { id: '01', institucion: 'UMAD', lugar: 'Puebla', fecha: '15/03/2025' },
    { id: '02', institucion: 'UNAM', lugar: 'Ciudad de México', fecha: '15/03/2025' },
    { id: '03', institucion: 'ITESM Toluca', lugar: 'Hidalgo', fecha: '16/03/2025' },
  ];

  // Filtrar los datos según el valor de búsqueda y la sección activa
  const filteredData = useMemo(() => {
    const searchTerm = inputValue.toLowerCase().trim();
    if (!searchTerm) {
      return section === 'PARTICIPANTES'
        ? participantesData
        : section === 'APOYO & STAFF'
          ? apoyoStaffData
          : sedesData;
    }

    if (section === 'PARTICIPANTES') {
      return participantesData.filter(
        (item) =>
          item.nombre.toLowerCase().includes(searchTerm) ||
          item.sede.toLowerCase().includes(searchTerm) ||
          item.fecha.toLowerCase().includes(searchTerm),
      );
    } else if (section === 'APOYO & STAFF') {
      return apoyoStaffData.filter(
        (item) =>
          item.nombre.toLowerCase().includes(searchTerm) ||
          item.sede.toLowerCase().includes(searchTerm) ||
          item.fecha.toLowerCase().includes(searchTerm),
      );
    } else {
      return sedesData.filter(
        (item) =>
          item.institucion.toLowerCase().includes(searchTerm) ||
          item.lugar.toLowerCase().includes(searchTerm) ||
          item.fecha.toLowerCase().includes(searchTerm),
      );
    }
  }, [inputValue, section]);

  const sectionFilterChange = (newSection: 'PARTICIPANTES' | 'APOYO & STAFF' | 'SEDES') => {
    setSection(newSection);
    setCurrentPage(0); // Reset page when switching sections
    setInputValue(''); // Resetear la barra de búsqueda al cambiar de sección
  };

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage,
  );

  const openPopup = (item: Participante | ApoyoStaff | Sede) => {
    setSelectedItem(item);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedItem(null);
  };

  const openConfirmPopup = (item: Participante | ApoyoStaff | Sede) => {
    setSelectedItem(item);
    setIsConfirmPopupOpen(true);
  };

  const closeConfirmPopup = () => {
    setIsConfirmPopupOpen(false);
    setSelectedItem(null);
    setSelectedGroup('Grupo 03');
  };

  const openRejectPopup = (item: Participante | ApoyoStaff | Sede) => {
    setSelectedItem(item);
    setIsRejectPopupOpen(true);
  };

  const closeRejectPopup = () => {
    setIsRejectPopupOpen(false);
    setSelectedItem(null);
  };

  const handleAccept = () => {
    console.log('Solicitud aceptada para:', selectedItem, 'Grupo:', selectedGroup);
    closeConfirmPopup();
  };

  const handleReject = () => {
    console.log('Solicitud rechazada para:', selectedItem);
    closeRejectPopup();
  };

  return (
    <div className='p-6 pl-14 flex gap-4 flex-col text-primaryShade pagina-solicitudes'>
      <PageTitle>Solicitudes de Registro</PageTitle>

      <div className='fondo-sedes flex flex-col p-6 gap-4 overflow-auto'>
        {/* Fila de búsqueda */}
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
          </div>
        </div>

        {/* Section Headers */}
        <div className='flex justify-center gap-48 mt-2 pb-2'>
          <div
            className={`cursor-pointer text-lg font-bold ${section === 'PARTICIPANTES' ? 'text-purple-800' : 'text-gray-500'}`}
            onClick={() => sectionFilterChange('PARTICIPANTES')}
          >
            Participantes
          </div>
          <div
            className={`cursor-pointer text-lg font-bold ${section === 'APOYO & STAFF' ? 'text-purple-800' : 'text-gray-500'}`}
            onClick={() => sectionFilterChange('APOYO & STAFF')}
          >
            Apoyo & Staff
          </div>
          <div
            className={`cursor-pointer text-lg font-bold ${section === 'SEDES' ? 'text-purple-800' : 'text-gray-500'}`}
            onClick={() => sectionFilterChange('SEDES')}
          >
            Sedes
          </div>
        </div>

        {/* Tabla */}
        <div className='overflow-x-auto'>
          <table className='min-w-full text-left text-sm'>
            <thead className='text-purple-800 font-bold'>
              <tr className='texto-primary-shade'>
                <th className='p-2 text-center'></th>
                <th className='p-2 text-center'></th>
                {section === 'PARTICIPANTES' && (
                  <>
                    <th className='p-2 text-center'>Nombre</th>
                    <th className='p-2 text-center'>Sede</th>
                    <th className='p-2 text-center'>Fecha</th>
                  </>
                )}
                {section === 'APOYO & STAFF' && (
                  <>
                    <th className='p-2 text-center'>Nombre</th>
                    <th className='p-2 text-center'>Sede</th>
                    <th className='p-2 text-center'>Fecha</th>
                  </>
                )}
                {section === 'SEDES' && (
                  <>
                    <th className='p-2 text-center'>Institución</th>
                    <th className='p-2 text-center'>Lugar</th>
                    <th className='p-2 text-center'>Fecha</th>
                  </>
                )}
                <th className='p-2 text-center'></th>
                <th className='p-2 text-center'></th>
              </tr>
            </thead>
            <tbody className='text-gray-700'>
              {paginatedData.map((item, index) => (
                <tr key={index} className='border-t border-gray-300'>
                  {section === 'PARTICIPANTES' && (
                    <>
                      <td className='p-2 text-center'></td>
                      <td className='p-2 text-center'>
                        <Button
                          label=''
                          variant='warning'
                          round
                          showLeftIcon
                          IconLeft={Eye}
                          onClick={() => openPopup(item as Participante)}
                        />
                      </td>
                      <td className='p-2 text-center'>{(item as Participante).nombre}</td>
                      <td className='p-2 text-center'>{(item as Participante).sede}</td>
                      <td className='p-2 text-center'>{(item as Participante).fecha}</td>
                      <td className='p-2 text-center'>
                        <div className='flex gap-4 justify-center'>
                          <Button
                            label=''
                            variant='success'
                            round
                            showLeftIcon
                            IconLeft={Check}
                            onClick={() => openConfirmPopup(item as Participante)}
                          />

                          <Button
                            label=''
                            variant='error'
                            round
                            showLeftIcon
                            IconLeft={X}
                            onClick={() => openRejectPopup(item as Participante)}
                          />
                        </div>
                      </td>
                    </>
                  )}
                  {section === 'APOYO & STAFF' && (
                    <>
                      <td className='p-2 text-center'></td>
                      <td className='p-2 text-center'>
                        <Button
                          label=''
                          variant='warning'
                          round
                          showLeftIcon
                          IconLeft={Eye}
                          onClick={() => openPopup(item as ApoyoStaff)}
                        />
                      </td>
                      <td className='p-2 text-center'>{(item as ApoyoStaff).nombre}</td>
                      <td className='p-2 text-center'>{(item as ApoyoStaff).sede}</td>
                      <td className='p-2 text-center'>{(item as ApoyoStaff).fecha}</td>
                      <td className='p-2 text-center'>
                        <Button
                          label=''
                          variant='success'
                          round
                          showLeftIcon
                          IconLeft={Check}
                          onClick={() => openConfirmPopup(item as ApoyoStaff)}
                        />
                      </td>
                      <td className='p-2 text-center'>
                        <Button
                          label=''
                          variant='error'
                          round
                          showLeftIcon
                          IconLeft={X}
                          onClick={() => openRejectPopup(item as ApoyoStaff)}
                        />
                      </td>
                    </>
                  )}
                  {section === 'SEDES' && (
                    <>
                      <td className='p-2 text-center'></td>
                      <td className='p-2 text-center'>
                        <Button
                          label=''
                          variant='warning'
                          round
                          showLeftIcon
                          IconLeft={Eye}
                          onClick={() => openPopup(item as Sede)}
                        />
                      </td>
                      <td className='p-2 text-center'>{(item as Sede).institucion}</td>
                      <td className='p-2 text-center'>{(item as Sede).lugar}</td>
                      <td className='p-2 text-center'>{(item as Sede).fecha}</td>
                      <td className='p-2 text-center'>
                        <Button
                          label=''
                          variant='success'
                          round
                          showLeftIcon
                          IconLeft={Check}
                          onClick={() => openConfirmPopup(item as Sede)}
                        />
                      </td>
                      <td className='p-2 text-center'>
                        <Button
                          label=''
                          variant='error'
                          round
                          showLeftIcon
                          IconLeft={X}
                          onClick={() => openRejectPopup(item as Sede)}
                        />
                      </td>
                    </>
                  )}
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
            variant='secondary-shade'
            pageLinks={Array(totalPages).fill('#')}
          />
        </div>

        {/* Pop-up de información */}
        {isPopupOpen && selectedItem && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='texto-popup bg-white p-6 rounded-lg shadow-lg w-96 relative'>
              <h2 className='text-3xl font-bold mb-4 text-center'>Solicitud de Registro</h2>
              {section === 'PARTICIPANTES' && selectedItem && (
                <div className='pt-6 pb-6'>
                  <p>
                    <strong>Nombre:</strong> {(selectedItem as Participante).nombre}
                  </p>
                  <p>
                    <strong>Sede:</strong> {(selectedItem as Participante).sede}
                  </p>
                  <p>
                    <strong>Correo:</strong> {(selectedItem as Participante).correo}
                  </p>
                  <p>
                    <strong>Teléfono:</strong> {(selectedItem as Participante).telefono}
                  </p>
                  <p>
                    <strong>Grupo preferido:</strong>{' '}
                    {(selectedItem as Participante).grupo_preferido}
                  </p>
                </div>
              )}
              {section === 'APOYO & STAFF' && selectedItem && (
                <div className='pt-6 pb-6'>
                  <p>
                    <strong>Nombre:</strong> {(selectedItem as ApoyoStaff).nombre}
                  </p>
                  <p>
                    <strong>Sede:</strong> {(selectedItem as ApoyoStaff).sede}
                  </p>
                  <p>
                    <strong>Correo:</strong> {(selectedItem as ApoyoStaff).correo}
                  </p>
                  <p>
                    <strong>Teléfono:</strong> {(selectedItem as ApoyoStaff).telefono}
                  </p>
                  <p>
                    <strong>Área de preferencia:</strong> {(selectedItem as ApoyoStaff).area}
                  </p>
                </div>
              )}
              {section === 'SEDES' && selectedItem && (
                <div className='pt-6 pb-6'>
                  <p>
                    <strong>Institución:</strong> {(selectedItem as Sede).institucion}
                  </p>
                  <p>
                    <strong>Lugar:</strong> {(selectedItem as Sede).lugar}
                  </p>
                </div>
              )}
              <div className='mt-4 flex justify-center'>
                <Button label='Cerrar' variant='primary' onClick={closePopup} />
              </div>
            </div>
          </div>
        )}

        {/* Pop-up de confirmación (Aceptar) */}
        {isConfirmPopupOpen && selectedItem && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white p-6 rounded-lg shadow-lg w-96 relative'>
              <h2 className='text-3xl font-bold mb-4 text-center'>
                ¿Aceptar a{' '}
                {section === 'SEDES'
                  ? (selectedItem as Sede).institucion
                  : (selectedItem as Participante | ApoyoStaff).nombre}
                ?
              </h2>
              <div className='pt-6 pb-6'>
                {section === 'PARTICIPANTES' && selectedItem && (
                  <>
                    <p>
                      <strong>Sede:</strong> {(selectedItem as Participante).sede}
                    </p>
                    <p>
                      <strong>Grupo preferido:</strong>{' '}
                      {(selectedItem as Participante).grupo_preferido}
                    </p>
                    <p className='mt-4'>
                      <strong>Asignar a un grupo</strong>
                    </p>
                    <select
                      className='w-full p-2 border rounded mt-2 bg-purple-100'
                      value={selectedGroup}
                      onChange={(e) => setSelectedGroup(e.target.value)}
                    >
                      <option>Luna</option>
                      <option>Sol</option>
                      <option>Mar</option>
                      <option>Montaña</option>
                    </select>
                  </>
                )}
                {section === 'APOYO & STAFF' && selectedItem && (
                  <>
                    <p>
                      <strong>Sede:</strong> {(selectedItem as ApoyoStaff).sede}
                    </p>
                    <p>
                      <strong>Rol preferido:</strong> {(selectedItem as ApoyoStaff).area}
                    </p>
                    <p className='mt-4'>
                      <strong>Asignar un rol</strong>
                    </p>
                    <select
                      className='w-full p-2 border rounded mt-2 bg-purple-100'
                      value={selectedGroup}
                      onChange={(e) => setSelectedGroup(e.target.value)}
                    >
                      <option>Instructora</option>
                      <option>Staff</option>
                      <option>Facilitadora</option>
                    </select>
                    <p className='mt-4'>
                      <strong>Asignar a un grupo</strong>
                    </p>
                    <select
                      className='w-full p-2 border rounded mt-2 bg-purple-100'
                      value={selectedGroup}
                      onChange={(e) => setSelectedGroup(e.target.value)}
                    >
                      <option>Luna</option>
                      <option>Sol</option>
                      <option>Mar</option>
                      <option>Montaña</option>
                    </select>
                  </>
                )}
                {section === 'SEDES' && selectedItem && (
                  <>
                    <p>
                      <strong>Institución:</strong> {(selectedItem as Sede).institucion}
                    </p>
                    <p>
                      <strong>Lugar:</strong> {(selectedItem as Sede).lugar}
                    </p>
                    <p>
                      <strong>Fecha:</strong> {(selectedItem as Sede).fecha}
                    </p>
                  </>
                )}
              </div>
              <div className='mt-4 flex justify-center gap-4'>
                <Button label='Aceptar' variant='success' onClick={handleAccept} />
                <Button label='Cancelar' variant='primary' onClick={closeConfirmPopup} />
              </div>
            </div>
          </div>
        )}

        {/* Pop-up de rechazo */}
        {isRejectPopupOpen && selectedItem && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white p-6 rounded-lg shadow-lg w-96 relative'>
              <h2 className='text-2xl font-bold mx-4 mt-6 mb-12 text-center'>
                ¿Seguro que quieres rechazar la solicitud de{' '}
                {section === 'SEDES'
                  ? (selectedItem as Sede).institucion
                  : (selectedItem as Participante | ApoyoStaff).nombre}
                ?
              </h2>
              <div className='mt-4 flex justify-center gap-4'>
                <Button label='Rechazar' variant='error' onClick={handleReject} />
                <Button label='Cancelar' variant='primary' onClick={closeRejectPopup} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolicitudesRegistroAdmin;
