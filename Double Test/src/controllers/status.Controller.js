const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// mapa de estados
const statusMaps = {
  venues_status: {
    Pendiente: 'Pendiente',
    Registrada_sin_participantes: 'Registrada sin participantes',
    Registrada_con_participantes: 'Registrada con participantes',
    Cancelada: 'Cancelada',
    Rechazada: 'Rechazada',
  },
  participants_status: {
    Pendiente: 'Pendiente',
    Aprobada: 'Aprobada',
    Rechazada: 'Rechazada',
    Cancelada: 'Cancelada',
  },
  collaborators_status: {
    Pendiente: 'Pendiente',
    Aprobada: 'Aprobada',
    Rechazada: 'Rechazada',
    Cancelada: 'Cancelada',
  },
  collaborators_role: {
    Staff: 'Staff',
    Instructora: 'Instructora',
    Facilitadora: 'Facilitadora',
    Pendiente: 'Pendiente',
  },
  collaborators_language: {
    Pendiente: 'Pendiente',
    Inglés: 'Inglés',
    Español: 'Español',
  },
  collaborators_level: {
    Pendiente: 'Pendiente',
    Básico: 'Básico',
    Avanzado: 'Avanzado',
  },
  assistant_coordinators_role: {
    Coordinadora_de_informes: 'Coordinadora de informes',
    Coordinadora_Asociada: 'Coordinadora Asociada',
    Pendiente: 'Pendiente',
  },
};

const getEntityStatusByID = async (req, res) => {
  const { id } = req.params;
  const { entity } = req.query; //aqui escogemos que tabla "collaborators, "venues", etc

  const validEntities = ['collaborators', 'venues', 'assistant_coordinators', 'participants'];
  if (!validEntities.includes(entity)) {
    return res.status(400).json({ error: 'Entidad no válida' });
  }

  //dependiendo que escojamos, aqui se mapean las selecciones
  let selectFields = {};
  switch (entity) {
    case 'collaborators':
      selectFields = {
        status: true,
        role: true,
        level: true,
        language: true,
      };
      break;
    case 'venues':
      selectFields = {
        status: true,
      };
      break;
    case 'assistant_coordinators':
      selectFields = {
        role: true,
      };
      break;
    case 'participants':
      selectFields = {
        status: true,
      };
      break;
    default:
      return res.status(400).json({ error: 'Entidad no soportada' });
  }

  try {
    //aqui obtenemos los datos
    const entityData = await prisma[entity].findUnique({
      where: { id_collaborator: parseInt(id) },
      select: selectFields,
    });

    if (!entityData) {
      return res.status(404).json({ error: `${entity} no encontrado` });
    }

    //aqui se mapean los estados antes de enviarlos
    const mappedData = mapEnumValues(entity, entityData);

    res.json(mappedData);
  } catch (error) {
    console.error(`Error al obtener el estado de ${entity}:`, error);
    res.status(500).json({ error: `Error al obtener el estado de ${entity}` });
  }
};

// //aqui se mapean los estados antes de enviarlos
const mapEnumValues = (entity, entityData) => {
  let mappedEntityData = { ...entityData };

  if (entity === 'collaborators') {
    mappedEntityData.status =
      statusMaps.collaborators_status[mappedEntityData.status] || mappedEntityData.status;
    mappedEntityData.role =
      statusMaps.collaborators_role[mappedEntityData.role] || mappedEntityData.role;
    mappedEntityData.language =
      statusMaps.collaborators_language[mappedEntityData.language] || mappedEntityData.language;
    mappedEntityData.level =
      statusMaps.collaborators_level[mappedEntityData.level] || mappedEntityData.level;
  }

  if (entity === 'venues') {
    mappedEntityData.status =
      statusMaps.venues_status[mappedEntityData.status] || mappedEntityData.status;
  }

  if (entity === 'assistant_coordinators') {
    mappedEntityData.role =
      statusMaps.assistant_coordinators_role[mappedEntityData.role] || mappedEntityData.role;
  }

  if (entity === 'participants') {
    mappedEntityData.status =
      statusMaps.participants_status[mappedEntityData.status] || mappedEntityData.status;
  }

  return mappedEntityData;
};

module.exports = { getEntityStatusByID };

//prueba
