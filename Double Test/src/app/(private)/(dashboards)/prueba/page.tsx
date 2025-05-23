'use client';

import React, { useState } from 'react';
import Navbar from '@/components/headers_menu_users/navbar';
import Pagination from '@/components/buttons_inputs/Pagination';
import InputField from '@/components/buttons_inputs/InputField';
import Button from '@/components/buttons_inputs/Button';
import Checkbox from '@/components/buttons_inputs/Checkbox';
import MessageCard from '@/components/buttons_inputs/MessageCard';
import { Acorn, Check, Plus, Star, User, X } from '@/components/icons';

const EstadisticasAdmin = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      <div className='w-full flex flex-col gap-8'>
        {/*USER CARD*/}
        <Navbar />
        <Pagination
          currentPage={0}
          totalPages={6}
          variant='accent'
          pageLinks={['/prueba', '/prueba', '/prueba', '/prueba', '/prueba', '/']}
        />

        <Pagination
          currentPage={2}
          totalPages={4}
          variant='primary'
          pageLinks={['/prueba', '/prueba', '/prueba', '/prueba']}
        />

        <Pagination
          currentPage={1}
          totalPages={5}
          variant='secondary-shade'
          pageLinks={['/prueba', '/prueba', '/prueba', '/prueba', '/prueba']}
        />

        <InputField
          label='Buscar usuario'
          showDescription={false}
          placeholder='Escribe un nombre'
          showError={true}
          variant='primary'
          icon='User'
          value={inputValue}
          onChangeText={(val) => {
            console.log('Valor actual del input:', val);
            setInputValue(val);
          }}
        />

        <Button
          label='Mostrar valor'
          variant='success'
          onClick={() => alert(`Valor: ${inputValue}`)}
        />

        <InputField
          label='Label'
          description='Description'
          placeholder='Placeholder'
          error='Error'
          variant='warning'
          icon='User'
        />
        <InputField
          label='Sign In'
          showDescription={false}
          placeholder='Username'
          showError={false}
          variant='primary'
          icon='User'
        />
        <InputField
          label='Sign In'
          description='This input is disabled'
          placeholder='Username'
          showError={false}
          error='Error'
          variant='primary-disabled'
          icon='User'
        />
        <InputField
          label='Sign In'
          showDescription={false}
          placeholder='Username'
          error="Error: That user doesn't exist"
          variant='warning'
          icon='User'
        />

        <Button
          label='Perfil'
          variant='secondary'
          showLeftIcon
          IconLeft={User}
          showRightIcon
          IconRight={Plus}
        />
        <Button
          label='Iniciar sesión'
          variant='success'
          onClick={() => console.log('Iniciar sesión')}
          showLeftIcon
          IconLeft={User}
        />

        <Button label='Ir a Home' variant='primary' href='/' IconLeft={User} showLeftIcon />

        <Button label='Add' variant='primary' round showLeftIcon IconLeft={Star} />
        <Button label='Enviar' variant='success' />

        <Checkbox
          label='Label'
          color='white'
          checked={true}
          bordered={false}
          onChange={(val) => console.log('New state:', val)}
        />

        <Checkbox
          label='Label'
          color='purple'
          checked={true}
          bordered={false}
          onChange={(val) => console.log('New state:', val)}
        />

        <Checkbox
          label='Label'
          color='green'
          checked={false}
          onChange={(val) => console.log('New state:', val)}
        />

        <Checkbox
          label='Label'
          color='yellow'
          checked={false}
          bordered={true}
          onChange={(val) => console.log('New state:', val)}
        />

        <Checkbox
          label='Label'
          color='red'
          checked={true}
          bordered={false}
          onChange={(val) => console.log('New state:', val)}
        />

        <MessageCard
          color='purple'
          Icon={User}
          title='Label'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate orci sit amet nulla consequat, ac iaculis magna auctor. Nullam quis eros fermentum, condimentum neque ac, aliquet augue. Cras non bibendum eros. Maecenas non neque quam. Nam a elit a quam interdum suscipit et in lacus. Integer vitae luctus erat.'
          checkboxLabel='Acepto los términos'
          checkboxChecked={true}
          onCheckboxChange={(val) => console.log('New state:', val)}
          showAccept
          acceptVariant='success'
          acceptLabel='¡Sí!'
          acceptIcon={Check}
          onAccept={() => console.log('Aceptado')}
          showDoubt
          doubtVariant='warning'
          doubtLabel='No se'
          doubtIcon={Acorn}
          onDoubt={() => console.log('Prolongado')}
          showDecline
          declineVariant='error'
          declineLabel='No gracias'
          declineIcon={X}
          onDecline={() => console.log('Declinado')}
        />

        <MessageCard
          color='green'
          Icon={User}
          title='Label'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate orci sit amet nulla consequat, ac iaculis magna auctor. Nullam quis eros fermentum, condimentum neque ac, aliquet augue. Cras non bibendum eros. Maecenas non neque quam. Nam a elit a quam interdum suscipit et in lacus. Integer vitae luctus erat.'
          checkboxLabel='Acepto los términos'
          checkboxChecked={true}
          onCheckboxChange={(val) => console.log('New state:', val)}
          showAccept
          acceptVariant='success'
          acceptLabel='¡Sí!'
          acceptIcon={Check}
          onAccept={() => console.log('Aceptado')}
          showDoubt
          doubtVariant='warning'
          doubtLabel='No se'
          doubtIcon={Acorn}
          onDoubt={() => console.log('Prolongado')}
          showDecline
          declineVariant='error'
          declineLabel='No gracias'
          declineIcon={X}
          onDecline={() => console.log('Declinado')}
        />

        <MessageCard
          color='yellow'
          Icon={User}
          title='Label'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate orci sit amet nulla consequat, ac iaculis magna auctor. Nullam quis eros fermentum, condimentum neque ac, aliquet augue. Cras non bibendum eros. Maecenas non neque quam. Nam a elit a quam interdum suscipit et in lacus. Integer vitae luctus erat.'
          checkboxLabel='Acepto los términos'
          checkboxChecked={true}
          onCheckboxChange={(val) => console.log('New state:', val)}
          showAccept
          acceptVariant='success'
          acceptLabel='¡Sí!'
          acceptIcon={Check}
          onAccept={() => console.log('Aceptado')}
          showDecline
          declineVariant='error'
          declineLabel='No gracias'
          declineIcon={X}
          onDecline={() => console.log('Declinado')}
        />

        <MessageCard
          color='red'
          Icon={User}
          title='Label'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate orci sit amet nulla consequat, ac iaculis magna auctor. Nullam quis eros fermentum, condimentum neque ac, aliquet augue. Cras non bibendum eros. Maecenas non neque quam. Nam a elit a quam interdum suscipit et in lacus. Integer vitae luctus erat.'
          checkboxLabel='Acepto los términos'
          checkboxChecked={true}
          onCheckboxChange={(val) => console.log('New state:', val)}
          showDoubt
          doubtVariant='warning'
          doubtLabel='No se'
          doubtIcon={Acorn}
          onDoubt={() => console.log('Prolongado')}
          showDecline
          declineVariant='error'
          declineLabel='No gracias'
          declineIcon={X}
          onDecline={() => console.log('Declinado')}
        />
      </div>
    </div>
  );
};

export default EstadisticasAdmin;
