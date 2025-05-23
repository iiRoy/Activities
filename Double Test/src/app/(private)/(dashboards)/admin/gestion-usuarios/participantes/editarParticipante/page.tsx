'use client';

import { useState } from 'react';
import PageTitle from '@/components/headers_menu_users/pageTitle';
import InputField from '@/components/buttons_inputs/InputField';
import FiltroEvento from '@/components/headers_menu_users/FiltroEvento';
import Button from '@/components/buttons_inputs/Button';
import { FileArchive, FileArchiveIcon, FileBoxIcon, FileText, Plus } from 'lucide-react';

const EditarParticipante = () => {
  const [inputValue, setInputValue] = useState('');
  const [section, setSection] = useState('SEDES');
  const [filterActivaExtra, setFilterActivaExtra] = useState({});
  const [fadeSec, setFadeSec] = useState(false);

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
      <PageTitle>Editar Participante</PageTitle>

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

        <div className='flex justify-between gap-4 items-center pb-2 mb-4'>
          <div>
            <p className='texto-filtro'>Grupo Asignado</p>
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

        <div className='flex justify-between gap-4 items-center pb-2 mb-4'>
          <div>
            <p className='texto-filtro'>Carta Firmada</p>
            <Button label='' round variant='primary' showLeftIcon IconLeft={FileText} href='../' />
          </div>
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

export default EditarParticipante;
