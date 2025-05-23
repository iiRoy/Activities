'use client';

import { useState } from 'react';
import PageTitle from '@/components/headers_menu_users/pageTitle';
import InputField from '@/components/buttons_inputs/InputField';
import FiltroEvento from '@/components/headers_menu_users/FiltroEvento';
import Button from '@/components/buttons_inputs/Button';
import { Plus, Trash, Trash2 } from 'lucide-react';

const mockGroups = [{ id: '034' }, { id: '141' }, { id: '012' }, { id: '098' }];

const EditarMentora = () => {
  const [inputValue, setInputValue] = useState('');
  const [section, setSection] = useState('SEDES');
  const [filterActivaExtra, setFilterActivaExtra] = useState({});
  const [fadeSec, setFadeSec] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGroups = mockGroups.filter((s) =>
    s.id.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const sectionFilterChange = (newSection: string) => {
    setSection(newSection);
    setFilterActivaExtra({});
  };

  const extraHandleFilterChange = (key: string, value: string) => {
    setFilterActivaExtra((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className='p-6 pl-14 flex gap-4 flex-col text-primaryShade pagina-sedes'>
      <PageTitle>Editar Mentora</PageTitle>

      <div className='fondo-sedes flex flex-col p-6 gap-4 overflow-auto'>
        <div className='flex justify-between gap-4 items-center pb-2 mb-4'>
          <div className='basis-1/5'>
            <InputField
              label='ID'
              darkText={true}
              showDescription={false}
              placeholder='02'
              showError={false}
              variant='accent'
              value={inputValue}
              onChangeText={(val) => setInputValue(val)}
            />
          </div>

          <div className='basis-2/5'>
            <InputField
              label='Nombre'
              darkText={true}
              showDescription={false}
              placeholder='Beatriz Mendoza'
              showError={false}
              variant='accent'
              value={inputValue}
              onChangeText={(val) => setInputValue(val)}
            />
          </div>

          <div className='basis-2/5'>
            <p className='texto-filtro'>Sede</p>
            <FiltroEvento
              disableCheckboxes
              label='ITESM Querétaro'
              showSecciones
              labelSecciones=''
              secciones={[
                { label: 'ITESM Puebla', value: 'Sedes1' },
                { label: 'ITESM Querétaro', value: 'Sedes2' },
                { label: 'ITESM Monterrey', value: 'Sedes3' },
              ]}
              seccionActiva={section}
              onChangeSeccion={sectionFilterChange}
              extraFilters={[]}
              filterActiva={filterActivaExtra}
              onExtraFilterChange={extraHandleFilterChange}
              fade={fadeSec}
            />
          </div>
        </div>

        <div className='flex gap-4 justify-between mb-4'>
          <div className='basis-1/2'>
            <InputField
              label='Correo'
              darkText={true}
              showDescription={false}
              placeholder='ejemplo@correo.com'
              showError={false}
              variant='accent'
              value={inputValue}
              onChangeText={(val) => setInputValue(val)}
            />
          </div>
          <div className='basis-1/2'>
            <InputField
              label='Teléfono'
              darkText={true}
              showDescription={false}
              placeholder='2228654709'
              showError={false}
              variant='accent'
              value={inputValue}
              onChangeText={(val) => setInputValue(val)}
            />
          </div>
        </div>

        <div className='flex gap-4 justify-between mb-4'>
          {/* Tabla */}
          <div className='overflow-x-auto bg-transparent rounded-xl p-4 basis-1/2'>
            <table className='w-full text-left'>
              <thead className='text-gray-400 text-sm border-b'>
                <tr className='mb-2'>
                  <th className='pb-2 text-center'>Grupo</th>
                  <Button label='Agregar grupo' variant='primary' showLeftIcon IconLeft={Plus} />
                </tr>
              </thead>
              <tbody className='text-gray-800'>
                {filteredGroups.map((s) => (
                  <tr key={s.id} className='border-b last:border-none'>
                    <td className='py-2 text-center'>{s.id}</td>
                    <td className='p-2 justify-center'>
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
          <div className='basis-1/2'></div>
        </div>

        {/* Botón Listo */}
        <div className='flex gap-4 justify-between mt-auto'>
          <div className='flex gap-4'>
            <Button label='Confirmar' variant='primary' href='../' />

            <Button label='Cancelar' variant='secondary' href='../' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarMentora;
