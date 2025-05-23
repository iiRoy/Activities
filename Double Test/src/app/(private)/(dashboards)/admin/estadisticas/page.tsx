'use client';
import GenericRadialChart from '@/components/graphics/bases/genericPieChart';
import GenericBarChart from '@/components/graphics/bases/genericBarChart';
import PageTitle from '@/components/headers_menu_users/pageTitle';
import CardSection from './CardSection';

const EstadisticasAdmin = () => {
  return (
    <div className='p-6 pl-14 flex gap-4 flex-col text-primaryShade'>
      <PageTitle>Estadísticas</PageTitle>
      <CardSection />
      <div className='flex flex-col gap-7'>
        {/* GRÁFICAS */}
        <div className='flex gap-7 flex-col md:flex-row'>
          <div className='w-full lg:w-2/5 h-[35vmax] min-h-[400px] text-secondary'>
            <GenericRadialChart
              apiEndpoint='/api/data?page=colaboradoras'
              dataPath='resumenColaboradoras'
              areaInner='rol'
              title='Colaboradoras'
            />
          </div>
          <div className='w-full lg:w-3/5 h-[35vmax] min-h-[400px] bg-white rounded-2xl text-primary'></div>
        </div>

        <div className='w-full h-[40vmax] min-h-[500px] text-accent'>
          <GenericBarChart
            apiEndpoint='/api/data?page=sedes'
            dataPath='resumenSedes'
            xKey='sede'
            title='Personas Aceptadas por SEDE'
            labelFormatterPrefix='SEDE: '
            selectAll={false}
            deselectAll={true}
            maxItemsSelected={5}
          />
        </div>
      </div>
      <div className='flex flex-col w-full lg:w-4/6'></div>
    </div>
  );
};

export default EstadisticasAdmin;
