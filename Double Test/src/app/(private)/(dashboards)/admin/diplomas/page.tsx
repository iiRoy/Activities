'use client';

import React, { useEffect, useState } from 'react';
import Button from '@/components/buttons_inputs/Button';
import InputField from '@/components/buttons_inputs/InputField';
import PageTitle from '@/components/headers_menu_users/pageTitle';
import FiltroEvento from '@/components/headers_menu_users/FiltroEvento';
import { Download } from '@/components/icons';
import axios from 'axios';
import toast from 'react-hot-toast';

type UsuarioDiploma = {
  id: string;
  name: string;
  paternal_name: string;
  campus: string;
  role: string;
  start_date?: string;
};

const DiplomasPage = () => {
  const [users, setUsers] = useState<UsuarioDiploma[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [filterSede, setFilterSede] = useState('');
  const [filterRol, setFilterRol] = useState('');
  const [search, setSearch] = useState('');
  const [opcionesSede, setOpcionesSede] = useState<{ label: string; value: string }[]>([]);
  const [opcionesRol, setOpcionesRol] = useState<{ label: string; value: string }[]>([]);

  useEffect(() => {
    const fetchFiltros = async () => {
      try {
        const userId = localStorage.getItem('user_id') || '';
        const userRole = localStorage.getItem('user_role') || '';

        const res = await fetch(`/api/diplomas/filtros?user_id=${userId}&user_role=${userRole}`);
        const data = await res.json();

        setOpcionesSede(data.sedes.map((s: string) => ({ label: s, value: s })));
        setOpcionesRol(
          data.roles.map((r: string) => ({
            label: r.charAt(0).toUpperCase() + r.slice(1),
            value: r,
          })),
        );
      } catch {
        toast.error('Error cargando filtros');
      }
    };

    fetchFiltros();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userId = localStorage.getItem('user_id') || '';
        const userRole = localStorage.getItem('user_role') || '';

        const res = await fetch(
          `/api/diplomas/users?search=${encodeURIComponent(search)}&sede=${encodeURIComponent(filterSede)}&rol=${encodeURIComponent(filterRol)}&user_id=${userId}&user_role=${userRole}`,
        );

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Error ${res.status}: ${text}`);
        }

        const data = await res.json();
        if (!Array.isArray(data)) throw new Error('Respuesta no es un arreglo');

        setUsers(data);
      } catch (error: any) {
        console.error(error);
        toast.error('Error cargando usuarios');
        setUsers([]);
      }
    };

    fetchUsers();
  }, [search, filterSede, filterRol]);

  const toggleSelectAllVisible = () => {
    const visibleIds = users.map((u) => `${u.id}-${u.role}`);
    const allVisibleSelected = visibleIds.every((id) => selected.includes(id));
    if (allVisibleSelected) {
      setSelected((prev) => prev.filter((id) => !visibleIds.includes(id)));
    } else {
      setSelected((prev) => Array.from(new Set([...prev, ...visibleIds])));
    }
  };

  const toggleSelect = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const downloadIndividual = async (user: UsuarioDiploma) => {
    try {
      const res = await axios.post(
        '/api/diplomas/generate',
        {
          users: [user],
        },
        { responseType: 'blob' },
      );

      const blob = new Blob([res.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${user.name} ${user.paternal_name}.pdf`;
      a.click();
      a.remove();
    } catch (e) {
      toast.error('Error al descargar diploma');
    }
  };

  const downloadZIP = async () => {
    try {
      const usersSelected = users.filter((u) => selected.includes(`${u.id}-${u.role}`));
      const res = await axios.post(
        '/api/diplomas/generate',
        {
          users: usersSelected,
        },
        { responseType: 'blob' },
      );

      const blob = new Blob([res.data], { type: 'application/zip' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `diplomas.zip`;
      a.click();
      a.remove();
    } catch (e) {
      toast.error('Error generando ZIP');
    }
  };

  return (
    <div className='p-6 pl-14 flex gap-4 flex-col text-primaryShade pagina-sedes'>
      <PageTitle>Generar Diplomas</PageTitle>

      <div className='fondo-sedes flex flex-col p-6 gap-4 overflow-auto'>
        <div className='flex flex-wrap items-center justify-between gap-4'>
          <div className='flex flex-1 gap-4'>
            <div className='basis-2/3'>
              <InputField
                label=''
                placeholder='Buscar por nombre'
                value={search}
                onChangeText={setSearch}
                icon='MagnifyingGlass'
              />
            </div>
            <div className='basis-1/3'>
              <FiltroEvento
                disableCheckboxes
                label='Filtros'
                showSecciones
                labelSecciones='Sede'
                secciones={opcionesSede}
                seccionActiva={filterSede}
                onChangeSeccion={setFilterSede}
                extraFilters={[
                  {
                    label: 'Rol',
                    key: 'rol',
                    options: opcionesRol,
                  },
                ]}
                filterActiva={{ rol: filterRol }}
                onExtraFilterChange={(key, val) => setFilterRol(val)}
              />
            </div>
          </div>
        </div>

        <div className='overflow-x-auto'>
          <table className='min-w-full text-left text-sm'>
            <thead className='text-purple-800 font-bold'>
              <tr>
                <th className='p-2 text-center'>
                  <input type='checkbox' onChange={toggleSelectAllVisible} />
                </th>
                <th className='p-2 text-center'>Nombre</th>
                <th className='p-2 text-center'>Rol</th>
                <th className='p-2 text-center'>Sede</th>
                <th className='p-2 text-center'>Acciones</th>
              </tr>
            </thead>
            <tbody className='text-gray-700'>
              {users.map((user) => (
                <tr key={`${user.id}-${user.role}`} className='border-t border-gray-300'>
                  <td className='p-2 text-center'>
                    <input
                      type='checkbox'
                      checked={selected.includes(`${user.id}-${user.role}`)}
                      onChange={() => toggleSelect(`${user.id}-${user.role}`)}
                    />
                  </td>
                  <td className='p-2 text-center'>
                    {user.name} {user.paternal_name}
                  </td>
                  <td className='p-2 text-center capitalize'>{user.role}</td>
                  <td className='p-2 text-center'>{user.campus}</td>
                  <td className='p-2 flex gap-2 justify-center'>
                    <Button
                      label=''
                      variant='primary'
                      round
                      showLeftIcon
                      IconLeft={Download}
                      onClick={() => downloadIndividual(user)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='mt-auto pt-4 flex justify-end'>
          <Button
            label='Generar ZIP'
            variant='primary'
            IconLeft={Download}
            showLeftIcon
            onClick={downloadZIP}
            disabled={selected.length === 0}
          />
        </div>
      </div>
    </div>
  );
};

export default DiplomasPage;
