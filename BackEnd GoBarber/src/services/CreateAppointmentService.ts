import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
/**
 * Anotaçoes: DTO(data transfer object)
 *
 * Recebimento das infomaçoes
 * Tratativa de erros e excessoes
 * Acesso ao repositorio
 */

interface Request {
  provider_id: string;
  date: Date;
}
/**
 * SOLID
 *
 * Single Responsability Principle
 * Dependency Invertion Principle
 *
 *
 *
 * Dependency Inversion
 */

class CreateAppointmentService {
  // apenas um metodo em cada service, pode ser chamado de varias formas (execute, run, etc)

  public async execute({ date, provider_id }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }

    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
