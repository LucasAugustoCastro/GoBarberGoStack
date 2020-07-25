import { injectable, inject } from 'tsyringe';
// import { getDaysInMonth, getDate } from 'date-fns';

import { getHours, isAfter, getDay } from 'date-fns';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  provider_id: string;
  month: number;
  year: number;
  day: number;
}
type IResponse = Array<{
  hour: number;
  available: boolean;
}>;

@injectable()
class ListProviderDayAvailability {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    provider_id,
    month,
    year,
    day,
  }: IRequest): Promise<IResponse> {
    const appointments = await this.appointmentRepository.findAllInDayFromProvider(
      {
        provider_id,
        month,
        year,
        day,
      },
    );

    const hourStart = 8;

    const eachHourArray = Array.from(
      { length: 10 },
      (_, index) => index + hourStart,
    );
    const currentDate = new Date(Date.now());

    const availability = eachHourArray.map(hour => {
      const hasAppointmentInHour = appointments.find(
        appointment => getHours(appointment.date) === hour,
      );

      const compareDate = new Date(year, month - 1, day, hour);

      const dayOfTheWeek = getDay(compareDate);

      return {
        hour,
        available:
          !hasAppointmentInHour &&
          isAfter(compareDate, currentDate) &&
          dayOfTheWeek !== 0 &&
          dayOfTheWeek !== 6,
      };
    });

    return availability;
  }
}
export default ListProviderDayAvailability;
