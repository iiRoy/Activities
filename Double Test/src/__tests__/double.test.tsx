// Use a different variable name to avoid redeclaration conflicts
const { PrismaClient: TestPrismaClient } = require('@prisma/client');

const {
  createParticipant,
  getAllParticipants,
  getParticipantById,
  updateParticipant,
  deleteParticipant,
  getParticipantsTable,
  updateParticipantBasicInfo
} = require('../controllers/participants.controller');

jest.mock('@prisma/client', () => {
  const mPrisma = {
    participants: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn()
    },
    tutors: {
      findFirst: jest.fn(),
      update: jest.fn()
    }
  };
  return { PrismaClient: jest.fn(() => mPrisma) };
});
const mockPrisma = new TestPrismaClient();

const mockRes = () => {
  const res = {} as {
    status: jest.Mock;
    json: jest.Mock;
  };
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('participants.controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('createParticipant', () => {
    it('should create a participant and return 201', async () => {
      const req = { body: { name: 'Test' } };
      const res = mockRes();
      mockPrisma.participants.create.mockResolvedValue({ id_participant: 1, name: 'Test' });

      await createParticipant(req, res);

      expect(mockPrisma.participants.create).toHaveBeenCalledWith({ data: req.body });
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ id_participant: 1, name: 'Test' });
    });

    it('should handle errors', async () => {
      const req = { body: {} };
      const res = mockRes();
      mockPrisma.participants.create.mockRejectedValue(new Error('fail'));

      await createParticipant(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al crear participante' });
    });
  });

  describe('getAllParticipants', () => {
    it('should return all participants', async () => {
      const req = {};
      const res = mockRes();
      mockPrisma.participants.findMany.mockResolvedValue([{ id_participant: 1 }]);

      await getAllParticipants(req, res);

      expect(res.json).toHaveBeenCalledWith([{ id_participant: 1 }]);
    });

    it('should handle errors', async () => {
      const req = {};
      const res = mockRes();
      mockPrisma.participants.findMany.mockRejectedValue(new Error('fail'));

      await getAllParticipants(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al obtener participantes' });
    });
  });

  describe('getParticipantById', () => {
    it('should return participant by id', async () => {
      const req = { params: { id: '1' } };
      const res = mockRes();
      mockPrisma.participants.findUnique.mockResolvedValue({ id_participant: 1 });

      await getParticipantById(req, res);

      expect(mockPrisma.participants.findUnique).toHaveBeenCalledWith({
        where: { id_participant: 1 }
      });
      expect(res.json).toHaveBeenCalledWith({ id_participant: 1 });
    });

    it('should return 404 if participant not found', async () => {
      const req = { params: { id: '2' } };
      const res = mockRes();
      mockPrisma.participants.findUnique.mockResolvedValue(null);

      await getParticipantById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Participante no encontrado' });
    });

    it('should handle errors', async () => {
      const req = { params: { id: '3' } };
      const res = mockRes();
      mockPrisma.participants.findUnique.mockRejectedValue(new Error('fail'));

      await getParticipantById(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al obtener participante' });
    });
  });

  describe('updateParticipant', () => {
    it('should update a participant', async () => {
      const req = { params: { id: '1' }, body: { name: 'Updated' } };
      const res = mockRes();
      mockPrisma.participants.update.mockResolvedValue({ id_participant: 1, name: 'Updated' });

      await updateParticipant(req, res);

      expect(mockPrisma.participants.update).toHaveBeenCalledWith({
        where: { id_participant: 1 },
        data: req.body
      });
      expect(res.json).toHaveBeenCalledWith({ id_participant: 1, name: 'Updated' });
    });

    it('should handle errors', async () => {
      const req = { params: { id: '1' }, body: {} };
      const res = mockRes();
      mockPrisma.participants.update.mockRejectedValue(new Error('fail'));

      await updateParticipant(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al actualizar participante' });
    });
  });

  describe('deleteParticipant', () => {
    it('should delete a participant', async () => {
      const req = { params: { id: '1' } };
      const res = mockRes();
      mockPrisma.participants.delete.mockResolvedValue({});

      await deleteParticipant(req, res);

      expect(mockPrisma.participants.delete).toHaveBeenCalledWith({ where: { id_participant: 1 } });
      expect(res.json).toHaveBeenCalledWith({ message: 'Participante eliminado' });
    });

    it('should handle errors', async () => {
      const req = { params: { id: '1' } };
      const res = mockRes();
      mockPrisma.participants.delete.mockRejectedValue(new Error('fail'));

      await deleteParticipant(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al eliminar participante' });
    });
  });

  describe('getParticipantsTable', () => {
    it('should return formatted participants table', async () => {
      const req = {};
      const res = mockRes();
      mockPrisma.participants.findMany.mockResolvedValue([
        {
          id_participant: 1,
          name: 'A',
          paternal_name: 'B',
          maternal_name: 'C',
          email: 'a@b.com',
          groups: { name: 'Grupo1', venues: { name: 'Sede1' } },
          tutors: { phone_number: '123' }
        }
      ]);

      await getParticipantsTable(req, res);

      expect(res.json).toHaveBeenCalledWith([
        {
          id: 1,
          nombre: 'A B C',
          sede: 'Sede1',
          grupo: 'Grupo1',
          correo: 'a@b.com',
          telefono: '123'
        }
      ]);
    });

    it('should handle errors', async () => {
      const req = {};
      const res = mockRes();
      mockPrisma.participants.findMany.mockRejectedValue(new Error('fail'));

      await getParticipantsTable(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al obtener tabla de participantes' });
    });

    it('should handle missing group and tutor info', async () => {
      const req = {};
      const res = mockRes();
      mockPrisma.participants.findMany.mockResolvedValue([
        {
          id_participant: 2,
          name: 'X',
          paternal_name: 'Y',
          maternal_name: 'Z',
          email: 'x@y.com',
          groups: null,
          tutors: null
        }
      ]);

      await getParticipantsTable(req, res);

      expect(res.json).toHaveBeenCalledWith([
        {
          id: 2,
          nombre: 'X Y Z',
          sede: 'No asignado',
          grupo: 'No asignado',
          correo: 'x@y.com',
          telefono: 'No asignado'
        }
      ]);
    });
  });

  describe('updateParticipantBasicInfo', () => {
    it('should update participant basic info and tutor phone', async () => {
      const req = {
        params: { id: '1' },
        body: {
          name: 'A',
          paternal_name: 'B',
          maternal_name: 'C',
          email: 'a@b.com',
          id_group: 2,
          phone_number: '456'
        }
      };
      const res = mockRes();
      mockPrisma.tutors.findFirst.mockResolvedValue({ id_tutor: 10 });
      mockPrisma.participants.update.mockResolvedValue({ id_participant: 1 });
      mockPrisma.tutors.update.mockResolvedValue({});

      await updateParticipantBasicInfo(req, res);

      expect(mockPrisma.participants.update).toHaveBeenCalledWith({
        where: { id_participant: 1 },
        data: {
          name: 'A',
          paternal_name: 'B',
          maternal_name: 'C',
          email: 'a@b.com',
          id_group: 2
        }
      });
      expect(mockPrisma.tutors.update).toHaveBeenCalledWith({
        where: { id_tutor: 10 },
        data: { phone_number: '456' }
      });
      expect(res.json).toHaveBeenCalledWith({ id_participant: 1 });
    });

    it('should update participant basic info without tutor', async () => {
      const req = {
        params: { id: '1' },
        body: {
          name: 'A',
          paternal_name: 'B',
          maternal_name: 'C',
          email: 'a@b.com',
          id_group: 2
        }
      };
      const res = mockRes();
      mockPrisma.tutors.findFirst.mockResolvedValue(null);
      mockPrisma.participants.update.mockResolvedValue({ id_participant: 1 });

      await updateParticipantBasicInfo(req, res);

      expect(mockPrisma.participants.update).toHaveBeenCalled();
      expect(mockPrisma.tutors.update).not.toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ id_participant: 1 });
    });

    it('should handle errors', async () => {
      const req = { params: { id: '1' }, body: {} };
      const res = mockRes();
      mockPrisma.tutors.findFirst.mockRejectedValue(new Error('fail'));

      await updateParticipantBasicInfo(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al actualizar datos básicos del participante' });
    });

    it('should not update tutor phone if phone_number not provided', async () => {
      const req = {
        params: { id: '1' },
        body: {
          name: 'A',
          paternal_name: 'B',
          maternal_name: 'C',
          email: 'a@b.com',
          id_group: 2
        }
      };
      const res = mockRes();
      mockPrisma.tutors.findFirst.mockResolvedValue({ id_tutor: 10 });
      mockPrisma.participants.update.mockResolvedValue({ id_participant: 1 });

      await updateParticipantBasicInfo(req, res);

      expect(mockPrisma.tutors.update).not.toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ id_participant: 1 });
    });
  });

  // Additional tests

  describe('Edge cases and error handling', () => {
    it('should handle invalid id in getParticipantById', async () => {
      const req = { params: { id: 'notanumber' } };
      const res = mockRes();
      mockPrisma.participants.findUnique.mockRejectedValue(new Error('fail'));

      await getParticipantById(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al obtener participante' });
    });

    it('should handle invalid id in updateParticipant', async () => {
      const req = { params: { id: 'notanumber' }, body: { name: 'X' } };
      const res = mockRes();
      mockPrisma.participants.update.mockRejectedValue(new Error('fail'));

      await updateParticipant(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al actualizar participante' });
    });

    it('should handle invalid id in deleteParticipant', async () => {
      const req = { params: { id: 'notanumber' } };
      const res = mockRes();
      mockPrisma.participants.delete.mockRejectedValue(new Error('fail'));

      await deleteParticipant(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al eliminar participante' });
    });

    it('should handle missing body in createParticipant', async () => {
      const req = {};
      const res = mockRes();
      mockPrisma.participants.create.mockRejectedValue(new Error('fail'));

      await createParticipant(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al crear participante' });
    });
  });
});